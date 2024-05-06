"use client";
import React, { useContext } from "react";
import { Navbar } from "flowbite-react";
import { type Locale } from "@/i18n.config";
import { useLocale, useTranslations } from "next-intl";
import LanguageSwitcher from "../common/LanguageSwitcher";
import { AppContext } from "@/app/hooks/useIntersectionObsercer";

const handleScroll = (elementName:string) => {
  const element = document.querySelector(elementName) as HTMLElement;
  if (!!element) {
    const top = elementName === "#mobile-heading" ? 0 : element.offsetTop - 80;
    scrollTo({ top: top });
    if (elementName === "#mobile-projects") {
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
    }, 400);
  }
};

export default function HeadingMobile() {
  const t = useTranslations("Index");
  const locale = useLocale() as Locale;
  const appData = useContext(AppContext);
  const { idElementFocus = '' } = appData;
  return (
    <Navbar
      theme={{
        toggle: {
          base: "inline-flex items-center rounded-lg p-1 text-sm text-neutral-500 hover:bg-neutral-300 focus:outline-none focus:ring-none md:hidden",
        },
      }}
      fluid
      rounded
      id="mobile-heading"
      className="mobile-section bg-neutral-900 sticky w-full shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] z-10 top-[0px]"
    >
      <Navbar.Brand>
        <h1 onClick={() => handleScroll("#mobile-heading")} className="text-heading-h1 bg-gradient-to-r from-gradient-primary-from to-gradient-primary-to !bg-clip-text text-transparent">
          DT.
        </h1>
      </Navbar.Brand>
      <div className="flex items-center gap-4 md:order-2">
        <LanguageSwitcher locale={locale} />
        <Navbar.Toggle />
      </div>
      
      <Navbar.Collapse className="bg-neutral-900 my-1 rounded-b-2xl p-2 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25) absolute top-[55px]">
        <Navbar.Link
          className={`hover:bg-neutral-700 rounded-lg  border-none ${idElementFocus === "mobile-session" && "bg-neutral-700"}`}
          onClick={() => handleScroll("#mobile-heading")}
        >
          <b className="text-label-14px-bold text-neutral-100">{t("home")}</b>
        </Navbar.Link>

        <Navbar.Link
          className={`hover:bg-neutral-700 rounded-lg  border-none ${(idElementFocus === "mobile-aboutme" || idElementFocus === "mobile-myskills") && "bg-neutral-700"}`}
          onClick={() => handleScroll("#mobile-aboutme")}
        >
          <b className="text-label-14px-bold text-neutral-100">
            {t("aboutMe")}
          </b>
        </Navbar.Link>
        <Navbar.Link
          className={`hover:bg-neutral-700 rounded-lg  border-none ${idElementFocus === "mobile-workexperience" && "bg-neutral-700"}`}
          onClick={() => handleScroll("#mobile-workexperience")}
        >
          <b className="text-label-14px-bold text-neutral-100">
            {t("workExperience")}
          </b>
        </Navbar.Link>
        <Navbar.Link
          className={`hover:bg-neutral-700 rounded-lg  border-none ${idElementFocus === "mobile-projects" && "bg-neutral-700"}`}
          onClick={() => handleScroll("#mobile-projects")}
        >
          <b className="text-label-14px-bold text-neutral-100">
            {t("projects")}
          </b>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
