"use client";
import { useGetAllSignsQuery } from "@/lib/features/zodiac/zodiacApiSlice";
import ZodiacItemDetail from "../components/zodiac/ZodiacItemDetail";

export default function Page({ params }: {params:{name:string}}) {
  const { sign } = useGetAllSignsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      sign: data?.ZodiacSignsDetail.find((z) => z.Name === params.name),
    }),
  });

  return (
    <div>
      <ZodiacItemDetail sign={sign ? sign : null} />
    </div>
  );
}
