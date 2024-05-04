'use client'
import React, { MouseEvent } from "react";
import ReadMore from "./ReadMore";

interface ICard {
  index: number;
  imageUrl: string;
  title: string;
  description: string;
}

export default function Card(props: ICard) {
  const { imageUrl, title, description, index } = props;
  return (
    <div className={`textCard flex flex-col w-[19rem] h-fit bg-neutral-700 p-4 rounded-2xl gap-2 animate__animated animate__fadeInUp animate__delay-1s`} style={{"--animate-delay": index * 0.3 + "s"} as React.CSSProperties}>
      <div className="flex flex-col items-center">
        <img
          className="w-[4rem] h-[4rem] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={imageUrl}
        />
        <p className="text-label-24px-bold text-primary">{title}</p>
      </div>
      <div className="text-body-14px-regular h-fit text-neutral-300 text-center overflow-hidden min-h-[104px]">
        <ReadMore text={description} />
      </div>
    </div>
  );
}
