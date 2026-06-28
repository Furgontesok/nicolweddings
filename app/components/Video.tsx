export default function Video() {
  return (
    <section className="w-full bg-black">
      <div className="relative w-full h-[50vh] md:h-auto md:aspect-video">
        <video
          src="/videos/fooldal-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
