"use client";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { Locale } from "@/i18n.config";
import { MdMailOutline } from "react-icons/md";
import { Popover, Tooltip } from "flowbite-react";
import { FiPhone } from "react-icons/fi";

const handleDownLoadCV = (locale: Locale) => {
  const link = document.createElement("a");
  link.href = `/CV_${locale}.pdf`;
  link.download = `TrinhXuanDuc_CV_${locale}`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function Session() {
  const t = useTranslations("Index");
  const locale = useLocale() as Locale;

  return (
    <div
      id="mobile-session"
      className="mobile-section w-full overflow-hidden flex flex-col items-start justify-start p-4 box-border gap-1 max-w-screen-2xl"
    >
      <div className="flex flex-row items-start justify-between box-border w-f">
        <div className="self-stretch flex flex-col items-start justify-start gap-2 animate__animated animate__fadeInTopLeft">
          <h3 className="text-neutral-500 text-label-16px-regular">
            {t("welcome")}
          </h3>
          <h1 className="text-heading-h3 text-neutral-white">{t("name")}</h1>
          <h1 className=" text-heading-h2 !bg-clip-text bg-gradient-to-r from-gradient-primary-from to-gradient-primary-to [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            Front-End Dev
          </h1>
        </div>
        <img
          className="min-w-[140px] h-[130px] relative overflow-hidden object-contain animate__animated animate__fadeInTopRight"
          loading="lazy"
          alt=""
          src="/MeMobile.png"
        />
      </div>

      <div className="flex flex-col gap-2 w-full animate__animated animate__fadeIn animation-duration-3s">
        <div className="text-body-12px-regular text-neutral-300">
          {t("welcomeOnboard")}
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[155px] pl-0 gap-[24px]">
          <Popover
            aria-labelledby="default-popover"
            className="bg-neutral-700 rounded-2xl"
            placement="top"
            theme={{
              arrow: {
                base: "absolute h-2 w-2 z-0 rotate-45 mix-blend-lighten bg-neutral-700",
              },
            }}
            content={
              <div className="w-64 text-sm text-neutral-100 bg-neutral-700 border-none">
                <div className="px-3 py-2">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-2">
                      <MdMailOutline size={24} /> trinhxuanduc997@gmail.com
                    </div>
                    <div className="flex flex-row gap-2">
                      <FiPhone size={24} /> +84967 084 484
                    </div>
                  </div>
                </div>
              </div>
            }
          >
            <button
              tabIndex={0}
              className="py-2 px-4 rounded-lg bg-primary text-label-16px-regular text-neutral-100 hover:opacity-85 text-nowrap"
            >
              {t("contactMe")}
            </button>
          </Popover>
          <Tooltip
            arrow={false}
            className="bg-neutral-700 z-[99] w-[80%]"
            placement="top"
            content={t("downloadCVDescrip")}
          >
            <button
              onClick={() => handleDownLoadCV(locale)}
              className="cursor-pointer py-2 px-4 bg-[transparent] rounded-lg flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-neutral-300 hover:bg-neutral-100 hover:bg-opacity-10 hover:border-neutral-100"
            >
              <div className="relative text-label-14px-bold text-neutral-300 text-center inline-block">
                {t("downloadCV")}
              </div>
            </button>
          </Tooltip>
        </div>
      </div>

      {/* <div className="h-[400px] w-[60px] overflow-hidden shrink-0" /> */}
    </div>
  );
}
