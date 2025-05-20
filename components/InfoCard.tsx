// filepath: c:\\Users\\tsvet\\Desktop\\Project-Synergy\\project-synergy\\components\\InfoCard.tsx
interface InfoCardProps {
  title: string;
  amount: string;
  currency?: string; // Optional currency, defaults to BGN
}

export default function InfoCard({ title, amount, currency = "BGN" }: InfoCardProps) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow">
      <h2 className="text-sm font-medium text-gray-500 mb-1">{title}</h2>
      <p className="text-2xl font-bold text-blue-600">{amount} {currency}</p>
    </div>
  );
}
