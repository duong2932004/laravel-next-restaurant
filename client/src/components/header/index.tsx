import * as React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

import { TbClover } from "react-icons/tb";
import { RiMenuFold4Line } from "react-icons/ri";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ThemeToggle } from "@/components/dark-mode/theme-toggle";
import LanguageSwitch from "@/components/language-switch";
import createLocalePath from "@/utils/createLocalePath";
import Search from "@/components/header/search";

function Header() {
  const t = useTranslations("header");
  const localActive = useLocale();

  return (
    <div className="bg-[]">
      <div className="w-full px-5 py-4 grid grid-cols-2 sm:grid-cols-[1fr_1.5fr_0.5fr] justify-items-stretch">
        <div className="left-header flex items-center space-x-4 justify-self-start">
          <div className="flex">
            <div className="md:hidden sm:block">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">
                    <RiMenuFold4Line size={35} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>{t("home.title")}</SheetTitle>
                    <SheetDescription>{t("home.description")}</SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-2 py-4 grid-cols-2">
                    <Button>{t("home")}</Button>
                    <Button>{t("about")}</Button>
                    <Button>{t("contact")}</Button>
                    <Button>{t("order")}</Button>
                    <Button>{t("login")}</Button>
                  </div>
                  <SheetFooter>
                    <Button>{t("home")}</Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <div className="logo flex items-center">
                <TbClover size="1.5rem" />
              </div>
              <ul className="flex space-x-4">
                <Link href="/">{t("home")}</Link>
                <Link href="/">{t("about")}</Link>
                <Link href="/">{t("order")}</Link>
                <Link href="/">{t("login")}</Link>
                <Link href={createLocalePath("/login", localActive)}>
                  {t("login")}
                </Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="hidden sm:block w-full justify-self-center text-center">
          <Search />
        </div>
        <div className="right-header flex items-center space-x-3 justify-self-end">
          <LanguageSwitch />
          <ThemeToggle />
        </div>
      </div>
      <div className="block sm:hidden">
        <Search />
      </div>
    </div>
  );
}

export default Header;
