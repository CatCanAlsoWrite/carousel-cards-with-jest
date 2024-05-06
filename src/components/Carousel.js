"use client";

import React, { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";

const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(3);

  const prevSlide = () => {
    setSlide(0);
  };
  const nextSlide = () => {
    setSlide(3);
  };

  return (
    <div>
      <div className="overflow-hidden flex  font-[next-poster]">
        {data.map((card, index) => {
          return (
            <div key={index} className={`card${card.id} relative pt-[4px]`}>
              {slide === index || <Card card={card} />}
            </div>
          );
        })}
      </div>
      <div className="w-[1602px] relative ">
        {slide === 0 || (
          <Button
            onClick={prevSlide}
            position="right-0"
            bg="bg-gradient-to-l"
            margin="ml-[18px]"
            img="M1 1L12 9L1 17"
          />
        )}
        {slide === 3 || (
          <Button
            onClick={nextSlide}
            position="left-0"
            bg="bg-gradient-to-r"
            margin="ml-[121px]"
            img="M12 17L1 9L12 1"
          />
        )}
      </div>
    </div>
  );
};

export default Carousel;
