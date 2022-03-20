import { fireEvent, render, screen } from "@testing-library/react";
import { useSession, signIn } from "next-auth/react";
import { mocked } from "jest-mock";

import { SignInButton } from ".";

jest.mock("next-auth/react");

describe("SignInButton component", () => {
  it("should to render correctly when is not authenticated", () => {
    const useSessionMocked = mocked(useSession);
    useSessionMocked.mockReturnValueOnce({
      data: null,
      status: "unauthenticated",
    });
    render(<SignInButton />);

    expect(screen.getByText("Sign in with Github")).toBeInTheDocument();
  });

  it("should to render correctly when is authenticated", () => {
    const useSessionMocked = mocked(useSession);
    useSessionMocked.mockReturnValueOnce({
      data: {
        user: {
          name: "Daniel Vargas",
        },
        expires: null,
      } as any,
      status: "unauthenticated",
    });
    render(<SignInButton />);

    expect(screen.getByText("Daniel Vargas")).toBeInTheDocument();
  });

  it("should to call the function signIn", () => {
    const useSessionMocked = mocked(useSession);
    const signInMocked = mocked(signIn);

    useSessionMocked.mockReturnValueOnce({
      data: null,
      status: "unauthenticated",
    });
    render(<SignInButton />);

    const button = screen.getByText("Sign in with Github");

    fireEvent.click(button);

    expect(signInMocked).toHaveBeenCalledTimes(1);
  });

  it("should to call the function signOut", () => {
    const useSessionMocked = mocked(useSession);
    const signOutMocked = mocked(signIn);

    useSessionMocked.mockReturnValueOnce({
      data: {
        user: {
          name: "John Doe",
        },
        expires: null,
      } as any,
      status: "unauthenticated",
    });
    render(<SignInButton />);

    const button = screen.getByText("John Doe");

    fireEvent.click(button);

    expect(signOutMocked).toHaveBeenCalledTimes(1);
  });
});
