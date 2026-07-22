"use client";

import { useState } from "react";

type ImgOpt = { src: string; label: string };

const allOptions: ImgOpt[] = [
  // Eredeti képek
  { src: "/images/egyeb-22.jpg", label: "eredeti-01" },
  { src: "/images/egyeb-12.jpg", label: "eredeti-02" },
  { src: "/images/egyeb-18.jpg", label: "eredeti-03" },
  { src: "/images/egyeb-11.jpg", label: "eredeti-04" },
  // Vivi & Bence
  { src: "/images/Vivi%20%26%20Bence/11..jpg", label: "Vivi-Bence-11" },
  // Weboldal próba
  ...["H88A2251","H88A2488-2","H88A3995-3","H88A4354","H88A4354b","H88A4432","H88A4451copy","H88A4476","H88A4519-2","H88A4720","H88A4720copy","H88A4819","H88A4879","H88A5021copy","H88A5023copy","JE5A3867","JE5A3912","JE5A3961","JE5A4187","JE5A4508","JE5A4508copy"].map(n => ({ src: `/images/proba/${n}.jpg`, label: n })),
  // Szerus & Andris
  ...[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26].map(n => ({ src: `/images/proba/szerus-andris/${n}..jpg`, label: `SA-${n}` })),
];

const services = [
  { num: "01", title: "Teljes körű esküvőszervezés", desc: "Az első ötlettől az utolsó tánclépésig végigkísérlek benneteket.", defaultIdx: 0, defaultPos: "center 75%" },
  { num: "02", title: "30 nap a nagy napig", desc: "Az utolsó hónapban átveszem a koordinációt, hogy a nagy napon csak egymásra figyeljetek.", defaultIdx: 1, defaultPos: "center 50%" },
  { num: "03", title: "Esküvői tanácsadás", desc: "Egy konzultáció alatt eligazítalak benneteket a teendők között, és gyakorlati tippekkel segítem tovább az utatokat.", defaultIdx: 2, defaultPos: "center 80%" },
  { num: "04", title: "Egyéb rendezvények", desc: "Születésnapok, lánybúcsúk, babavárók és más különleges alkalmak.", defaultIdx: 3, defaultPos: "center 80%" },
];

const positions = ["center top", "center 20%", "center 40%", "center 60%", "center 80%", "center bottom"];

function ServiceCard({ service, idx, pos, onPrev, onNext, onPosChange }: {
  service: typeof services[0];
  idx: number;
  pos: string;
  onPrev: () => void;
  onNext: () => void;
  onPosChange: (p: string) => void;
}) {
  const opt = allOptions[idx];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ position: "relative", height: 320, overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={opt.src}
          alt={service.title}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: pos }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(54,48,37,0.85) 0%, rgba(54,48,37,0.2) 50%, transparent 100%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: 24 }}>
          <span style={{ fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", display: "block", marginBottom: 6 }}>{service.num}</span>
          <h3 style={{ fontFamily: "Georgia, serif", fontSize: 20, fontWeight: 300, color: "white", lineHeight: 1.3, margin: "0 0 8px" }}>{service.title}</h3>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 12, lineHeight: 1.6, margin: 0 }}>{service.desc}</p>
        </div>
        <span style={{ position: "absolute", top: 16, right: 20, color: "rgba(255,255,255,0.3)", fontSize: 16 }}>→</span>
      </div>

      {/* Kép lapozó */}
      <div style={{ background: "#2a2a2a", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 12px" }}>
        <button onClick={onPrev} style={{ background: "none", border: "none", color: "#aaa", cursor: "pointer", fontSize: 18, padding: "2px 10px" }}>‹</button>
        <span style={{ color: "#888", fontSize: 10, fontFamily: "monospace", letterSpacing: "0.1em" }}>{opt.label} ({idx + 1}/{allOptions.length})</span>
        <button onClick={onNext} style={{ background: "none", border: "none", color: "#aaa", cursor: "pointer", fontSize: 18, padding: "2px 10px" }}>›</button>
      </div>

      {/* Pozíció gombok */}
      <div style={{ background: "#222", display: "flex", gap: 4, padding: "6px 8px", flexWrap: "wrap" }}>
        {positions.map(p => (
          <button key={p} onClick={() => onPosChange(p)} style={{ padding: "3px 8px", fontSize: 9, cursor: "pointer", letterSpacing: "0.1em", background: pos === p ? "#F5F3ED" : "transparent", color: pos === p ? "#363025" : "#666", border: "1px solid rgba(255,255,255,0.1)", whiteSpace: "nowrap" }}>
            {p}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function ProbaKepek() {
  const [indices, setIndices] = useState(services.map(s => s.defaultIdx));
  const [poses, setPoses] = useState(services.map(s => s.defaultPos));

  const go = (ci: number, dir: 1 | -1) =>
    setIndices(prev => { const n = [...prev]; n[ci] = (n[ci] + dir + allOptions.length) % allOptions.length; return n; });

  const changePos = (ci: number, p: string) =>
    setPoses(prev => { const n = [...prev]; n[ci] = p; return n; });

  return (
    <div style={{ background: "#EDEDE1", minHeight: "100vh", fontFamily: "sans-serif" }}>
      <div style={{ background: "#363025", padding: "14px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ color: "#F5F3ED", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.7 }}>Szolgáltatások — képpróba</span>
        <span style={{ color: "#F5F3ED", fontSize: 10, opacity: 0.4 }}>‹ › lapozz · eredeti-01…04 = jelenlegi képek · SA-1…26 = Szerus &amp; Andris</span>
      </div>
      <div style={{ padding: 20 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, maxWidth: 900, margin: "0 auto" }}>
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} idx={indices[i]} pos={poses[i]}
              onPrev={() => go(i, -1)} onNext={() => go(i, 1)} onPosChange={p => changePos(i, p)} />
          ))}
        </div>
      </div>
      <div style={{ textAlign: "center", padding: "8px 0 32px", color: "#555", fontSize: 11, letterSpacing: "0.1em" }}>
        Ha megtaláltad a megfelelő képet, mondd meg melyik kártyához melyik fájl kell — beállítom.
      </div>
    </div>
  );
}
