import { ZodiacInterface } from "@/lib/features/zodiac/zodiacApiSlice";
import { useRouter } from "next/navigation";

export default function ZodiacItem({ sign }: { sign: ZodiacInterface }) {
  const router = useRouter();
  const routeToDetailHandler = () => {
    router.push(`/${sign.Name}`);
  };
  return (
    <div
        className={" w-full flex flex-col items-center justify-center gap-2 border border-gray-300 rounded-lg p-3 hover:bg-gradient-to-r from-yellow-400 to-orange-500 hover:cursor-pointer group"}
        onClick={routeToDetailHandler}
    >
        <div className={" shadow-inner w-[60px] h-[60px] flex items-center justify-center p-3 bg-white rounded-full"}>
            <img
                src={sign.ZodiacSignImageUrl}
                alt={sign.Name}
            />
        </div>
        <p className={" font-semibold text-xl group-hover:text-white transition-colors duration-300"}>{sign.Name}</p>
        <p className={" text-gray-500 group-hover:text-white"}>{sign.Dates}</p>
    </div>
  );
}
