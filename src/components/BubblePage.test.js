import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetchColors as mockFetchColors } from "../api/fetchColors";

jest.mock("../api/fetchColors");

test("Renders BubblePage without errors", () => {
  // Finish this test
  render(<BubblePage />);
});

test("Fetches data and renders the bubbles on mounting", async () => {
  // Finish this test
  mockFetchColors.mockResolvedValueOnce({
    data: [
      {
        color: "aliceblue",
        code: {
          hex: "#f0f8ff",
        },
        id: 1,
      },
      {
        color: "limegreen",
        code: {
          hex: "#99ddbc",
        },
        id: 2,
      },
      {
        color: "aqua",
        code: {
          hex: "#00ffff",
        },
        id: 3,
      }]
  });

  const { getAllByTestId } = render(<BubblePage />);

  await waitFor(() => expect(getAllByTestId(/color/i)).toHaveLength(3));

});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading