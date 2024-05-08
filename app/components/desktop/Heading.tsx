"use client";
import React, { useContext } from "react";
import { type Locale } from "@/i18n.config";
import { useLocale, useTranslations } from "next-intl";
import LanguageSwitcher from "../common/LanguageSwitcher";
import { MdMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { Popover } from "flowbite-react";
import { AppContext } from "@/app/hooks/AppContext";

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
  const t = useTranslations("Index");
  const locale = useLocale() as Locale;
  const appData = useContext(AppContext);
  const { idElementFocus = '' } = appData;
  return (
    <div
      id="heading"
      className="section self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-4 box-border top-[0] z-[99] sticky max-w-full"
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
              className={`text-label-16px-bold cursor-pointer hover:text-neutral-300 ${idElementFocus === "session" && "text-neutral-white"}`}
            >
              {t("home")}
            </b>
            <b
              onClick={() => handleScroll("#aboutme")}
              className={`text-label-16px-bold cursor-pointer hover:text-neutral-300 ${idElementFocus === "aboutme" && "text-neutral-white"}`}
            >
              {t("aboutMe")}
            </b>

            <b
              onClick={() => handleScroll("#workexperience")}
              className={`text-label-16px-bold cursor-pointer hover:text-neutral-300 ${idElementFocus === "workexperience" && "text-neutral-white"}`}
            >
              {t("workExperience")}
            </b>
            <b
              onClick={() => handleScroll("#projects")}
              className={`text-label-16px-bold cursor-pointer hover:text-neutral-300 ${idElementFocus === "projects" && "text-neutral-white"}`}
            >
              {t("projects")}
            </b>

            <Popover
              aria-labelledby="default-popover"
              className="bg-neutral-700 rounded-2xl"
              theme={{
                arrow:{
                  base:"absolute h-2 w-2 z-0 rotate-45 mix-blend-lighten bg-neutral-700"
                }
              }}
              content={
                <div className="w-64 text-sm text-neutral-100 bg-neutral-700 border-none">
                  <div className="px-3 py-2">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row gap-2">
                          <MdMailOutline size={24}/> trinhxuanduc997@gmail.com
                        </div>
                        <div className="flex flex-row gap-2">
                          <FiPhone size={24}/> +84967 084 484
                        </div>
                    </div>
                  </div>
                </div>
              }
            >
              <button
                tabIndex={0}
                className="py-2 px-4 rounded-lg bg-primary text-label-16px-regular text-neutral-100 hover:opacity-85"
              >
                {t("contactMe")}
              </button>
            </Popover>
            <LanguageSwitcher locale={locale} />
          </div>
        </header>
      </div>
    </div>
  );
}
