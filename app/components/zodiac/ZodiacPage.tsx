"use client";

import { useGetAllSignsQuery } from "@/lib/features/zodiac/zodiacApiSlice";
import ZodiacList from "@/app/components/zodiac/ZodiacList";
import DateSearch from "@/app/components/birthday/BirthdaySearch";


export default function ZodiacPage() {
  const {
    data: signs,
    isError,
    isLoading,
    isSuccess,
  } = useGetAllSignsQuery(undefined);

  if (isError) {
    return <div>error</div>;
  }

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isSuccess)
  {
    return (
      <div>
        <p className={` text-center text-3xl font-bold my-3`}>Search Zodiac</p>
        <DateSearch />
        <p className={` text-center text-3xl font-bold my-5`}>Horoscope Forecasts</p>
        <ZodiacList signs={signs.ZodiacSignsDetail} />
      </div>
    );
  }
}
