'use client';
import { Button } from '@mui/material';
import { motion } from 'framer-motion';

const GetStartedButton = ({ padding }: { padding: string }) => {
  const handleClick = () => {
    const formElement = document.getElementById('contact');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{
        scale: 0.8,
        borderRadius: '0%',
      }}
    >
      <Button
        onClick={handleClick}
        variant="contained"
        sx={{
          backgroundColor: '#ccff00',
          color: '#000',
          borderRadius: '30px',
          padding: padding,
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#ccff00',
          },
        }}
      >
        Reach Out
      </Button>
    </motion.div>
  );
};

export default GetStartedButton;
