import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Carousel from "../../src/components/Carousel";

const data = [
  { id: 1, title: "slide 1", content: "slide 1" },
  { id: 2, title: "slide 2", content: "slide 2" },
  { id: 3, title: "slide 3", content: "slide 3" },
  { id: 4, title: "slide 4", content: "slide 4" },
];

describe("Carousel", () => {
  it("can show slide data", () => {
    const { baseElement } = render(<Carousel data={data} />);
    expect(baseElement).toMatchSnapshot();
  });
});

describe("Carousel button", () => {
  it("changes slide when button is clicked", async () => {
    // first render
    render(<Carousel data={data} />);

    // show only slide 1 and rightBtn
    expect(screen.queryByText("slide 1"));
    expect(screen.queryByTitle("rightBtn"));
    expect(screen.queryByText("slide 4")).toBeFalsy();
    expect(screen.queryByTitle("leftBtn")).toBeFalsy();

    // waiting for clicking rightBtn
    const nextButton = screen.getByTitle("rightBtn");
    await fireEvent.click(nextButton);

    // show only slide 4 and leftBtn
    expect(screen.queryByText("slide 1")).toBeFalsy();
    expect(screen.queryByTitle("rightBtn")).toBeFalsy();
    expect(screen.queryByTitle("leftBtn"));
    expect(screen.queryByText("slide 4"));

    // waiting for clicking rightBtn
    const prevButton = screen.getByTitle("leftBtn");
    await fireEvent.click(prevButton);

    // show only slide 1 and rightBtn
    expect(screen.queryByText("slide 1"));
    expect(screen.queryByTitle("rightBtn"));
    expect(screen.queryByText("slide 4")).toBeFalsy();
    expect(screen.queryByTitle("leftBtn")).toBeFalsy();
  });
});
