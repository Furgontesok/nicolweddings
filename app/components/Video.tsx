export default function Video() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-[family-name:var(--font-nunito)] text-xs tracking-[0.3em] uppercase text-[#363025]/50 mb-3">
            Érezd a hangulatot
          </p>
          <h2 className="font-[family-name:var(--font-italianno)] text-6xl md:text-7xl text-[#363025]">
            Videó
          </h2>
          <div className="w-16 h-px bg-[#363025]/30 mx-auto mt-6" />
        </div>

        <div className="relative w-full aspect-video bg-[#363025] overflow-hidden">
          <video
            className="w-full h-full object-cover"
            controls
            playsInline
            poster="/images/4K2A1978-2.jpg"
          >
            <source src="/images/Vide%C3%B3/video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
