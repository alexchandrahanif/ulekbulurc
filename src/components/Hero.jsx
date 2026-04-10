/** @format */
import React from 'react';

const Hero = () => {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			{/* Background Image Gahar - Vibe Konstruksi Malam */}
			<div className="absolute inset-0 z-0">
				<img
					src="https://images.unsplash.com/photo-1579412691525-10ee1437aa99?q=80&w=2000" // Gambar stok konstruksi malam gahar
					className="w-full h-full object-cover opacity-30grayscale" // grayscale agar tidak tabrakan dengan teks kuning
					alt="Rental RC Excavator Sintong"
				/>
				{/* Overlay Gelap dengan Gradient agar teks kuning makin "nyala" */}
				<div className="absolute inset-0 bg-gradient-to-b from-black via-[#0f0f0f]/80 to-[#0f0f0f]"></div>
			</div>

			<div className="relative z-10 text-center px-4 md:px-6 pt-24 pb-16 mt-16 md:mt-20">
				{/* Tagline Komedi dari X-Banner - Disesuaikan agar pas di mobile */}
				<span className="bg-white text-black px-3 md:px-4 py-1 font-black text-[9px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] mb-8 md:mb-10 inline-block transform -skew-x-12 leading-relaxed">
					<br className="md:hidden" />
					<span className="md:hidden">, </span>
					COCOK UNTUK BAYI UMUR 30 TAHUN KE ATAS
				</span>

				{/* Heading Raksasa & Bold - Sama dengan X-Banner */}
				<h1 className="text-4xl md:text-8xl lg:text-9xl font-black italic uppercase leading-tight md:leading-none tracking-tighter mb-6 md:mb-8 text-white">
					GAS <span className="text-yellow-500">POLL</span>!{' '}
					<span className="hidden md:inline text-yellow-500">!</span>
				</h1>

				{/* Text Deskripsi Deskriptif & Komedi dari X-Banner */}
				<div className="h-1 w-16 md:w-32 bg-yellow-500 mx-auto mb-8 md:mb-10"></div>
				<p className="mt-6 text-slate-300 text-base md:text-3xl max-w-4xl mx-auto font-light leading-snug md:leading-tight italic">
					"Melepas penat bapak-bapak, <br className="md:hidden" /> melatih
					ketangkasan anak-anak."
				</p>

				{/* Info Jam Operasional & Status Live */}
				<div className="mt-12 md:mt-16 flex flex-col md:flex-row items-center justify-center gap-4">
					<div className="flex items-center gap-2 bg-zinc-900 border border-yellow-500/50 px-6 py-3 rounded-full shadow-lg">
						<span className="w-3 h-3 bg-red-600 rounded-full animate-pulse shadow-[0_0_10px_#e53e3e]"></span>
						<span className="font-bold uppercase tracking-widest text-sm text-yellow-500">
							BUKA: 19.00 - 23.00 WIB
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};
export default Hero;
