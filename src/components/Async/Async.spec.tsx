import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { Async } from ".";

describe("Async component", () => {
  // it("should to render correctly 01", () => {
  //   render(<Async />);

  //   expect(screen.getByText("Hello World")).toBeInTheDocument();
  // });

  // it("should to render correctly 02 - no wait", () => {
  //   render(<Async />);

  //   expect(screen.getByText("Button")).toBeInTheDocument();
  // });

  // it("should to render correctly 03 - wait 5 seconds", async () => {
  //   render(<Async />);

  //   expect(
  //     await screen.findByText("Button", {}, { timeout: 5000 })
  //   ).toBeInTheDocument();
  // });

  // it("should to render correctly 04 - wait 5 seconds", async () => {
  //   render(<Async />);

  //   await waitFor(
  //     () => {
  //       return expect(screen.getByText("Button")).toBeInTheDocument();
  //     },
  //     { timeout: 5000 }
  //   );
  // });

  it("should to render correctly 05 - wait 3 seconds", async () => {
    render(<Async />);

    await waitFor(
      () => {
        return expect(screen.queryByText("Button")).not.toBeInTheDocument();
      },
      { timeout: 3000 }
    );
  });

  it("should to render correctly 06 - wait 3 seconds", async () => {
    render(<Async />);

    await waitForElementToBeRemoved(screen.queryByText("Button"), {
      timeout: 3000,
    });
  });
});
