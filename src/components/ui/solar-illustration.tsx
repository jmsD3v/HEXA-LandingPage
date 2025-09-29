export default function SolarIllustration() {
  return (
    <div className="relative flex items-center justify-center pb-12 md:pb-14">
      {/* Sun */}
      <div className="absolute -top-10 -right-10 w-28 h-28 rounded-full bg-gradient-to-tr from-yellow-300 via-amber-300 to-orange-400 blur-md opacity-70 z-0" />
      <div className="absolute -top-8 -right-8 w-20 h-20 rounded-full bg-yellow-300/60 z-0" />

      {/* Panels */}
      <div className="relative z-10 grid grid-cols-3 gap-2">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="relative h-10 w-16 md:h-12 md:w-20 bg-gradient-to-br from-sky-700 to-slate-900 border border-white/10 rounded-sm shadow-inner"
          >
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-[2px] p-[2px]">
              <span className="bg-white/10" />
              <span className="bg-white/10" />
              <span className="bg-white/10" />
              <span className="bg-white/10" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
