"use client";
import React from "react";
import { FaFacebook, FaGithub, FaPhoneSquareAlt } from "react-icons/fa";
import { useLocale, useTranslations } from "next-intl";
import { Locale } from "@/i18n.config";
import { MdEmail } from "react-icons/md";
import { Popover, Tooltip } from "flowbite-react";

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
      id="session"
      className="section w-full overflow-hidden flex flex-row items-start justify-start py-0 px-6 box-border gap-[16px] max-w-screen-2xl"
    >
      <div className="z-50 flex flex-col gap-6 animate__animated animate__fadeIn animate__delay-1s">
        <Popover
          aria-labelledby="default-popover"
          className="bg-neutral-700 rounded-2xl z-50"
          theme={{
            arrow: {
              base: "absolute h-2 w-2 z-0 rotate-45 mix-blend-lighten bg-neutral-700",
            },
          }}
          placement="right"
          content={
            <div className="z-50 text-sm text-neutral-100 bg-neutral-700 border-none w-full">
              <div className="px-3 py-2">
                <div className="flex flex-col">
                  <a
                    href="https://www.facebook.com/Duc.Trinh1704/"
                    target="_blank"
                    className="text-neutral-100"
                  >
                    https://www.facebook.com/Duc.Trinh1704/
                  </a>
                </div>
              </div>
            </div>
          }
        >
          <button
            tabIndex={0}
            className="p-2 rounded-lg text-label-16px-regular text-neutral-500 hover:opacity-85"
          >
            <FaFacebook size={30} />
          </button>
        </Popover>

        <Popover
          aria-labelledby="default-popover"
          className="bg-neutral-700 rounded-2xl z-50"
          theme={{
            arrow: {
              base: "absolute h-2 w-2 z-0 rotate-45 mix-blend-lighten bg-neutral-700",
            },
          }}
          placement="right"
          content={
            <div className="z-50 text-sm text-neutral-100 bg-neutral-700 border-none w-full">
              <div className="px-3 py-2">
                <div className="flex flex-col">trinhxuanduc997@gmail.com</div>
              </div>
            </div>
          }
        >
          <button
            tabIndex={0}
            className="p-2 rounded-lg text-label-16px-regular text-neutral-500 hover:opacity-85"
          >
            <MdEmail size={30} />
          </button>
        </Popover>

        <Popover
          aria-labelledby="default-popover"
          className="bg-neutral-700 rounded-2xl z-50"
          theme={{
            arrow: {
              base: "absolute h-2 w-2 z-0 rotate-45 mix-blend-lighten bg-neutral-700",
            },
          }}
          placement="right"
          content={
            <div className="z-50 text-sm text-neutral-100 bg-neutral-700 border-none w-full">
              <div className="px-3 py-2">
                <div className="flex flex-col">
                  <a
                    href="https://github.com/TrinhDuc997?tab=repositories"
                    target="_blank"
                    className="text-neutral-100"
                  >
                    https://github.com/TrinhDuc997?tab=repositories
                  </a>
                </div>
              </div>
            </div>
          }
        >
          <button
            tabIndex={0}
            className="p-2 rounded-lg text-label-16px-regular text-neutral-500 hover:opacity-85"
          >
            <FaGithub size={30} />
          </button>
        </Popover>

        <Popover
          aria-labelledby="default-popover"
          className="bg-neutral-700 rounded-2xl z-50"
          theme={{
            arrow: {
              base: "absolute h-2 w-2 z-0 rotate-45 mix-blend-lighten bg-neutral-700",
            },
          }}
          placement="right"
          content={
            <div className="z-50 text-sm text-neutral-100 bg-neutral-700 border-none w-full">
              <div className="px-3 py-2">
                <div className="flex flex-col">+84967 084 484</div>
              </div>
            </div>
          }
        >
          <button
            tabIndex={0}
            className="p-2 rounded-lg text-label-16px-regular text-neutral-500 hover:opacity-85"
          >
            <FaPhoneSquareAlt size={30} />
          </button>
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
          <Tooltip
            arrow={false}
            className="bg-neutral-700 z-[99]"
            placement="right"
            content={<div className="w-80">{t("downloadCVDescrip")}</div>}
          >
            <button
              onClick={() => handleDownLoadCV(locale)}
              className="cursor-pointer py-3 px-6 bg-[transparent] rounded-lg flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-neutral-300 hover:bg-neutral-100 hover:bg-opacity-10 hover:border-neutral-100"
            >
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
