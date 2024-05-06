"use client";

import Carousel from "@/components/Carousel";
import data from "../../src/data/cards.json";

export default function Home() {
  return (
    <>
      <div className="mt-[122px]">
        <Carousel data={data.cards} />
      </div>
    </>
  );
}
