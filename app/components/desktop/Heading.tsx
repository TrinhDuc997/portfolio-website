"use client";
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import React from "react";
import { Link, type Locale } from "@/i18n.config";
import { useLocale, useTranslations } from "next-intl";
import LanguageSwitcher from "../common/LanguageSwitcher";


const handleScroll = (elementName = "") => {
  const element = document.querySelector(elementName) as HTMLElement;
  if (!!element) {
    const top = elementName === "#heading" ? 0 : element.offsetTop - 110;
    scrollTo({ top });
    if (elementName === "#projects") {
      handleAnimationProjectCardWhenScroll();
    }
  }
};
const handleAnimationProjectCardWhenScroll = () => {
  const cardElements = document.querySelectorAll(".projectCard");
  if (!!cardElements) {
    const cards = Array.from(cardElements);
    [...cards].forEach((item) => {
      item.classList.remove("animate__animated", "animate__fadeInRightBig");
    });
    setTimeout(() => {
      [...cards].forEach((item) => {
        item.classList.add("animate__animated", "animate__fadeInRightBig");
      });
    }, 300);
  }
};
export default function Heading() {
  const t = useTranslations('Index');
  const locale = useLocale() as Locale;
  return (
    <div
      id="heading"
      className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-4 box-border top-[0] z-[99] sticky max-w-full"
    >
      <div className="flex-1 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] bg-neutral-900 flex flex-row items-start justify-center py-0 px-6 box-border max-w-full">
        <header className="flex-1 flex flex-row items-start justify-between max-w-screen-2xl gap-[20px] text-left text-29xl text-neutral-500 font-heading-h4">
          <div
            onClick={() => handleScroll("#heading")}
            className="cursor-pointer flex flex-col items-center justify-center py-5 px-2.5 z-20"
          >
            <h1 className="m-0 relative text-5xl bg-gradient-to-r from-gradient-primary-from to-gradient-primary-to leading-[125%] font-bold font-inherit text-transparent !bg-clip-text bg-Primary-Linear-to-right [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[78px] whitespace-nowrap">
              DT.
            </h1>
          </div>
          <div className="flex flex-row items-center justify-center py-8 px-0 box-border gap-8 lg:gap-12 max-w-full text-base">
            <b
              onClick={() => handleScroll("#heading")}
              className="relative leading-[125%] inline-block text-neutral-white cursor-pointer hover:text-neutral-300"
            >
              {t("home")}
            </b>
            <b
              onClick={() => handleScroll("#aboutme")}
              className="relative leading-[125%] inline-block whitespace-nowrap cursor-pointer hover:text-neutral-300"
            >
              {t("aboutMe")}
            </b>

            <b
              onClick={() => handleScroll("#workexperience")}
              className="relative leading-[125%] whitespace-nowrap cursor-pointer hover:text-neutral-300"
            >
              {t("workExperience")}
            </b>
            <b
              onClick={() => handleScroll("#projects")}
              className="relative leading-[125%] inline-block cursor-pointer hover:text-neutral-300"
            >
              {t("projects")}
            </b>

            <Popover placement="bottom">
              <PopoverTrigger>
                <button className="cursor-pointer [border:none] py-2 px-4 bg-primary rounded-lg flex flex-row items-center justify-center whitespace-nowrap hover:bg-opacity-85">
                  <div className="relative text-label-16px-regular text-neutral-100 text-left inline-block">
                    {t("contactMe")}
                  </div>
                </button>
              </PopoverTrigger>
              <PopoverContent className="bg-neutral-700 p-2 rounded-lg">
                <PopoverArrow bg="#404040" />
                <PopoverBody className="text-neutral-100">
                  <div className="flex flex-col items-start justify-start gap-2 max-w-full">
                    <div className="flex flex-row items-start justify-start gap-[8px]">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                        alt=""
                        src="/icoutlineemail.svg"
                      />
                      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                        <b className="relative leading-[125%] whitespace-nowrap">
                          trinhxuanduc997@gmail.com
                        </b>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[8px]">
                      <img
                        className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
                        alt=""
                        src="/telephonefill.svg"
                      />
                      <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                        <b className="relative leading-[125%] inline-block min-w-[119px] whitespace-nowrap">
                          +84967 084 484
                        </b>
                      </div>
                    </div>
                  </div>
                </PopoverBody>
              </PopoverContent>
            </Popover>

            <LanguageSwitcher locale={locale}/>
          </div>
        </header>
      </div>
    </div>
  );
}
