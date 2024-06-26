'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 380px;

  .MuiTextField-root {
    width: 100%;
  }

  button {
    align-self: flex-end;
  }
`;
