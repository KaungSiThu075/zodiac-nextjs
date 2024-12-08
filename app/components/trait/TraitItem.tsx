import { TraitInterface } from "@/lib/features/zodiac/zodiacApiSlice";

export default function TraitItem({ trait }: { trait: TraitInterface }) {
  return (
    <div>
      <p>{trait.name}</p>
      <p>{trait.percentage}</p>
    </div>
  );
}
