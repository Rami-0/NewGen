'use client';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { Wrapper, Inner, Pill, HeroTextContainer } from './styles';
import ic_chevron_right from '../../../../public/svgs/ic_chevron_right.svg';
import ic_myIcon from '../../../../public/my_svgs/Icon.svg';
import { GetStartedButton, AnimatedGridBackground } from '@/components';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';
import { TopPhrases, BottomPhrases } from './constants';
import { motion, useScroll } from 'framer-motion';
import { ReactTyped } from 'react-typed';

const HeroSection = () => {
	const isMobile = useIsMobile();
	const { scrollY } = useScroll();
	const [mounted, setMounted] = useState(false);
	const [currentTopPhrase, setCurrentTopPhrase] = useState(0); // Track the current phrase index for TopPhrases
	const [currentBottomPhrase, setCurrentBottomPhrase] = useState(0); // Track the current phrase index for BottomPhrases
	const [start, setStart] = useState(false);

	useEffect(() => {
		const timeOut = setTimeout(() => {
			setStart(true);
		}, 4000);
		setMounted(true);
		return () => clearTimeout(timeOut);
	}, []);

	return (
		<AnimatedGridBackground>
			<Wrapper>
				<Inner>
					<Pill>
						<span>Introducing nextGen</span>
						<Image src={ic_chevron_right} alt='chevron-right' />
					</Pill>
					{mounted && (
						<HeroTextContainer>
							{isMobile ? (
								<>
									<MaskText tag='h1'>
										{'Automate '}
										<ReactTyped
											strings={start ? TopPhrases : ['']}
											typeSpeed={70}
											backSpeed={50}
											loop
											// backDelay={[2700, 1200]} // Adjusted for sync
											backDelay={2000} // Adjusted for sync
											onStringTyped={(index) => setCurrentTopPhrase(index)} // Update the state when a string is fully typed
											className={`typing-text-${currentTopPhrase}`} // Apply a dynamic class based on the current phrase index
										/>
									</MaskText>
									<motion.div
										style={{
											position: 'absolute',
											right: '-80px',
											top: '-30px',
											width: 'fit-content',
											rotate: scrollY,
										}}>
										<Image width={200} src={ic_myIcon} alt='any' />
									</motion.div>
								</>
							) : (
								<>
									<MaskText tag='h1'>
										{'Automate '}
										<ReactTyped
											strings={start ? TopPhrases : ['']}
											typeSpeed={70}
											backSpeed={50}
											loop
											// backDelay={[2700, 1200]} // Adjusted for sync
											backDelay={2000} // Adjusted for sync
											onStringTyped={(index) => setCurrentTopPhrase(index)} // Update the state when a string is fully typed
											className={`typing-text-${currentTopPhrase}`} // Apply a dynamic class based on the current phrase index
										/>
									</MaskText>
									<motion.div
										style={{
											position: 'absolute',
											right: '-150px',
											top: '0',
											width: 'fit-content',
											rotate: scrollY,
										}}>
										<Image width={200} src={ic_myIcon} alt='any' />
									</motion.div>
								</>
							)}
						</HeroTextContainer>
					)}
					<GetStartedButton padding='1rem 2rem' />
				</Inner>
			</Wrapper>
		</AnimatedGridBackground>
	);
};

export default HeroSection;
