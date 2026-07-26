"use client";
import { useRef } from "react";

interface Props {
  value: string;
  onChange: (val: string) => void;
  placeholder: string;
  required?: boolean;
  className?: string;
  inputClassName?: string;
  textColor?: string;
}

export default function DateInput({
  value,
  onChange,
  placeholder,
  required,
  className,
  inputClassName = "text-[#000000] placeholder:text-[#000000]/50",
  textColor = "#000000",
}: Props) {
  const hiddenRef = useRef<HTMLInputElement>(null);

  const handleCalendarPick = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      const d = new Date(e.target.value + "T00:00:00");
      onChange(d.toLocaleDateString("hu-HU"));
      e.target.value = "";
    }
  };

  return (
    <div className={`relative flex items-center ${className ?? ""}`}>
      {/* Szöveges input — szabadon írható */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className={`w-full bg-transparent px-4 py-3 pr-10 font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.2em] uppercase focus:outline-none ${inputClassName}`}
      />

      {/* Naptár ikon — rejtett date input nyit */}
      <button
        type="button"
        tabIndex={-1}
        onClick={() => hiddenRef.current?.showPicker?.()}
        className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer transition-opacity hover:opacity-80"
        style={{ color: `${textColor}4d` }}
        aria-label="Dátum kiválasztása"
      >
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
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      </button>

      {/* Rejtett date input csak a pickerhez */}
      <input
        ref={hiddenRef}
        type="date"
        onChange={handleCalendarPick}
        className="absolute right-0 bottom-0 w-0 h-0 opacity-0 pointer-events-none"
        tabIndex={-1}
        style={{ fontSize: "16px" }}
      />
    </div>
  );
}
