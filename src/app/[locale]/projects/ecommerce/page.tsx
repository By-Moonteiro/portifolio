import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import EcommerceProjectPage from "./EcommerceClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ecommerce" });

  return {
    title: "E-commerce API",
    description: t("description"),
    alternates: {
      canonical: `/${locale}/projects/ecommerce`,
      languages: {
        pt: "/pt/projects/ecommerce",
        en: "/en/projects/ecommerce",
      },
    },
  };
}

export default function Page() {
  return <EcommerceProjectPage />;
}
