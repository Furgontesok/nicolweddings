export default function Attekinto() {
  const imgs = [
    "1..jpg","2..jpg","3..jpeg","4..jpg","5..jpg","6..jpg","7..jpg","8..jpg",
    "9..jpg","10..jpg","11..jpg","12..jpg","13..jpg","14..jpg","15..jpg","16..jpg",
    "17..jpg","18..jpg","19..jpg","20..jpg",
  ];
  return (
    <div style={{ background: "#1a1a1a", minHeight: "100vh", padding: 20, fontFamily: "sans-serif" }}>
      <p style={{ color: "#888", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 16 }}>
        Fooldal referenciák — összes kép
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 8 }}>
        {imgs.map((name, i) => (
          <div key={name}>
            <div style={{ position: "relative", aspectRatio: "2/3", overflow: "hidden", background: "#333" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/images/fooldal-referenciak/${name}`}
                alt={name}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
            <p style={{ color: "#666", fontFamily: "monospace", fontSize: 9, marginTop: 3 }}>
              {i + 1}. {name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
