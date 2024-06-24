'use client';
import { styled } from 'styled-components';
import hero_background from '../../../../public/images/grid_background.png';

export const Wrapper = styled.section`
	padding: 20rem 0 10rem;
	@media (max-width: 768px) {
		margin-left: 1.5rem;
		margin-right: 1.5rem;
	}
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;

export const Inner = styled.div`
	background: url(${hero_background.src}) no-repeat;
	display: flex;
	flex-direction: column;
	align-items: start;
	text-align: start;
	background-position: top center;
	background-size: contain;
	height: fit-content;
	width: 90%;
	max-width: 1440px;
	margin: 0 auto;
`;

export const Pill = styled.div`
	display: flex;
	padding: 0.375rem 0.75rem;
	justify-content: center;
	align-items: center;
	gap: 0.625rem;
	border-radius: 6.25rem;
	border: 0.2px solid #989898;
	background: rgba(255, 255, 255, 0.15);
	backdrop-filter: blur(10px);
	margin-bottom: 1rem;

	span {
		color: var(--light-gray);
		font-size: 1rem;
		font-weight: 400;
	}
`;

export const HeroTextContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	padding-bottom: 2rem;
	position: relative;
	justify-content: flex-start;
	align-items: start;

	h1 {
		font-size: 6rem;
		font-weight: 400;
	}

	p {
		max-width: 41.75rem;
		color: #bdbdbd;
		font-size: 1.5rem;
		font-weight: 400;
	}

	@media (max-width: 768px) {
		gap: 1rem;
		padding-bottom: 1.5rem;
		h1 {
			font-size: 2.5rem;
			font-weight: 400;
		}

		p {
			font-size: 1rem;
			line-height: 1.5rem;
		}
	}
`;
