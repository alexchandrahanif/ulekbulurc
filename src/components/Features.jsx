/** @format */
import React from 'react';

const Features = () => {
	const units = [
		{
			name: 'Excavator CAT 336',
			desc: 'Unit hydraulic paling dicari. Mampu mengeruk material padat dengan kontrol yang sangat halus.',
			img: 'https://images.unsplash.com/photo-1545063914-a1a6ec821acc?q=80&w=800',
			tag: 'Best Seller',
		},
		{
			name: 'Mining Dump Truck',
			desc: 'Truk angkut skala besar dengan ban karet asli. Siap membawa muatan pasir dari area keruk ke pembuangan.',
			img: 'https://images.unsplash.com/photo-1591530357640-029806300998?q=80&w=800',
			tag: 'Heavy Hauler',
		},
		{
			name: 'Front Wheel Loader',
			desc: 'Sangat lincah untuk meratakan track atau memindahkan tumpukan pasir dalam jumlah besar.',
			img: 'https://images.unsplash.com/photo-1541625602330-2277a4c4b282?q=80&w=800',
			tag: 'All-Terrain',
		},
	];

	return (
		<section
			id="armada"
			className="py-24 px-6 max-w-7xl mx-auto">
			<div className="mb-16">
				<h2 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">
					PILIH <span className="text-yellow-500">UNIT</span> ANDALAN
				</h2>
				<p className="mt-4 text-slate-400 font-bold uppercase tracking-widest text-sm italic">
					Koleksi RC Alat Berat Profesional di Sintong
				</p>
			</div>

			<div className="grid md:grid-cols-3 gap-8">
				{units.map((unit, index) => (
					<div
						key={index}
						className="group bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl transition-all hover:border-yellow-500">
						<div className="aspect-square overflow-hidden bg-black">
							<img
								src={unit.img}
								alt={unit.name}
								className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition duration-700"
							/>
						</div>
						<div className="p-8">
							<span className="text-yellow-500 text-[10px] font-black tracking-[0.3em] uppercase border-b-2 border-yellow-500 pb-1">
								{unit.tag}
							</span>
							<h3 className="text-2xl font-black italic uppercase mt-4 mb-2">
								{unit.name}
							</h3>
							<p className="text-slate-400 text-sm leading-relaxed">
								{unit.desc}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Features;
