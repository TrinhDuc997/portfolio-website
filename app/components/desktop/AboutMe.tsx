import React from "react";
import { useTranslations } from "next-intl";

export default function AboutMe() {
  const t = useTranslations('Index');
  return (
    <div id="aboutme" className="w-full overflow-hidden flex flex-col items-center justify-center p-6 box-border max-w-screen-2xl animate__animated animate__fadeInDown">
      <h2 className="text-neutral-100 text-heading-h2">{t("aboutMe")}</h2>
      <div className="flex text-center max-w-3xl">
        <p className="text-neutral-100 text-body-16px-regular">
          {t("aboutMeDescription")}
        </p>
      </div>
    </div>
  );
}
