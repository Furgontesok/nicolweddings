"use client";

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

      {/* Naptár ikon + date input közvetlenül alatta */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="pointer-events-none w-full h-full"
          style={{ color: `${textColor}4d` }}
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        {/* Date input lefedi az ikont — közvetlen kattintás nyitja a pickert */}
        <input
          type="date"
          onChange={handleCalendarPick}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          tabIndex={-1}
          style={{ fontSize: "16px" }}
        />
      </div>
    </div>
  );
}
