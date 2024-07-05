'use client';

import { ReactLenis } from '@studio-freight/react-lenis';
import StyledComponentsRegistry from '../../../libs/registry';
import { GlobalStyles } from './GlobalStyles';
import { Footer, Header, Preloader } from '..';
import { useState } from 'react';
import icon from '../../../public/my_svgs/Icon.svg';
import Image from 'next/image';
import { useIsMobile } from '../../../libs/useIsMobile';
import { useFollowPointerWithVelocity } from '@/utils/use-follow-pointer';
import { motion, useTransform } from 'framer-motion';
import { useRef } from 'react';


const Layout = ({ children }: { children: React.ReactNode }) => {

	const ref = useRef(null);
	const { x, y, xVelocity, yVelocity } = useFollowPointerWithVelocity(ref);
	const rotate = useTransform(xVelocity, [-1000, 1000], [-45, 45]); // Rotate based on x velocity
	const scale = useTransform(yVelocity, [-1000, 1000], [0.5, 1.5]); // Scale based on y velocity

	const isMobile = useIsMobile();

	const [complete, setComplete] = useState(false);
	return (
		<StyledComponentsRegistry>
			<ReactLenis root easing={(t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))}>
				<GlobalStyles />
				<Preloader setComplete={setComplete} />
				<div className={complete ? 'complete' : 'not_complete'}>
					<Header />
					{children}
					<Footer />
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

				</div>
			</ReactLenis>
		</StyledComponentsRegistry>
	);
};

export default Layout;
