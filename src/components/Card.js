"use client";

import React from "react";
import { CiClock2 } from "react-icons/ci";

const Card = ({ card }) => {
  return (
    <div>
      <div className={`${card.id === 1 ? "" : "invisible"} mb-[40px]`}>
        &#60; &#47; Trending Now &#62;
      </div>

      {/* when hover Card */}
      <div
        className={`cardHoverBgImg${card.id} absolute left-0 bottom-0 card w-[416px] h-[278px]`}></div>
      {/* Card */}
      <div
        className={`cardBgImg${card.id} card w-[416px] h-[278px] transition-all duration-300 hover:translate-y-[-4px] hover:translate-x-[4px]`}>
        <div
          className={
            card.img ? " cardImg h-[238px] m-[20px] ml-[16px] " : "mx-[40px]"
          }>
          {/* color bar */}
          <div
            className={`cardBar${card.id} w-[46px] h-[4px] rounded-[11px] `}></div>

          {/* color title */}
          <div
            className={`${
              card.img && "ml-[15px]"
            } card-title font-[next-book-bold] text-[16px] leading-[16px]`}>
            {card.title.content}
          </div>
          {/* color badges */}
          {card.badges && (
            <div className="my-[16px] h-[18px] flex gap-[16px]">
              {card.badges.map((badge, index) => (
                <div
                  key={index}
                  className="badge badge-outline py-[4px] px-[8px] font-[next-book-thin] text-[9px] leading-[9.9px] text-[color:var(--card-white-hex)] border-[color:var(--card-gray-hex)]">
                  {badge}
                </div>
              ))}
            </div>
          )}
          {/* color content */}
          {card.content && (
            <p className="text-[12px] leading-[13.2px] text-[color:var(--card-gray-hex)]">
              {card.content}
            </p>
          )}

          {/* color details */}
          {card.details && (
            <div className="mt-[51px]">
              {card.details.map((detail, index) => (
                <div key={index}>
                  <div className="mr-[1px] flex justify-between pt-[16px] pb-[5px] ">
                    <p className="text-[12px] leading-[13.2px] text-[color:var(--card-gray-hex)]">
                      {detail[0]}
                    </p>
                    <p className="font-[neue-machina] font-300 text-[14px] leading-[14px] text-[color:var(--card-title-hex)]">
                      {detail[1]}
                    </p>
                  </div>
                  <div className="mr-[2px] border-b border-[color:var(--card-border-hex)]"></div>
                </div>
              ))}
            </div>
          )}

          {/* color bottom */}
          <div
            className={`cardBottom${card.id} flex justify-between items-center`}>
            <div className="flex gap-[12px] font-[neue-machina] text-[12px] leading-[12px]">
              {card.time && (
                <div className="flex items-center gap-[8px] w-[87px]">
                  <CiClock2 className="text-[14px]" />{" "}
                  <span className="">{card.time}</span>
                </div>
              )}
              {card.course && (
                <div className="flex items-center gap-[8px] w-[109px]">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.57871 12.8638V2.04656C7.19864 0.856661 4.21415 0.919762 2.76941 1.10005V11.8186C6.08183 11.2105 7.35578 12.2621 7.57871 12.8638Z"
                      stroke="#F2F2F2"
                      strokeWidth="0.6"
                    />
                    <path
                      d="M7.57779 12.8638V2.04656C7.95785 0.856661 10.9423 0.919762 12.3871 1.10005V11.8186C9.07466 11.2105 7.80071 12.2621 7.57779 12.8638Z"
                      stroke="#F2F2F2"
                      strokeWidth="0.6"
                    />
                    <path
                      d="M2.75602 2.42983H1V13.6857L14.0904 13.9999V2.42983H12.3343"
                      stroke="#F2F2F2"
                      strokeWidth="0.6"
                    />
                    <path
                      d="M7.56689 13.8968V12.6798"
                      stroke="#F2F2F2"
                      strokeWidth="0.6"
                    />
                  </svg>
                  <span className="">{card.course}</span>
                </div>
              )}
            </div>

            {card.completed && (
              <div className="ml-[8.5px] badge border-0 px-[16px] flex gap-[8px] w-[140px] h-[36px] font-[next-book-thin] text-[10px] leading-[11px] text-[color:var(--card-process-hex)] bg-[color:var(--card-process-bg-hex)]">
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.5287 6.82826L16.9374 5.27026C17.5284 5.12659 17.9277 5.85856 17.4871 6.27776L12.8109 10.7262C12.7251 10.8079 12.6656 10.9133 12.6402 11.029L11.3676 16.8186C11.2267 17.4595 10.3038 17.4323 10.2008 16.7842L9.23218 10.6867C9.20918 10.5419 9.13346 10.4107 9.01958 10.3184L4.01681 6.26343C3.51572 5.85727 3.93024 5.05587 4.55128 5.23013L10.2279 6.82298C10.3261 6.85052 10.4297 6.85234 10.5287 6.82826Z"
                    fill="#9EFA13"
                  />
                  <path
                    d="M6.908 11.6474C6.97335 11.6969 7.0153 11.7713 7.02392 11.8528L7.4785 16.1507C7.51224 16.4697 7.08635 16.6082 6.92597 16.3305L2.86686 9.29987C2.70486 9.01927 3.04527 8.71898 3.30347 8.91472L6.908 11.6474Z"
                    fill="#9EFA13"
                  />
                </svg>
                <div className="w-[80px] h-[9px]">{card.completed}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
