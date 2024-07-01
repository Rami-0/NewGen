'use client';
import { useState, useEffect } from 'react';
import { Div, Word, Span, AbsoluteContainer } from './styles';
import { motion } from 'framer-motion';

type AnimationProps = {
  rest: {
    y: number;
  };
  hover: {
    y: number;
    transition: {
      duration: number;
      ease: number[];
      type: string;
    };
    color: string;
  };
};

const titleAnimation = {
  rest: {
    transition: {
      staggerChildren: 0.005,
    },
  },
  hover: {
    transition: {
      staggerChildren: 0.005,
    },
  },
};

const letterAnimation = {
  rest: {
    y: 0,
  },
  hover: {
    y: -25,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: 'tween',
    },
    color: 'var(--emerald)',
  },
};

const letterAnimationTwo = {
  rest: {
    y: 25,
  },
  hover: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: 'tween',
    },
    color: 'var(--emerald)',
  },
};

const AnimatedHeading = ({ word1, word2 }: { word1: string, word2: string }) => {
  const [currentWord, setCurrentWord] = useState(word1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord(prev => (prev === word1 ? word2 : word1));
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, [word1, word2]);

  return (
    <Div>
      <AnimatedWord
        title={currentWord}
        animations={letterAnimation}
      />
      <AbsoluteContainer>
        <AnimatedWord
          title={currentWord === word1 ? word2 : word1}
          animations={letterAnimationTwo}
        />
      </AbsoluteContainer>
    </Div>
  );
};

export default AnimatedHeading;

const AnimatedWord = ({
  title,
  animations,
}: {
  title: string;
  animations: AnimationProps;
}) => (
  <Word
    variants={titleAnimation}
    initial="rest"
    animate="hover"
  >
    {title.split('').map((char, i) =>
      char === ' ' ? (
        <Span key={i}>&nbsp;</Span>
      ) : (
        <Span variants={animations} key={i}>
          {char}
        </Span>
      )
    )}
  </Word>
);
