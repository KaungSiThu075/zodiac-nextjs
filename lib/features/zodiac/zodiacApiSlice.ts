import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface TraitInterface {
  name: string;
  percentage: number;
}

export interface ZodiacInterface {
  Id: number;
  Name: string;
  MyanmarMonth: string;
  ZodiacSignImageUrl: string;
  ZodiacSign2ImageUrl: string;
  Dates: string;
  Element: string;
  ElementImageUrl: string;
  LifePurpose: string;
  Loyal: string;
  RepresentativeFlower: string;
  Angry: string;
  Character: string;
  PrettyFeatures: string;
  Traits: TraitInterface[];
}

export interface AllSignInterface {
  ZodiacSignsDetail: ZodiacInterface[];
}

export const zodiacApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `/` }),
  reducerPath: "zodiacApiSlice",
  tagTypes: ["Zodiacs"],
  endpoints: (build) => ({
    getAllSigns: build.query<AllSignInterface, undefined>({
      query: () => `Zodiac.json`,
    }),
  }),
});

export const { useGetAllSignsQuery } = zodiacApiSlice;
