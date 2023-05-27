import { render, screen } from "@testing-library/react";
import DevicesList from "../DevicesList";
import {
  allDeviceStatisticsMocks,
  deviceStatisticsMocks,
  deviceStatisticsWithUnknownMocks,
} from "../../mocks";

describe("UIDeviceList", () => {
  test("renders the list of devices correctly with known percent per day", () => {
    render(<DevicesList data={deviceStatisticsMocks} />);
    const dataTestId = "device";
    const deviceItems = screen.getAllByTestId(`${dataTestId}-list-item`);

    expect(deviceItems.length).toBe(deviceStatisticsMocks.length);

    const leftTextElements = screen.getAllByTestId(`${dataTestId}-left-text`);
    const leftIconElements = screen.getAllByTestId(`${dataTestId}-left-icon`);

    deviceStatisticsMocks.forEach((device, index) => {
      const leftTextElement = leftTextElements[index];
      const leftIconElement = leftIconElements[index];

      expect(leftTextElement).toHaveTextContent(device.serialNumber);
      expect(leftIconElement).toBeInTheDocument();
    });
  });

  test("renders the list of devices correctly with unknown percent per day", () => {
    render(<DevicesList data={deviceStatisticsWithUnknownMocks} />);
    const dataTestId = "device";
    const deviceItems = screen.getAllByTestId(`${dataTestId}-list-item`);

    expect(deviceItems.length).toBe(deviceStatisticsWithUnknownMocks.length);

    const leftTextElements = screen.getAllByTestId(`${dataTestId}-left-text`);
    const rightTextElements = screen.getAllByTestId(`${dataTestId}-right-text`);
    const leftIconElements = screen.getAllByTestId(`${dataTestId}-left-icon`);

    deviceStatisticsWithUnknownMocks.forEach((device, index) => {
      const leftTextElement = leftTextElements[index];
      const rightTextElement = rightTextElements[index];
      const leftIconElement = leftIconElements[index];

      expect(leftTextElement).toHaveTextContent(device.serialNumber);
      expect(leftIconElement).toBeInTheDocument();
      expect(rightTextElement).toHaveTextContent("unknown");
    });
  });

  test("renders the right icon correctly", () => {
    render(<DevicesList data={allDeviceStatisticsMocks} />);

    const rightIconElements = screen.queryAllByTestId("Battery60TwoToneIcon");

    expect(rightIconElements[0]).toHaveClass("MuiSvgIcon-colorError");
    expect(rightIconElements[1]).toHaveClass("MuiSvgIcon-colorSuccess");
    expect(rightIconElements[2]).toBeUndefined();
  });
});
