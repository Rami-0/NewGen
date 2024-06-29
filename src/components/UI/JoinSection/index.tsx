'use client';
import { useState } from 'react';
import {
  Wrapper,
  Inner,
  Header,
  Body,
} from './styles';
import { MaskText } from '@/components';
import { useIsMobile } from '../../../../libs/useIsMobile';
import { Props, desktopHeaderPhrase, testimonials } from './constants';

const JoinSection = () => {
  const text = 'Nextgen transforms everyday challenges into opportunities for efficiency. Our cutting-edge products automate mundane tasks, save precious time, and simplify your life. Embrace the art of working smart and unlock your creative potential with solutions designed to elevate your workflow.'
  return (
    <Wrapper>
      <Inner>
        <Header>
          <MaskText phrases={desktopHeaderPhrase} tag="h1" />
        </Header>
        <Body>
          <MaskText phrases={[text]} tag='p'/>
        </Body>
      </Inner>
    </Wrapper>
  );
};

export default JoinSection;
