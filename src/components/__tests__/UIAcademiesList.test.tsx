import { render, screen, fireEvent } from "@testing-library/react";
import AcademiesList from "../AcademiesList";
import { academiesMocks } from "../../mocks";

describe("AcademiesList", () => {
  test("calls onItemClick with the correct academy ID", () => {
    const handleClick = jest.fn();

    render(
      <AcademiesList
        data={academiesMocks}
        selectedId={null}
        onItemClick={handleClick}
      />
    );
    const dataTestId = "academy";
    const academyItems = screen.getAllByTestId(`${dataTestId}-list-item`);
    expect(academyItems.length).toBe(academiesMocks.length);

    const academyItem = screen.getByText("academy1");
    fireEvent.click(academyItem);

    expect(handleClick).toHaveBeenCalledWith("academy1");
  });
});
