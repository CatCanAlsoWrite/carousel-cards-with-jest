"use client";

import React from "react";

const Button = ({ id, onClick, position, bg, margin, img }) => {
  return (
    <div
      onClick={onClick}
      className={`${position} ${bg} flex items-center absolute top-[-278px] w-[192px] h-[278px] pointer-events-auto  from-[color:var(--cover-arrow-hex)] via-[color:var(--cover-arrow-via-hex)]`}>
      <button
        className={`${margin} btn btn-circle border-[color:var(--card-gray-hex)] hover:border-0 bg-transparent hover:bg-[color:var(--card-gray-hex)]`}>
        <svg
          width="13"
          height="18"
          viewBox="0 0 13 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d={`${img}`}
            stroke="white"
            strokeWidth="2"
            strokeLinejoin="bevel"
          />
          <title>{id}</title>
        </svg>
      </button>
    </div>
  );
};

export default Button;
