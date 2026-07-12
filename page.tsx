export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a192f] p-6 text-white">
      <div className="p-12 rounded-3xl text-center max-w-3xl border border-[#00d4aa] bg-[#0F172A]/70 backdrop-blur-md shadow-2xl">
        <h1 className="text-6xl font-black mb-6 tracking-tighter">
          AZURE <span style={{color: '#00d4aa'}}>CAREER OS</span>
        </h1>
        <p className="text-slate-400 text-xl mb-8 leading-relaxed">
          The world's most advanced AI-powered Career Operating System. <br/>
          <span style={{color: '#00d4aa'}} className="font-bold">Elite Edition v6.0 is now active.</span>
        </p>
        <button className="bg-[#6d4aff] px-8 py-4 rounded-full font-bold text-white hover:scale-105 transition-all">
          Enter Neural Engine
        </button>
      </div>
    </div>
  );
}
