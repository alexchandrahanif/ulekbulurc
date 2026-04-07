/** @format */
import React from 'react';

const Location = () => {
	return (
		<section
			id="lokasi"
			className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto border-t border-white/5">
			<div className="bg-zinc-900 rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 relative overflow-hidden border border-white/5 shadow-2xl text-center">
				{/* Background Accent - Disesuaikan agar tidak memotong di mobile */}
				<div className="absolute top-0 right-0 p-4 md:p-10 opacity-5 pointer-events-none">
					<h1 className="text-[8rem] md:text-[15rem] font-black italic uppercase leading-none">
						RC
					</h1>
				</div>

				<div className="relative z-10 max-w-3xl mx-auto">
					<span className="bg-yellow-500 text-black px-4 py-1 font-black text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] mb-6 md:mb-8 inline-block transform -skew-x-12">
						Markas Besar
					</span>

					{/* Ukuran font heading diturunkan untuk mobile */}
					<h2 className="text-3xl md:text-8xl font-black italic uppercase leading-tight md:leading-none tracking-tighter mb-6 md:mb-8">
						SINTONG <br /> <span className="text-yellow-500">ROKAN HILIR</span>
					</h2>

					<div className="h-1 w-20 md:w-32 bg-yellow-500 mx-auto mb-8 md:mb-10"></div>

					<div className="space-y-3 md:space-y-4 mb-10 md:mb-12">
						<p className="text-xl md:text-4xl font-black uppercase tracking-tight italic text-white leading-snug">
							Jalur 2 <br className="md:hidden" /> Masjid Raya Annur
						</p>
						<div className="flex items-center justify-center gap-2 md:gap-4 text-slate-400 font-bold uppercase tracking-widest text-[10px] md:text-base">
							<span className="flex items-center gap-2">
								<span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
								Buka Jam 19.00 - 23.00 WIB
							</span>
						</div>
					</div>

					{/* Button stacking untuk mobile agar tidak sempit */}
					<div className="flex flex-col md:flex-row gap-4 justify-center">
						<a
							href="https://wa.me/+6282288055401"
							target="_blank"
							rel="noreferrer"
							className="bg-green-600 hover:bg-green-500 text-white px-6 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl font-black uppercase tracking-widest transition-all shadow-xl shadow-green-900/20 italic text-sm md:text-base">
							Hubungi Via WhatsApp
						</a>
						<a
							href="https://maps.google.com" // Ganti dengan link share maps asli
							target="_blank"
							rel="noreferrer"
							className="bg-white/5 hover:bg-white/10 text-white px-6 md:px-10 py-4 md:py-5 rounded-xl md:rounded-2xl font-black uppercase tracking-widest transition-all border border-white/10 italic text-sm md:text-base">
							Navigasi Peta
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Location;
