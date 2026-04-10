/** @format */
import React from 'react';

const PriceList = () => {
	const plans = [
		{
			time: '10 MENIT',
			price: '10K',
			label: 'Sesi Kilat',
			desc: 'Cocok buat yang mau coba-coba kendali dasar.',
		},
		{
			time: '30 MENIT',
			price: '25K',
			label: 'Sesi Puas',
			desc: 'Waktu yang pas buat ngeruk dan pindahin material.',
			recommend: true,
		},
		{
			time: '45 MENIT',
			price: '40K',
			label: 'Sesi Pro',
			desc: 'Main lebih lama, skill operator makin terasah.',
		},
		{
			time: '1 JAM',
			price: '50K',
			label: 'Sesi Sultan',
			desc: 'Paket paling hemat buat yang hobi berat!',
			highlight: true,
		},
	];

	return (
		<section
			id="harga"
			className="py-20 md:py-24 bg-yellow-500 text-black">
			<div className="max-w-7xl mx-auto px-4 md:px-6">
				<div className="text-center mb-12 md:mb-16">
					<h2 className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">
						DAFTAR <span className="bg-black text-yellow-500 px-2">HARGA</span>
					</h2>
					<p className="mt-4 font-bold uppercase tracking-widest text-sm border-b-2 border-black inline-block">
						Sewa Unit RC Alat Berat
					</p>
				</div>

				{/* Grid disesuaikan: 1 kolom di HP, 2 di tablet, 4 di laptop */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
					{plans.map((p, i) => (
						<div
							key={i}
							className={`relative p-8 rounded-[2rem] flex flex-col justify-between transition-all duration-300 ${
								p.highlight
									? 'bg-black text-white scale-100 lg:scale-105 shadow-[0_20px_50px_rgba(0,0,0,0.3)]'
									: 'bg-yellow-400 border-2 border-black/10'
							}`}>
							{p.recommend && (
								<span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-black px-4 py-1 rounded-full uppercase italic">
									Recommended
								</span>
							)}

							<div>
								<h3
									className={`text-lg font-black uppercase italic ${p.highlight ? 'text-yellow-500' : 'text-black'}`}>
									{p.label}
								</h3>
								<div className="flex items-baseline gap-1 my-4">
									<span className="text-5xl md:text-6xl font-black tracking-tighter">
										{p.price}
									</span>
									<span className="text-sm font-bold uppercase">/ Sesi</span>
								</div>
								<p
									className={`text-[11px] font-bold uppercase mb-6 leading-relaxed ${p.highlight ? 'text-zinc-400' : 'text-black/60'}`}>
									{p.desc}
								</p>
							</div>

							<div className="space-y-4">
								<div
									className={`py-3 rounded-xl text-center font-black text-xl border-2 ${p.highlight ? 'border-yellow-500 text-yellow-500' : 'border-black text-black'}`}>
									{p.time}
								</div>
								<a
									href="https://wa.me/+6282288055401"
									target="_blank"
									rel="noreferrer"
									className={`block text-center py-3 rounded-xl font-black uppercase text-xs tracking-widest transition-all ${
										p.highlight
											? 'bg-yellow-500 text-black hover:bg-white'
											: 'bg-black text-white hover:bg-zinc-800'
									}`}>
									Sewa Sekarang
								</a>
							</div>
						</div>
					))}
				</div>

				<p className="text-center mt-12 text-xs font-black uppercase italic tracking-widest opacity-70">
					* Harga berlaku untuk semua jenis unit (Excavator, Truck, Loader)
				</p>
			</div>
		</section>
	);
};

export default PriceList;
