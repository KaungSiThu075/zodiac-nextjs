import type { Metadata } from "next";

import ZodiacPage from "@/app/components/zodiac/ZodiacPage";

export default function IndexPage() {
  return <ZodiacPage />;
}

export const metadata: Metadata = {
  title: "Zodiac",
};
