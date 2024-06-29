'use client';
import { motion } from 'framer-motion';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
    margin: 8.5rem 0;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 0;
  max-width: 1440px;
  width: 90%;

  h2 {
    color: var(--link-color);
    font-size: 1.25rem;
    font-weight: 500;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1rem;
      font-weight: 500;
    }
  }
`;

export const ImageContainer = styled.div`
  max-width: 85rem;
  margin: 0 auto;
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 0.75rem;

  img {
    object-fit: cover;
    border-radius: 0.75rem;
  }

  @media (max-width: 768px) {
    border-radius: 0.5rem;

    img {
      height: 23.75rem;
    }
  }
`;

export const ParallaxImages = styled.div`
  position: relative;
  max-width: 53.7rem;
  margin: 3rem auto 0;
`;

export const Div = styled(motion.div)`
  position: relative;
  height: 35rem;
  overflow: hidden;

  @media (max-width: 599px) {
    height: 23.75rem;
    
     img {
      object-fit: cover;
     }
  }
`;
