/** @format */
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import PriceList from './components/PriceList';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
	return (
		<div className="bg-[#0f0f0f] text-white min-h-screen font-sans selection:bg-yellow-500 selection:text-black">
			<Navbar />
			<Hero />
			<Features />
			<PriceList />
			<Location />
			<Footer />
		</div>
	);
}

export default App;
