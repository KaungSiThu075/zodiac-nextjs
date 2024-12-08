import { ZodiacInterface } from "@/lib/features/zodiac/zodiacApiSlice";
import ZodiacItem from "@/app/components/zodiac/ZodiacItem";

export default function ZodiacList({ signs }: { signs: ZodiacInterface[] }) {
  return (
    <div className={" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"}>
      {signs.map((sign) => (
          <ZodiacItem key={sign.Id} sign={sign} />
      ))}
    </div>
  );
}
