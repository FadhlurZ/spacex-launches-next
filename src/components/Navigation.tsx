import Logo from "./Logo";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LocaleSwitcher from "@/components/LocaleSwitcher";

export function Navigation() {
  const t = useTranslations("Navigation");

  return (
    <nav className="flex container mx-auto justify-between w-screen h-20 py-6 z-100 fixed left-0 right-0">
      <div className="w-[134px] aspect-[594/126]">
        <Logo className="w-full h-full fill-white" />
      </div>
      <div className="flex gap-6 items-center">
        <Link href="/">{t("launches")}</Link>
        <LocaleSwitcher />
      </div>
    </nav>
  );
}
