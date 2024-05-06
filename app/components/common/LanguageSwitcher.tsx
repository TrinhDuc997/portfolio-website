"use client";
import {
  localeNames,
  locales,
  usePathname,
  useRouter,
  type Locale,
} from "@/i18n.config";
import { Dropdown } from "flowbite-react";
export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  const changeLocale = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div>
      <Dropdown
        label=""
        renderTrigger={() => (
          <img
            role="button"
            className="w-[28px] h-[28px] rounded-md p-1 hover:bg-neutral-700 cursor-pointer"
            src={`/${localeNames[locale]}.svg`}
          />
        )}
        arrowIcon={false}
        className="bg-neutral-700 focus:bg-neutral-700 border-none p-2 rounded-2xl left-[50%]"
        dismissOnClick={false}
      >
        {locales.map((loc) => (
          <Dropdown.Item
            onClick={() => changeLocale(loc)}
            key={loc}
            value={loc}
            className="rounded-lg text-neutral-100 hover:bg-neutral-500 focus:bg-neutral-500 gap-2"
          >
            <img
            className="w-[24px] h-[24px] rounded-md"
            src={`/${localeNames[loc]}.svg`}
          />{localeNames[loc]}
          </Dropdown.Item>
        ))}
      </Dropdown>
    </div>
  );
}
