import { Title } from "@/components/Title";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function NotFoundPage() {
  const t = useTranslations("NotFoundPage");
  return (
    <div className="flex flex-1 container mx-auto h-screen items-center">
      <div className="flex flex-col gap-3">
        <Title>{t("title")}</Title>
        <Link href="/">{t("linkText")}</Link>
      </div>
    </div>
  );
}
