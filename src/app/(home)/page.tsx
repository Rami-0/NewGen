'use client';
import { FAQ, Featured, FinancialFuture, FinancialFreedom, HeroSection, IntroSection, JoinSection, OffersSection } from '@/components';
import { useRef, StrictMode } from 'react';
import { useFollowPointerWithVelocity } from '@/utils/use-follow-pointer';
import { motion, useTransform } from 'framer-motion';
import { useIsMobile } from '../../../libs/useIsMobile';
import icon from '../../../public/my_svgs/Icon.svg';
import Image from 'next/image';

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
				<JoinSection />
				<Featured />
				{/* Uncomment the sections as needed */}
				{/* <Form /> */}
				{/* <OffersSection /> */}
				{/* <FinancialFreedom /> */}
				{/* <FinancialFuture /> */}
				{/* <IntroSection /> */}
				{/* <FAQ /> */}
				{!isMobile && (
					<motion.img
						src={icon.src}
						ref={ref}
						style={{
							x, // Bind x motion value
							y, // Bind y motion value
							rotate, // Apply rotation based on velocity
							scale, // Apply scale based on velocity
							pointerEvents: 'none', // Allow clicks to pass through
							transition: 'all 0.1s', // Add transition time
							width: '120px',
							height: '120px',
						}}
						alt='icon'
						className='box'
					/>
				)}
			</main>
		</StrictMode>
	);
}
