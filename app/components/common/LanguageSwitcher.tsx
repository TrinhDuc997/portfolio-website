"use client";
import {
  localeNames,
  locales,
  usePathname,
  useRouter,
  type Locale,
} from "@/i18n.config";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { MouseEvent } from "react";

export default function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  const changeLocale = (event: MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;
    const newLocale = target.value as Locale;
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={
            <img
              className="w-[24px] h-[24px] rounded-md"
              src={`/${localeNames[locale]}.svg`}
            />
          }
          variant="outline"
          className="w-8"
        />
        <MenuList className="p-2 rounded-lg bg-neutral-700">
          {locales.map((loc) => (
            <MenuItem
              onClick={changeLocale}
              className="text-neutral-100"
              key={loc}
              value={loc}
              icon={
                <img
                  className="w-[24px] h-[24px]"
                  src={`/${localeNames[loc]}.svg`}
                />
              }
            >
              {localeNames[loc]}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
}
