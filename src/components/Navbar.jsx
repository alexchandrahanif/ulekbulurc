/** @format */

const Navbar = () => {
	return (
		<nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
			<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
				<div className="text-2xl font-black italic tracking-tighter uppercase">
					ULEK BULU <span className="text-yellow-500">RC</span>
				</div>
				<div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest">
					<a
						href="#armada"
						className="hover:text-yellow-500 transition">
						Armada
					</a>
					<a
						href="#harga"
						className="hover:text-yellow-500 transition">
						Harga
					</a>
					<a
						href="#lokasi"
						className="hover:text-yellow-500 transition">
						Lokasi
					</a>
				</div>
				{/* <button className="bg-yellow-500 text-black px-5 py-2 rounded-full font-black text-xs uppercase hover:scale-105 transition">
					Sewa Sekarang
				</button> */}
			</div>
		</nav>
	);
};
export default Navbar;
