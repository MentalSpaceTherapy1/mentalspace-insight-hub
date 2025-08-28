import { AlertTriangle, Phone } from 'lucide-react';

export function CrisisBanner() {
  return (
    <div className="bg-red-50 border-l-4 border-red-400 p-4 sticky bottom-0 z-50">
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-2 text-red-700">
          <AlertTriangle className="h-5 w-5" />
          <span className="font-medium">Crisis Support:</span>
          <span>If this is an emergency, call or text</span>
          <a 
            href="tel:988" 
            className="font-bold underline hover:text-red-800 flex items-center space-x-1"
          >
            <Phone className="h-4 w-4" />
            <span>988</span>
          </a>
          <span>or dial</span>
          <a 
            href="tel:911" 
            className="font-bold underline hover:text-red-800"
          >
            911
          </a>
        </div>
      </div>
    </div>
  );
}