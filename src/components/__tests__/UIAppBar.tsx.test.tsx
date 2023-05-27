import { render, screen } from "@testing-library/react";
import UIAppBar from "../UI/UIAppBar";

describe("UIAppBar", () => {
  test("renders the app bar with correct title", () => {
    render(<UIAppBar />);

    const appBarTitle = screen.getByText("NewGlobe Exercise");

    expect(appBarTitle).toBeInTheDocument();
  });
});
