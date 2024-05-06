"use client";
import React, { useState } from "react";

interface ICard {
  index: number;
  imageUrl: string;
  title: string;
  description: string;
}

export default function Card(props: ICard) {
  const { imageUrl, title, description, index } = props;
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`textCard flex overflow-hidden flex-col justify-center ${open ? "w-[300px] h-[250px]" : "w-[100px] h-[100px]" } bg-neutral-700 p-2 rounded-2xl gap-2 animate__animated animate__fadeInUp animate__delay-1s  transition-all duration-500 ease-in-out`}
      style={{ "--animate-delay": index * 0.3 + "s" } as React.CSSProperties}
    >
      <div onClick={() => setOpen(!open)} className="flex flex-col items-center">
        <img
          className="w-[3rem] h-[3rem] relative overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src={imageUrl}
        />
        <p className="text-label-16px-bold text-primary">{title}</p>
      </div>
      { open &&
        <div className="text-body-14px-regular h-fit text-neutral-300 text-center overflow-hidden">
            {description}
        </div>
      }
    </div>
  );
}
