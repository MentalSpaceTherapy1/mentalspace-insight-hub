import { CheckCircle } from 'lucide-react';

interface TLDRProps {
  items: string[];
}

export function TLDR({ items }: TLDRProps) {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <CheckCircle className="h-5 w-5 mr-2 text-blue-600" />
        TL;DR - Key Takeaways
      </h2>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            <span className="text-blue-900">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}