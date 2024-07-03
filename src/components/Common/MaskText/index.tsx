'use client';
import { Body, LineMask } from './styles';
import { useInView, motion } from 'framer-motion';
import React, { useRef } from 'react';

interface MaskTextProps {
	phrases?: string[];
	tag: 'h1' | 'h2' | 'h3' | 'p'; // Define the possible tags
	children?: React.ReactNode;
}

const MaskText: React.FC<MaskTextProps> = ({ phrases, tag, children }) => {
	const animate = {
		initial: {
			y: '100%',
		},
		open: (i: number) => ({
			y: '0%',
			transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
		}),
	};

	const body = useRef(null);
	const isInView = useInView(body, { once: true, margin: '-10%', amount: 0.4 });

	return (
		<Body ref={body}>
			{phrases ? (
				phrases.map((phrase, index) => (
					<LineMask key={index}>
						{tag === 'h1' && (
							<motion.h1 variants={animate} initial='initial' animate={isInView ? 'open' : ''} custom={index}>
								{phrase}
							</motion.h1>
						)}
						{tag === 'h2' && (
							<motion.h2 variants={animate} initial='initial' animate={isInView ? 'open' : ''} custom={index}>
								{phrase}
							</motion.h2>
						)}
						{tag === 'h3' && (
							<motion.h3 variants={animate} initial='initial' animate={isInView ? 'open' : ''} custom={index}>
								{phrase}
							</motion.h3>
						)}
						{tag === 'p' && (
							<motion.p variants={animate} initial='initial' animate={isInView ? 'open' : ''} custom={index}>
								{phrase}
							</motion.p>
						)}
					</LineMask>
				))
			) : (
				<LineMask>
					<motion.div variants={animate} initial='initial' animate={isInView ? 'open' : ''} >
					{tag === 'h1' && <h1>{children}</h1>}
					{tag === 'h2' && <h2>{children}</h2>}
					{tag === 'h3' && <h3>{children}</h3>}
					{tag === 'p' && <p>{children}</p>}
					</motion.div>
				</LineMask>
			)}
		</Body>
	);
};

export default MaskText;
