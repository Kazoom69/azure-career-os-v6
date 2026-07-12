export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-deep-navy p-6">
      <div className="glass p-12 rounded-3xl text-center max-w-3xl shadow-2xl border-border-glow">
        <h1 className="text-6xl font-black mb-6 tracking-tighter">
          AZURE <span className="text-gradient-hologram">CAREER OS</span>
        </h1>
        <p className="text-slate text-xl mb-8 leading-relaxed">
          The world's most advanced AI-powered Career Operating System. <br/>
          <span className="text-electric-cyan font-bold">Elite Edition v6.0 is now active.</span>
        </p>
        <button className="bg-gradient-hologram px-8 py-4 rounded-full font-bold text-white hover:scale-105 transition-all shadow-hologram">
          Enter Neural Engine
        </button>
      </div>
    </div>
  );
}
