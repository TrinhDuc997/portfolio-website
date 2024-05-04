"use client";
import {
  Button,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { useLocale, useTranslations } from "next-intl";
import { Locale } from "@/i18n.config";

const handleDownLoadCV = (locale: Locale) => {
  const link = document.createElement("a");
  link.href = `/CV_${locale}.pdf`;
  link.download = `TrinhXuanDuc_CV_${locale}`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function Session() {
  const t = useTranslations('Index');
  const locale = useLocale() as Locale;

  return (
    <div
      id="session"
      className="w-full overflow-hidden flex flex-row items-start justify-start py-0 px-6 box-border gap-[16px] max-w-screen-2xl"
    >
      <div className="h-[400px] flex flex-col items-center justify-start box-border gap-[32px] z-10 animate__animated animate__fadeIn animate__delay-1s">
        <Popover placement="right">
          <PopoverTrigger>
            <Button className="hover:opacity-50">
              <img
                className="w-[30px] h-[30px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/facebook.svg"
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="bg-neutral-700 p-2 rounded-lg">
            <PopoverArrow bg="#404040" />
            <PopoverBody>
              <a
                href="https://www.facebook.com/Duc.Trinh1704/"
                target="_blank"
                className="text-neutral-100"
              >
                https://www.facebook.com/Duc.Trinh1704/
              </a>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover placement="right">
          <PopoverTrigger>
            <Button className="hover:opacity-50">
              <img
                className="w-[30px] h-[30px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/google.svg"
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="bg-neutral-700 p-2 rounded-lg">
            <PopoverArrow bg="#404040" />
            <PopoverBody className="text-neutral-100">
              trinhxuanduc997@gmail.com
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover placement="right">
          <PopoverTrigger>
            <Button className="hover:opacity-50">
              <FaGithub size={30} className="text-neutral-500" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="bg-neutral-700 p-2 rounded-lg">
            <PopoverArrow bg="#404040" />
            <PopoverBody className="text-neutral-100">
              <a
                href="https://github.com/TrinhDuc997?tab=repositories"
                target="_blank"
                className="text-neutral-100"
              >
                https://github.com/TrinhDuc997?tab=repositories
              </a>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Popover placement="right">
          <PopoverTrigger>
            <Button className="hover:opacity-50">
              <img
                className="w-[30px] h-[30px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/telephonefill.svg"
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="bg-neutral-700 p-2 rounded-lg">
            <PopoverArrow bg="#404040" />
            <PopoverBody className="text-neutral-100">
              +84967 084 484
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-8 box-border gap-[24px] min-w-[346px] max-w-full animate__animated animate__fadeInTopLeft">
        <div className="self-stretch flex flex-col items-start justify-start">
          <h3 className="m-0 self-stretch relative text-neutral-500 text-label-24px-regular">
            {t("welcome")}
          </h3>
          <h1 className="m-0 self-stretch relative text-heading-h1 text-neutral-white">
            {t("name")}
          </h1>
          <h1 className="m-0 self-stretch relative text-[4rem] leading-[125%] font-bold !bg-clip-text bg-gradient-to-r from-gradient-primary-from to-gradient-primary-to [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Front-End Dev
          </h1>
        </div>
        <div className="self-stretch relative text-body-16px-regular text-neutral-300">
          {t("welcomeOnboard")}
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[155px] pl-0 gap-[24px]">
          {/* <button className="cursor-pointer border-[1px] border-primary border-solid py-3 px-6 bg-primary rounded-lg flex flex-row items-center justify-center whitespace-nowrap hover:bg-opacity-85">
            <div className="relative text-label-24px-regular text-neutral-100 text-center inline-block">
              See more
            </div>
          </button> */}
          <Tooltip label={t("downloadCVDescrip")} placement={"bottom"} className="text-neutral-300 bg-neutral-700 max-w-72 p-2 rounded-2xl text-center">
            <button onClick={() => handleDownLoadCV(locale)} className="cursor-pointer py-3 px-6 bg-[transparent] rounded-lg flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-neutral-300 hover:bg-neutral-100 hover:bg-opacity-10 hover:border-neutral-100">
              <div className="relative text-label-24px-regular text-neutral-300 text-center inline-block">
                {t("downloadCV")}
              </div>
            </button>
          </Tooltip>
          
        </div>
      </div>
      <img
        className="h-[400px] flex-1 relative max-w-full overflow-hidden object-contain min-w-[346px] animate__animated animate__fadeInTopRight"
        loading="lazy"
        alt=""
        src="/MyImage.png"
      />
      {/* <div className="h-[400px] w-[60px] overflow-hidden shrink-0" /> */}
    </div>
  );
}
