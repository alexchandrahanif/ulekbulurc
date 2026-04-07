/** @format */

const PriceList = () => {
	const plans = [
		{ time: '10 MIN', price: '10K', label: 'Operator Pemula' },
		{ time: '25 MIN', price: '20K', label: 'Operator Handal', best: true },
		{ time: '60 MIN', price: '45K', label: 'Paket Mandor' },
	];

	return (
		<section
			id="harga"
			className="py-24 bg-yellow-500 text-black">
			<div className="max-w-7xl mx-auto px-6 text-center">
				<h2 className="text-5xl font-black uppercase italic mb-16 tracking-tighter">
					TIKET MASUK TRACK
				</h2>
				<div className="grid md:grid-cols-3 gap-8">
					{plans.map((p, i) => (
						<div
							key={i}
							className={`p-10 rounded-3xl flex flex-col items-center ${p.best ? 'bg-black text-white scale-105 shadow-2xl' : 'bg-yellow-400 border-4 border-black'}`}>
							{p.best && (
								<span className="bg-white text-black text-[10px] font-black px-4 py-1 rounded-full mb-4 uppercase">
									Paling Cuan
								</span>
							)}
							<h3 className="text-xl font-black uppercase italic">{p.label}</h3>
							<div className="text-7xl font-black my-6 tracking-tighter">
								{p.price}
							</div>
							<p className="font-bold text-lg mb-8 tracking-widest uppercase">
								DURASI: {p.time}
							</p>
							<button
								className={`w-full py-4 rounded-xl font-black uppercase transition ${p.best ? 'bg-yellow-500 text-black hover:bg-white' : 'bg-black text-white hover:bg-zinc-800'}`}>
								Booking Sesi
							</button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default PriceList;
