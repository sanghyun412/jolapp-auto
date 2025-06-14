import { CoinCard } from "@/components/CoinCard";
import data from "@/src/data/recommend.json";

export default function Home() {
  return (
    <main className="p-4 grid gap-4">
      {data.map((coin, idx) => (
        <CoinCard key={idx} {...coin} />
      ))}
    </main>
  );
}
