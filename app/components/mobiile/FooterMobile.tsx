"use client";
import type { NextPage } from "next";
import { FaFacebook, FaGithub, FaPhoneSquareAlt } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { Popover } from "flowbite-react";
import { MdEmail } from "react-icons/md";


const Footer: NextPage = () => {
  const t = useTranslations("Index");
  return (
    <footer
      id="mobile-footer"
      className="w-full bg-neutral-800 overflow-hidden flex flex-col items-center justify-start pt-[15px] px-5 box-border gap-[16px] text-left text-29xl text-neutral-300 font-heading-h4"
    >
      <div className="w-[700px] flex flex-row items-start justify-center max-w-full">
        <h1 className="m-0 relative text-5xl bg-gradient-to-r from-gradient-primary-from to-gradient-primary-to leading-[125%] font-bold font-inherit text-transparent !bg-clip-text bg-Primary-Linear-to-right [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[78px] whitespace-nowrap">
          DT.
        </h1>
      </div>
      <div className="w-[700px] flex flex-col items-start justify-start gap-[16px] max-w-full text-base">
        <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5">
          <div className="z-50 flex flex-row gap-8">
            <Popover
              aria-labelledby="default-popover"
              className="bg-neutral-700 rounded-2xl z-50"
              theme={{
                arrow: {
                  base: "absolute h-2 w-2 z-0 rotate-45 mix-blend-lighten bg-neutral-700",
                },
              }}
              placement="bottom"
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
              placement="bottom"
              content={
                <div className="z-50 text-sm text-neutral-100 bg-neutral-700 border-none w-full">
                  <div className="px-3 py-2">
                    <div className="flex flex-col">
                      trinhxuanduc997@gmail.com
                    </div>
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
              placement="bottom"
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
              placement="bottom"
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
        </div>
        <div className="self-stretch flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch flex flex-col items-center justify-center pb-2 px-5 box-border max-w-full">
            <div className="flex flex-col items-center justify-start gap-[8px] max-w-full mq450:gap-[24px] mq750:flex-wrap">
              <div className="flex flex-row items-center justify-start gap-[8px]">
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
          </div>
          <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-neutral-300" />
        </div>
        <div className="self-stretch flex flex-row items-start justify-center pb-6 px-5">
          <b className="text-label-12px-bold">
            Designed by Trinh Xuan Duc UX/UI Designer
          </b>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
