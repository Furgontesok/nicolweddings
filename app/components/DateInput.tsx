"use client";
import { useRef } from "react";

interface Props {
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
  required?: boolean;
  className?: string;
  textColor?: string;
}

export default function DateInput({ value, onChange, placeholder, required, className, textColor = "#000000" }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const displayValue = value
    ? new Date(value + "T00:00:00").toLocaleDateString("hu-HU")
    : "";

  return (
    <div className={`relative cursor-pointer ${className ?? ""}`}>
      {/* Látható szöveg és ikon */}
      <div className="pointer-events-none flex items-center justify-between px-4 py-3">
        <span
          className="font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.2em] uppercase"
          style={{ color: value ? textColor : `${textColor}80` }}
        >
          {displayValue || placeholder}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ color: `${textColor}4d` }}
          className="shrink-0 ml-2"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      </div>

      {/* Valódi date input — teljesen átlátszó, de kattintható */}
      <input
        ref={inputRef}
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        style={{ fontSize: "16px" }}
      />
    </div>
  );
}
