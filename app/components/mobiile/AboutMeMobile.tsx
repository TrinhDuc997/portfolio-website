import React from "react";
import { useTranslations } from "next-intl";

export default function AboutMe() {
  const t = useTranslations('Index');
  return (
    <div id="mobile-aboutme" className="mobile-section w-full overflow-hidden flex flex-col items-center justify-center p-4 box-border animate__animated animate__fadeInUp">
      <h2 className="text-neutral-100 text-heading-h3">{t("aboutMe")}</h2>
      <div className="flex flex-row gap-2">
        <div className="min-w-[120px] min-h-[210px]">
          <img
            className="relative overflow-hidden object-contain"
            loading="lazy"
            alt=""
            src="/MyImage2.png"
          />
        </div>
        <div className="text-neutral-100 text-body-12px-regular">
          {t("aboutMeDescription")}
        </div>
      </div>
    </div>
  );
}
