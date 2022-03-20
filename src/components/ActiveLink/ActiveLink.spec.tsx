import { fireEvent, render, screen } from "@testing-library/react";
import { ActiveLink } from ".";

jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        asPath: "/",
      };
    },
  };
});

jest.mock("next/link", () => {
  return ({ children }: any) => children;
});

describe("ActiveLink component", () => {
  it("should to render correctly", () => {
    render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    );
    const link = screen.getByText("Home");

    expect(link).toBeInTheDocument();
  });

  it("should to be called one time", () => {
    const pushMock = jest.fn();
    render(
      <ActiveLink href="/" activeClassName="active">
        <a onClick={pushMock}>Home</a>
      </ActiveLink>
    );

    const link = screen.getByText("Home");

    fireEvent.click(link);

    expect(pushMock).toHaveBeenCalledTimes(1);
  });

  it("should to receive active class", () => {
    render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    );

    const link = screen.getByText("Home");

    expect(link).toHaveClass("active");
  });

  it("shouldn`t to receive active class", () => {
    render(
      <ActiveLink href="/home" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    );

    const link = screen.getByText("Home");

    expect(link).not.toHaveClass("active");
  });
});
