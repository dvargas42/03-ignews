import { render, screen } from "@testing-library/react";
import { mocked } from "jest-mock";
import { useSession } from "next-auth/react";

import Home, { getStaticProps } from "../../pages";

import { stripe } from "../../services/stripe";

jest.mock("next-auth/react");
jest.mock("../../services/stripe");

describe("Home page", () => {
  it("should to render correctly", () => {
    const useSessionMocked = mocked(useSession);

    useSessionMocked.mockReturnValueOnce({
      data: null,
    } as any);

    render(<Home product={{ priceId: "fake-price-id", amount: "R$10.00" }} />);

    expect(screen.getByText(/R\$10\.00 month/i)).toBeInTheDocument();
  });

  it("should load initial data", async () => {
    const stripeMocked = mocked(stripe.prices.retrieve);

    stripeMocked.mockResolvedValueOnce({
      id: "fake-price-id",
      unit_amount: 1000,
    } as any);

    const response = await getStaticProps({});

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          product: {
            priceId: "fake-price-id",
            amount: "$10.00",
          },
        },
      })
    );
  });
});
