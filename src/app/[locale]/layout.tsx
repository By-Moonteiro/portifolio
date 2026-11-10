import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { Syne } from "next/font/google";
import "@/app/globals.css";
import StarField from "@/components/layout/StarField";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { SITE_URL } from "@/lib/site";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "hero" });

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: `Wagner Monteiro (Moonteiro) | ${t("role")}`,
      template: "%s | Wagner Monteiro",
    },
    description: t("description"),
    alternates: {
      canonical: `/${locale}`,
      languages: { pt: "/pt", en: "/en", "x-default": "/pt" },
    },
    openGraph: {
      type: "website",
      url: `/${locale}`,
      siteName: "Wagner Monteiro",
      locale: locale === "pt" ? "pt_BR" : "en_US",
      title: `Wagner Monteiro (Moonteiro) | ${t("role")}`,
      description: t("description"),
      images: [{ url: "/preview/cover.png", width: 1878, height: 909 }],
    },
    twitter: { card: "summary_large_image" },
    verification: { google: "WWalqW_HEzZYOkyQQpoTmjfwLTYXKmKC5iLHSD2FJMA" },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "pt" | "en")) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${syne.variable} ${geistMono.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Wagner Monteiro",
              alternateName: "Wagner Moonteiro",
              jobTitle: "Full Stack Developer",
              url: SITE_URL,
              sameAs: [
                "https://github.com/By-Moonteiro",
                "https://www.linkedin.com/in/moonteiro/",
              ],
            }),
          }}
        />

        <NextIntlClientProvider messages={messages}>
          <StarField />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
