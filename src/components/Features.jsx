/** @format */
import React from 'react';

const Features = () => {
	const units = [
		{
			name: 'Excavator Yigong',
			desc: 'Unit hydraulic dengan kontrol presisi. Sangat bertenaga untuk mengeruk di area track yang keras.',
			img: '/mobil1.jpeg', // Mengarah ke folder public
			tag: 'Best Seller',
		},
		{
			name: 'Mining Dump Truck',
			desc: 'Truk angkut skala besar. Siap membawa muatan pasir dari area keruk ke pembuangan dengan stabil.',
			img: '/mobil2.jpeg',
			tag: 'Heavy Hauler',
		},
		{
			name: 'Crawler Bulldozer',
			desc: 'Lincah untuk meratakan gundukan pasir. Sangat tangguh di segala medan track.',
			img: '/mobil3.jpeg',
			tag: 'Earth Mover',
		},
		{
			name: 'Professional Team',
			desc: 'Kombinasi armada lengkap untuk simulasi proyek konstruksi nyata yang lebih seru.',
			img: '/mobil4.jpeg',
			tag: 'Full Set',
		},
	];

	return (
		<section
			id="armada"
			className="py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
			<div className="mb-12 md:mb-16">
				<h2 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter leading-none">
					PILIH <span className="text-yellow-500">ARMADA</span>{' '}
					<br className="md:hidden" /> ANDALAN
				</h2>
				<p className="mt-4 text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs italic border-l-4 border-yellow-500 pl-4">
					Koleksi RC Alat Berat Profesional di Sintong
				</p>
			</div>

			{/* Grid disesuaikan: 1 kolom di HP, 2 kolom di Tablet ke atas */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-10">
				{units.map((unit, index) => (
					<div
						key={index}
						className="group bg-zinc-900 rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl transition-all hover:border-yellow-500/50">
						<div className="aspect-video overflow-hidden bg-black">
							<img
								src={unit.img}
								alt={unit.name}
								className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition duration-700 ease-in-out"
							/>
						</div>
						<div className="p-6 md:p-10 bg-gradient-to-t from-black to-zinc-900/50">
							<span className="text-yellow-500 text-[9px] md:text-[10px] font-black tracking-[0.3em] uppercase bg-black/50 px-3 py-1 rounded-full border border-yellow-500/30">
								{unit.tag}
							</span>
							<h3 className="text-2xl md:text-4xl font-black italic uppercase mt-5 mb-3 tracking-tighter">
								{unit.name}
							</h3>
							<p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium">
								{unit.desc}
							</p>
						</div>
					</div>
				))}
			</div>

			{/* Footer Section di dalam Features */}
			<div className="mt-16 text-center">
				<p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.4em]">
					Siap Operasi Setiap Jam 19:00 - 23:00 WIB
				</p>
			</div>
		</section>
	);
};

export default Features;
