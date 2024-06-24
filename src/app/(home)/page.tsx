'use client';
import { FAQ, Featured, FinancialFuture, FinancilaFreedom, HeroSection, IntroSection, JoinSection, OffersSection } from '@/components';
import { useRef, StrictMode } from 'react';
import { useFollowPointerWithVelocity } from '@/app/utils/use-follow-pointer';
import { motion, useTransform } from 'framer-motion';
import { useIsMobile } from '../../../libs/useIsMobile';

export default function Home() {
	const ref = useRef(null);
	const { x, y, xVelocity, yVelocity } = useFollowPointerWithVelocity(ref);
	const rotate = useTransform(xVelocity, [-1000, 1000], [-45, 45]); // Rotate based on x velocity
	const scale = useTransform(yVelocity, [-1000, 1000], [0.5, 1.5]); // Scale based on y velocity
	
	const isMobile = useIsMobile();

	return (
		<StrictMode>
			<main>
				<HeroSection />
				{/* <Featured /> */}
				{/* <OffersSection />
        <FinancilaFreedom />
        <FinancialFuture />
        <IntroSection />
        <JoinSection /> */}
				<FAQ />
				{!isMobile ? (
					<motion.div
						ref={ref}
						className='box'
						style={{
							x, // Bind x motion value
							y, // Bind y motion value
							rotate, // Apply rotation based on velocity
							scale, // Apply scale based on velocity
							pointerEvents: 'none', // Allow clicks to pass through
						}}
					/>
				) : (
					''
				)}
			</main>
		</StrictMode>
	);
}
