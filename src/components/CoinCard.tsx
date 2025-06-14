export function CoinCard({ name, entry, target, stop, winrate }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h2 className="text-xl font-bold">{name}</h2>
      <p>진입가: {entry}</p>
      <p>익절: {target} / 손절: {stop}</p>
      <p>승률: {winrate}%</p>
    </div>
  );
}
