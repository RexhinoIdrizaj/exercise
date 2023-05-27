import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UIListItem from "../UI/UIListItem";
import { WarningTwoTone } from "@mui/icons-material";

describe("UIListItem", () => {
  test("renders the main text correctly", () => {
    render(<UIListItem mainText="Item 1" />);

    const mainText = screen.getByText("Item 1");

    expect(mainText).toBeInTheDocument();
  });

  test("renders the right text correctly", () => {
    render(<UIListItem mainText="Item 2" rightText="10" />);

    const rightText = screen.getByText("10");

    expect(rightText).toBeInTheDocument();
  });

  test("renders the left icon correctly", () => {
    const leftIcon = <WarningTwoTone />;

    render(<UIListItem mainText="Item 3" leftIcon={leftIcon} />);

    const iconElement = screen.getByTestId("WarningTwoToneIcon");

    expect(iconElement).toBeInTheDocument();
  });

  test("calls the onClick handler when clicked", () => {
    const onClickMock = jest.fn();

    render(<UIListItem mainText="Item 4" onClick={onClickMock} />);

    const listItemButton = screen.getByRole("button");

    userEvent.click(listItemButton);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
