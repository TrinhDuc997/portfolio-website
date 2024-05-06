"use client"

import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import ReadMore from "../common/ReadMore";
import { useTranslations } from "next-intl";
import { FaAngleRight } from "react-icons/fa";
import { CiCircleChevRight } from "react-icons/ci";
import { LuArrowRightCircle } from "react-icons/lu";

interface technologyUsed {
  value: string;
  label: string;
}
export interface IProjectCard {
  index?: number;
  imageURL: string;
  projectName: string;
  subTitle: string;
  description: string;
  technologiesUsed: Array<technologyUsed>;
  githubURL?: string;
  demoURL?: string;
}

const handleOpenLink = (url?: string) => {
  if(!!url) window.open(url, "_blank")
}

export default function ProjectCard(props: IProjectCard) {
  const t = useTranslations('Index');
  const {
    projectName,
    imageURL,
    subTitle,
    description,
    technologiesUsed = [],
    index = 0,
    demoURL,
    githubURL,
  } = props;
  return (
    <div
      className="projectCard w-[250px] rounded-2xl gap-2 box-border overflow-hidden shrink-0 flex flex-col items-start justify-start p-4 max-w-full border-[1px] border-solid border-neutral-500 animate__animated animate__fadeInRightBig animate__delay-1s"
      style={{ "--animate-delay": index * 0.3 + "s" } as React.CSSProperties}
    >
      <div className="self-stretch h-[200px] rounded-lg overflow-hidden shrink-0 flex flex-col items-start justify-center">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src={imageURL}
        />
      </div>
      <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[8px]">
        <h3 className="m-0 self-stretch relative text-heading-h4 text-neutral-100 text-ellipsis line-clamp-1">
          {projectName}
        </h3>
        <div className="self-stretch relative text-label-14px-bold text-neutral-300 text-ellipsis line-clamp-1">
          {subTitle}
        </div>
        <div className="self-stretch relative text-body-12px-regular text-neutral-500 text-ellipsis line-clamp-2">
          {description}
        </div>
      </div>
      <div className="overflow-hidden flex flex-col items-start justify-start py-2 gap-[8px]">
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-0 pl-0 gap-[8px]">
          {technologiesUsed.filter((i,index) => index < 2).map((item, index) => {
            return (
              <div
                key={index}
                className="py-1.5 p-2 bg-[transparent] rounded-3xl box-border overflow-hidden flex-row items-center justify-center border-[1px] border-solid border-neutral-300 relative text-label-16px-bold text-neutral-300"
              >
                {item.label}
              </div>
            );
          })}
          <div className="py-1.5 px-[15px] rounded-3xl box-border overflow-hidden flex flex-row items-center justify-center gap-[8px] bg-neutral-700">
            <div className="relative text-label-16px-regular text-neutral-white">
              +{technologiesUsed.length - 2} more
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start py-2 gap-8">
          {!!githubURL ? (
            <button
              className="text-neutral-100 text-label-16px-bold hover:text-neutral-300  flex flex-row gap-2"
              onClick={() => handleOpenLink(githubURL)}
            >
              {t("view")} Github <IoArrowForwardCircleOutline size={24} />
            </button>
          ) : (
            <button
              className="text-neutral-500 text-label-16px-bold cursor-not-allowed  flex flex-row gap-2"
            >
             {t("view")} Github <IoArrowForwardCircleOutline size={24} />
            </button>
          )}
          {/* {!!demoURL? (
            <button
              className="text-neutral-100 text-label-16px-bold hover:text-neutral-300  flex flex-row gap-2"
              onClick={() => handleOpenLink(demoURL)}
            >
              Demo <IoArrowForwardCircleOutline size={24} />
            </button>
          ) : (
            <button
              className="text-neutral-500 text-label-16px-bold cursor-not-allowed flex flex-row gap-2"
            >
              Demo <IoArrowForwardCircleOutline size={24} />
            </button>
          )} */}
        </div>
      </div>
    </div>
  );
}
