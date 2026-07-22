"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const CARD_W = 800;
const CARD_H = 1100;

const labelCls = "font-[family-name:var(--font-nunito)] text-[9px] tracking-[0.25em] uppercase text-[#363025]/40 mb-1.5 block";
const inputCls = "w-full bg-[#F5F3ED] border border-[#363025]/10 px-4 py-3 font-[family-name:var(--font-nunito)] text-[12px] text-[#363025] focus:outline-none focus:border-[#363025]/30 transition-colors";

export default function SaveTheDateAdmin() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [coupleNames, setCoupleNames] = useState("Anna & Péter");
  const [date, setDate] = useState("2026. szeptember 12.");
  const [venue, setVenue] = useState("Zámárdi Kastély");
  const [venueImg, setVenueImg] = useState<HTMLImageElement | null>(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, CARD_W, CARD_H);

    // Háttér
    ctx.fillStyle = "#EDEDE1";
    ctx.fillRect(0, 0, CARD_W, CARD_H);

    // Keret
    ctx.strokeStyle = "rgba(54,48,37,0.15)";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(32, 32, CARD_W - 64, CARD_H - 64);

    let y = 90;

    // Helyszín vonalrajz
    if (venueImg) {
      const maxW = 640;
      const maxH = 360;
      const ratio = Math.min(maxW / venueImg.width, maxH / venueImg.height);
      const w = venueImg.width * ratio;
      const h = venueImg.height * ratio;
      ctx.drawImage(venueImg, (CARD_W - w) / 2, y, w, h);
      y += h + 30;
    } else {
      y = 300;
    }

    // Felső vonal
    ctx.strokeStyle = "rgba(54,48,37,0.18)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo((CARD_W - 140) / 2, y);
    ctx.lineTo((CARD_W + 140) / 2, y);
    ctx.stroke();
    y += 56;

    // "Save the Date"
    ctx.fillStyle = "#363025";
    ctx.textAlign = "center";
    ctx.font = "italic 32px 'Cormorant Garamond'";
    (ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing = "6px";
    ctx.fillText("Save the Date", CARD_W / 2, y);
    y += 108;

    // Pár neve
    ctx.font = "400 92px 'Italianno'";
    (ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing = "0px";
    ctx.fillText(coupleNames, CARD_W / 2, y);
    y += 36;

    // Elválasztó vonal
    ctx.strokeStyle = "rgba(54,48,37,0.22)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo((CARD_W - 80) / 2, y);
    ctx.lineTo((CARD_W + 80) / 2, y);
    ctx.stroke();
    y += 50;

    // Dátum
    ctx.fillStyle = "rgba(54,48,37,0.6)";
    ctx.font = "300 16px 'Nunito Sans'";
    (ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing = "5px";
    ctx.fillText(date.toUpperCase(), CARD_W / 2, y);
    y += 38;

    // Helyszín neve
    ctx.fillStyle = "rgba(54,48,37,0.4)";
    ctx.font = "300 17px 'Nunito Sans'";
    (ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing = "3px";
    ctx.fillText(venue, CARD_W / 2, y);
    y += 90;

    // További részletek
    ctx.fillStyle = "rgba(54,48,37,0.28)";
    ctx.font = "300 14px 'Nunito Sans'";
    (ctx as CanvasRenderingContext2D & { letterSpacing: string }).letterSpacing = "6px";
    ctx.fillText("TOVÁBBI RÉSZLETEK HAMAROSAN", CARD_W / 2, y);
  }, [coupleNames, date, venue, venueImg]);

  useEffect(() => {
    document.fonts.ready.then(() => draw());
  }, [draw]);

  function handleVenueUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const img = new window.Image();
      img.onload = () => setVenueImg(img);
      img.src = ev.target?.result as string;
    };
    reader.readAsDataURL(file);
  }

  function download() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `save-the-date-${coupleNames.replace(/\s+/g, "-").replace(/&/g, "es").toLowerCase()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  }

  return (
    <div className="p-10">
      <div className="mb-10">
        <p className={labelCls}>Admin</p>
        <h1 className="font-[family-name:var(--font-cormorant)] text-4xl font-light text-[#363025]">Save the Date</h1>
      </div>

      <div className="flex gap-12 items-start">
        {/* Bal oldal: form */}
        <div className="w-72 shrink-0 space-y-5">
          <div>
            <label className={labelCls}>Helyszín vonalrajza (SVG / PNG)</label>
            <input
              type="file"
              accept=".svg,.png,.jpg,.jpeg"
              onChange={handleVenueUpload}
              className="w-full font-[family-name:var(--font-nunito)] text-[11px] text-[#363025]/50
                file:mr-3 file:py-2 file:px-4 file:border file:border-[#363025]/20
                file:text-[9px] file:tracking-widest file:uppercase file:text-[#363025]/40
                file:bg-transparent file:cursor-pointer hover:file:text-[#363025]/60"
            />
          </div>
          <div>
            <label className={labelCls}>Pár neve</label>
            <input
              className={inputCls}
              value={coupleNames}
              onChange={e => setCoupleNames(e.target.value)}
              placeholder="Anna & Péter"
            />
          </div>
          <div>
            <label className={labelCls}>Dátum</label>
            <input
              className={inputCls}
              value={date}
              onChange={e => setDate(e.target.value)}
              placeholder="2026. szeptember 12."
            />
          </div>
          <div>
            <label className={labelCls}>Helyszín neve</label>
            <input
              className={inputCls}
              value={venue}
              onChange={e => setVenue(e.target.value)}
              placeholder="Zámárdi Kastély"
            />
          </div>

          <button
            onClick={download}
            className="w-full font-[family-name:var(--font-nunito)] text-[11px] tracking-[0.2em] uppercase px-8 py-3 bg-[#363025] text-white hover:bg-[#363025]/80 transition-colors duration-200"
          >
            Letöltés PNG
          </button>
        </div>

        {/* Jobb oldal: előnézet */}
        <div className="flex-1 flex flex-col items-center gap-4">
          <p className={labelCls}>Előnézet</p>
          <canvas
            ref={canvasRef}
            width={CARD_W}
            height={CARD_H}
            style={{ width: "360px", height: "495px", boxShadow: "0 4px 24px rgba(54,48,37,0.12)" }}
          />
        </div>
      </div>
    </div>
  );
}
