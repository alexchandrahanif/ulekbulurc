/** @format */

const Hero = () => {
	return (
		<section className="relative h-screen flex items-center justify-center overflow-hidden">
			{/* Background Image Overlay */}
			<div className="absolute inset-0 z-0">
				<img
					src="https://images.unsplash.com/photo-1579412691525-10ee1437aa99?q=80&w=2000"
					className="w-full h-full object-cover opacity-40"
					alt="Heavy Equipment"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-black/60"></div>
			</div>

			<div className="relative z-10 text-center px-6 mt-20">
				<span className="bg-yellow-500 text-black px-4 py-1 font-black text-xs uppercase tracking-[0.3em] mb-6 inline-block transform -rotate-2">
					Sintong - Rokan Hilir
				</span>
				<h1 className="text-6xl md:text-9xl font-black italic uppercase leading-none tracking-tighter">
					GAS <span className="text-yellow-500">POLL</span> <br />
					INNER CHILD!
				</h1>
				<p className="mt-6 text-slate-300 text-lg md:text-2xl max-w-2xl mx-auto font-light italic">
					"Melepas penat bapak-bapak, melatih ketangkasan anak-anak."
				</p>
				<div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
					<div className="flex items-center gap-2 bg-zinc-900 border border-yellow-500/50 px-6 py-3 rounded-xl">
						<span className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></span>
						<span className="font-bold uppercase tracking-widest text-sm text-yellow-500">
							Buka: 19.00 - 23.00 WIB
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Hero;
