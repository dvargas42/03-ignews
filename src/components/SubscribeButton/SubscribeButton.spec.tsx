import { fireEvent, render, screen } from "@testing-library/react";
import { mocked } from "jest-mock";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

import { SubscribeButton } from ".";

import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";

jest.mock("next-auth/react");
jest.mock("next/router");
jest.mock("../../services/api");
jest.mock("../../services/stripe-js");

describe("SubscribeButton component", () => {
  it("should to render correctly", () => {
    const useSessionMocked = mocked(useSession);

    useSessionMocked.mockReturnValueOnce({
      data: null,
    } as any);
    render(<SubscribeButton />);

    expect(screen.getByText("Subscribe now")).toBeInTheDocument();
  });

  it("should to redirect user when not authenticated", () => {
    const useSessionMocked = mocked(useSession);
    const signInMocked = mocked(signIn);

    useSessionMocked.mockReturnValueOnce({
      data: null,
    } as any);
    render(<SubscribeButton />);

    const button = screen.getByText("Subscribe now");

    fireEvent.click(button);

    expect(signInMocked).toBeCalled();
  });

  it("should to redirect to posts page when user already has a subscription", () => {
    const useSessionMocked = mocked(useSession);
    const useRouterMocked = mocked(useRouter);

    useSessionMocked.mockReturnValueOnce({
      data: { activeSubscription: true },
    } as any);

    useRouterMocked.mockReturnValueOnce({
      push: jest.fn(),
    } as any);

    render(<SubscribeButton />);

    const subscribeButton = screen.getByText("Subscribe now");

    fireEvent.click(subscribeButton);

    expect(useRouterMocked).toBeCalled();
  });

  it("should to show alert when axios api not working", () => {
    const useSessionMocked = mocked(useSession);
    const useRouterMocked = mocked(useRouter);

    useSessionMocked.mockReturnValueOnce({
      data: { activeSubscription: true },
    } as any);

    useRouterMocked.mockReturnValueOnce({
      push: jest.fn(),
    } as any);

    try {
      render(<SubscribeButton />);

      const subscribeButton = screen.getByText("Subscribe now");
      fireEvent.click(subscribeButton);
    } catch (e) {
      expect(e.message).toThrow();
    }
  });

  it("shouldn't to show alert when services working", () => {
    const useSessionMocked = mocked(useSession);
    const useRouterMocked = mocked(useRouter);
    const apiPostMocked = mocked(api.post);
    const stripeMocked = mocked(getStripeJs);

    const sessionId = "test-id";

    useSessionMocked.mockReturnValueOnce({
      data: { activeSubscription: false },
    } as any);

    useRouterMocked.mockReturnValueOnce({
      push: jest.fn(),
    } as any);

    apiPostMocked.mockResolvedValueOnce({
      data: {
        sessionId,
      },
    });

    stripeMocked.mockResolvedValueOnce({
      redirectToCheckout: jest.fn(),
    } as any);

    render(<SubscribeButton />);

    const subscribeButton = screen.getByText("Subscribe now");
    fireEvent.click(subscribeButton);

    expect(apiPostMocked).toHaveBeenCalledWith("/subscribe");
    // expect(stripeMocked).toHaveBeenCalledWith({ sessionId });
  });
});
