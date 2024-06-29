import React, { useEffect, useId, useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const BackgroundContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

const GridSvg = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0;
  fill: rgba(235, 254, 25, 1);
  stroke: rgba(156, 163, 175, 0.1);
  // transform: perspective(500px) rotateX(30deg) rotateY(20deg) rotateZ(10deg);
  // transform-origin: center;
`;

interface GridPatternProps {
	width?: number;
	height?: number;
	x?: number;
	y?: number;
	strokeDasharray?: any;
	numSquares?: number;
	maxOpacity?: number;
	duration?: number;
	repeatDelay?: number;
}

const GridPattern: React.FC<GridPatternProps> = ({ width = 40, height = 40, x = -1, y = -1, strokeDasharray = 10, numSquares = 50, maxOpacity = 0.3, duration = 4, repeatDelay = 0.5 }) => {
	const id = useId();
	const containerRef = useRef<SVGSVGElement>(null);
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
	const [squares, setSquares] = useState(() => generateSquares(numSquares));

	function getPos() {
		return [Math.floor((Math.random() * dimensions.width) / width), Math.floor((Math.random() * dimensions.height) / height)];
	}

	function generateSquares(count: number) {
		return Array.from({ length: count }, (_, i) => ({
			id: i,
			pos: getPos(),
		}));
	}

	const updateSquarePosition = (id: number) => {
		setSquares((currentSquares) => currentSquares.map((sq) => (sq.id === id ? { ...sq, pos: getPos() } : sq)));
	};

	useEffect(() => {
		if (dimensions.width && dimensions.height) {
			setSquares(generateSquares(numSquares));
		}
	}, [dimensions, numSquares]);

	useEffect(() => {
		const resizeObserver = new ResizeObserver((entries) => {
			for (let entry of entries) {
				setDimensions({
					width: entry.contentRect.width,
					height: entry.contentRect.height,
				});
			}
		});

		if (containerRef.current) {
			resizeObserver.observe(containerRef.current);
		}

		return () => {
			if (containerRef.current) {
				resizeObserver.unobserve(containerRef.current);
			}
		};
	}, [containerRef]);

	return (
		<GridSvg ref={containerRef} aria-hidden='true'>
			<defs>
				<pattern id={id} width={width} height={height} patternUnits='userSpaceOnUse' x={x} y={y}>
					<path d={`M.5 ${height}V.5H${width}`} fill='none' strokeDasharray={strokeDasharray} />
				</pattern>
			</defs>
			<rect width='100%' height='100%' fill={`url(#${id})`} />
			<svg x={x} y={y} style={{ overflow: 'visible' }}>
				{squares.map(({ pos: [x, y], id }, index) => (
					<motion.rect
						initial={{ opacity: 0 }}
						animate={{ opacity: maxOpacity }}
						transition={{
							duration,
							repeat: 1,
							delay: index * 0.1,
							repeatType: 'reverse',
						}}
						onAnimationComplete={() => updateSquarePosition(id)}
						key={`${x}-${y}-${index}`}
						width={width - 1}
						height={height - 1}
						x={x * width + 1}
						y={y * height + 1}
						fill='235,254,25'
						strokeWidth='0'
					/>
				))}
			</svg>
		</GridSvg>
	);
};

const AnimatedGridBackground: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
	return (
		<BackgroundContainer>
			<GridPattern />
			{children}
		</BackgroundContainer>
	);
};

export default AnimatedGridBackground;
