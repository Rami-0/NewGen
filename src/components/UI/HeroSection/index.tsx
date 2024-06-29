'use client';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { Wrapper, Inner, Pill, HeroTextContainer } from './styles';
import ic_chevron_right from '../../../../public/svgs/ic_chevron_right.svg';
import ic_myIcon from '../../../../public/my_svgs/Icon.svg';
import { GetStartedButton, AnimatedGridBackground } from '@/components';
import MaskText from '@/components/Common/MaskText';
import { useIsMobile } from '../../../../libs/useIsMobile';
import { mobileParagraphPhrases, mobilePhrases, paragraphPhrases, phrases } from './constants';
import { motion, useScroll } from 'framer-motion';

const HeroSection = () => {
	const isMobile = useIsMobile();
	const { scrollY } = useScroll();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
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
								<MaskText phrases={mobilePhrases} tag='h1' />
								<MaskText phrases={mobileParagraphPhrases} tag='p' />
								<motion.div
									style={{
										position: 'absolute',
										right: '-80px',
										top: '-30px',
										width: 'fit-content',
										rotate: scrollY
									}}>
									<Image width={200} src={ic_myIcon} alt='any' />
								</motion.div>
							</>
						) : (
							<>
								<MaskText phrases={phrases} tag='h1' />
								<MaskText phrases={paragraphPhrases} tag='p' />
								<motion.div
									style={{
										position: 'absolute',
										right: '-100px',
										top: '0',
										width: 'fit-content',
										rotate: scrollY
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
