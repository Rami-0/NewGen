'use client';

export const buttonStyles = {
  backgroundColor: 'var(--emerald)', // Neon yellow color
  color: 'var(--Background)', // Black text color
  borderRadius: '30px', // Rounded corners
  padding: '10px 30px', // Padding inside the button
  // textTransform: 'none', // Disable uppercase text transformation
  fontSize: '1.1rem', // Text size
  fontWeight: '500', // Text weight
  '&:hover': {
    backgroundColor: 'var(--emerald)', // Same color on hover to maintain consistency
  },
};
