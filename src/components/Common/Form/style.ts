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

export const textFieldStyles = {
  '& .MuiInput-underline:before': {
    borderBottomColor: '#dcdcdc',
  },
  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
    borderBottomColor: 'var(--emerald)',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'var(--emerald)',
  },
  '& .MuiInputBase-input': {
    color: '#fff',
    backgroundColor: 'var(--background)',
  },
  '& .MuiFormLabel-root': {
    color: '#fff',
  },
  '& .MuiFormLabel-root.Mui-focused': {
    color: 'var(--emerald)',
  },
  '& .MuiInputBase-root.Mui-focused .MuiInputBase-input': {
    backgroundColor: 'var(--background)',
  },
  '& .MuiInputBase-input.MuiFilledInput-input': {
    backgroundColor: 'var(--background)',
  },
};

export const inputLabelProps = {
  sx: {
    color: '#fff',
    '&.Mui-focused': {
      color: 'var(--emerald)',
    },
  },
};

export const buttonStyles = {
  backgroundColor: 'var(--emerald)', // Neon yellow color
  color: '#000', // Black text color
  borderRadius: '30px', // Rounded corners
  padding: '10px 20px', // Padding inside the button
  textTransform: 'none', // Disable uppercase text transformation
  '&:hover': {
    backgroundColor: 'var(--emerald)', // Same color on hover to maintain consistency
  },
};