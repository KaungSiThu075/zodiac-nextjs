"use client";
import { useRouter } from "next/navigation";

export default function PreviousButton() {
  const router = useRouter();
  const btnBackToPreviousPageHandler = () => {
    router.back();
  };
  return (
    <div>
      <button className={" cursor-pointer bg-gradient-to-r from-yellow-400 to-orange-500 py-1 px-5 rounded-lg hover:bg-amber-600 text-gray-200 hover:text-white"} type="button" onClick={btnBackToPreviousPageHandler}>
        BACK
      </button>
    </div>
  );
}
