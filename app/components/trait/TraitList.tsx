import { TraitInterface } from "@/lib/features/zodiac/zodiacApiSlice";
import TraitItem from "@/app/components/trait/TraitItem";

export default function TraitList({ traits }: { traits: TraitInterface[] }) {
  return (
    <div>
      {traits.map((trait, index) => (
        <TraitItem key={index} trait={trait} />
      ))}
    </div>
  );
}
