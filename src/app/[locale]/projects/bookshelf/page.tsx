import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import BookshelfProjectPage from "./BookshelfClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "bookshelf" });

  return {
    title: "Bookshelf",
    description: t("description"),
    alternates: {
      canonical: `/${locale}/projects/bookshelf`,
      languages: {
        pt: "/pt/projects/bookshelf",
        en: "/en/projects/bookshelf",
      },
    },
  };
}

export default function Page() {
  return <BookshelfProjectPage />;
}
