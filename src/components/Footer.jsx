/** @format */

const Footer = () => {
	return (
		<footer className="py-10 md:py-16 text-center border-t border-white/5 bg-[#0a0a0a]">
			<div className="max-w-7xl mx-auto px-6">
				{/* Logo Kecil di Footer */}
				<div className="mb-6 opacity-50 grayscale hover:grayscale-0 transition duration-500">
					<h4 className="text-lg font-black italic tracking-tighter uppercase text-white">
						ULEK BULU <span className="text-yellow-500">RC</span>
					</h4>
				</div>

				{/* Text Hak Cipta */}
				<p className="text-zinc-600 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.5em] leading-loose">
					&copy; 2026 ULEK BULU RC SINTONG
					<span className="hidden md:inline mx-2 text-zinc-800">|</span>
					<br className="md:hidden" />
					PROFESSIONAL RENTAL SERVICE
				</p>

				{/* Tagline Tambahan */}
				<p className="mt-4 text-[9px] font-bold text-zinc-700 uppercase tracking-widest italic">
					Built for the inner child in every man.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
