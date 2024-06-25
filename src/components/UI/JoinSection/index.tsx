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
  const text = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, mollitia. Esse cumque molestiae voluptate deserunt ea laboriosam accusantium suscipit commodi et optio? Libero quos earum hic quaerat, ullam quibusdam. Voluptatem.'
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
