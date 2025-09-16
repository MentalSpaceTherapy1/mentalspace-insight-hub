import React from 'react';

interface SecurityHoneypotProps {
  value: string;
  onChange: (value: string) => void;
}

/**
 * Invisible honeypot field to catch bots
 * Should remain empty for legitimate users
 */
export const SecurityHoneypot: React.FC<SecurityHoneypotProps> = ({ value, onChange }) => {
  return (
    <div style={{ 
      position: 'absolute', 
      left: '-9999px', 
      width: '1px', 
      height: '1px', 
      overflow: 'hidden' 
    }}>
      <label htmlFor="website-url">Website URL (leave blank)</label>
      <input
        type="text"
        id="website-url"
        name="website-url"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
    </div>
  );
};