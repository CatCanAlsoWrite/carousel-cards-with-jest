import React from "react";
import { render } from "@testing-library/react";
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
