'use client';
import Image from 'next/image';
import ic_import from '../../../../public/my_svgs/Icon.svg';

import { Wrapper, Inner, SecondOverlay } from './styles';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Preloader = ({ setComplete }: { setComplete: Dispatch<SetStateAction<boolean>> }) => {
	const word = ['N', 'E', 'X', 'T', 'G', 'E', 'N'];

	const spans = useRef<any>([]); // Create a ref to store the span elements
	const imageRef = useRef(null);
	const secondOverlayRef = useRef(null);
	const wrapperRef = useRef(null);

	useEffect(() => {
		const tl = gsap.timeline();
		tl.to(imageRef.current, {
			rotate: '360deg',
			ease: 'back.out(1.7)', // Easing function
			duration: 1.4,
		});
		tl.to(imageRef.current, {
			y: '-100%', // Move the spans up
			ease: 'back.out(1.7)', // Easing function
		});
		// Iterate through the span elements and animate them
		tl.to(spans.current, {
			y: '-100%', // Move the spans up
			ease: 'back.out(0.7)', // Easing function
			duration: 0.7, // Animation duration
			stagger: 0.1, // Stagger duration (0.05 seconds delay between each span)
		});
		// Animate both the wrapper and the second overlay almost at the same time
		tl.to([wrapperRef.current, secondOverlayRef.current], {
			scaleY: 0,
			transformOrigin: 'top',
			ease: 'expo.out(1)',
			stagger: 0.2,
			duration: 1,
			onComplete: () => {
				setComplete(true);
			},
		});

		// Fade out the entire preloader after the animations
		tl.to(
			[wrapperRef.current, secondOverlayRef.current],
			{
				opacity: 0,
				ease: 'power1.out',
				duration: 1,
				onComplete: () => {
					setComplete(true);
				},
			},
			'-=0.5',
		); // Start fade out slightly before the end of the previous animation
	}, [setComplete]);

	return (
		<>
			<Wrapper ref={wrapperRef}>
				<Inner>
					<Image ref={imageRef} src={ic_import} alt='import icon' />
					<div>
						{word.map((t, i) => (
							<div
								key={i}
								ref={(element) => (spans.current[i] = element)} // Assign ref to each span
							>
								{t}
							</div>
						))}
					</div>
				</Inner>
			</Wrapper>
			<SecondOverlay ref={secondOverlayRef}></SecondOverlay>
		</>
	);
};

export default Preloader;
