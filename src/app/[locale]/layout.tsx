import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./../globals.css";
import Providers from "./providers";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Navigation } from "@/components/Navigation";

const barlow = Barlow({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "SpaceX Launches",
  description: "Created by Fadhlur",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang="en" className={barlow.className}>
      <body className="bg-background text-foreground">
        <NextIntlClientProvider>
          <Navigation />
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
