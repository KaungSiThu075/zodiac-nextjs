import { ZodiacInterface } from "@/lib/features/zodiac/zodiacApiSlice";
import ZodiacItem from "@/app/components/zodiac/ZodiacItem";
import PreviousButton from "@/app/components/button/PreviousButton";
import { Chart } from "../chart/Chart";
import CustomDiv from "@/app/components/div/CustomDiv";

export default function ZodiacItemDetail({
  sign,
}: {
  sign: ZodiacInterface | null
}) {
  if (sign) {
    return (
        <div className={`flex flex-col items-start gap-3 my-5 mx-10`}>
            <PreviousButton/>

            <ZodiacItem sign={sign}/>

            <div className={`w-full grid md:grid-cols-5 gap-3`}>
                <div className={` flex flex-col items-center justify-between gap-3 text-gray-500 border border-gray-300 rounded-lg p-3`}>
                    <p className={`text-2xl text-center`}>မြန်မာလ - {sign.MyanmarMonth}</p>
                    <p className={`text-xl text-center`}>Sign</p>
                    <img className={`w-[80px] h-[80px]`} src={sign.ZodiacSignImageUrl} alt={sign.Name}/>
                    <img className={`rounded-lg`} src={sign.ZodiacSign2ImageUrl} alt={sign.MyanmarMonth}/>
                </div>

                <div className={`md:col-span-3`}>
                    <Chart traits={sign.Traits}/>
                </div>

                <div className={`flex flex-col items-center justify-between text-gray-500 gap-3 border border-gray-300 rounded-lg p-3`}>
                    <p className={` text-2xl text-center`}>ဒြပ် / ELEMENT - {sign.Element}</p>
                    <img className={`rounded-lg`} src={sign.ElementImageUrl} alt={sign.Element}/>
                </div>
            </div>

            <CustomDiv message={sign.LifePurpose} title={` Life Purpose`}/>

            <CustomDiv message={sign.Loyal} title={`Loyal`}/>

            <CustomDiv message={sign.Angry} title={`Angry`}/>

            <CustomDiv message={sign.Character} title={`Character`}/>

            <CustomDiv message={sign.PrettyFeatures} title={`Pretty Features`}/>

            <div className={`grid md:grid-cols-2 gap-3 md:gap-5`}>
                <img className={`rounded-lg`} src={`images/representative-flower/${sign.Id}.jpg`} alt={sign.RepresentativeFlower}/>
                <CustomDiv message={sign.RepresentativeFlower} title={`Representative Flower`}/>
            </div>
        </div>
    );
  }
  else
  {
      return <div>Loading...</div>;
  }
}
