'use client';
import { FAQ, Featured, FinancialFuture, FinancilaFreedom, HeroSection, IntroSection, JoinSection, OffersSection } from '@/components';
import { StrictMode } from 'react';

export default function Home() {
	return (
		<StrictMode>
			<main>
				<HeroSection />
				<JoinSection />
				{/* <Featured /> */}
				{/* Uncomment the sections as needed */}
				{/* <Form /> */}
				{/* <OffersSection /> */}
				{/* <FinancialFreedom /> */}
				{/* <FinancialFuture /> */}
				{/* <IntroSection /> */}
				{/* <FAQ /> */}
			</main>
		</StrictMode>
	);
}
