import React, { MouseEvent, useState } from "react";
import { useTranslations } from "next-intl";

export default function ReadMore({ text, length=160 }: { text: string, length?:number }) {
  const t = useTranslations('Index');
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = (e: MouseEvent<HTMLSpanElement>) => {
    const target = (e.target as HTMLElement).closest(".ReadMore");
    if (isReadMore && !!target) {
        target?.classList.add("!max-h-96");
    }else if(!!target){
        target?.classList.remove("!max-h-96");
    }
    setIsReadMore(!isReadMore);
  };

  return (
    <p className="ReadMore max-h-[6.5rem] overflow-hidden transition-all duration-700 ease-in-out delay-0">
      {isReadMore ? text.slice(0, length) : `${text}`}
      {isReadMore ? "... " : " "}
      {text.length > length && (
        <span className="font-bold cursor-pointer hover:underline" onClick={toggleReadMore}>
          {isReadMore ? t("showMore") : t("showLess")}
        </span>
      )}
    </p>
  );
}
