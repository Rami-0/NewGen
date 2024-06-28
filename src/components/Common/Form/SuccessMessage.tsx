import React from 'react';
import { motion } from 'framer-motion';

const successMessageVariants = {
	hidden: { opacity: 0, y: -50, scale: 0.8 },
	visible: { opacity: 1, y: 0, scale: 1 },
};

const SuccessMessage = () => (
	<motion.div
		id='contact'
		initial='hidden'
		animate='visible'
		variants={successMessageVariants}
		transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring', stiffness: 100 }}
		style={{
			padding: '20px',
			backgroundColor: 'var(--emerald)',
			color: 'var(--Background)',
			borderRadius: '8px',
			textAlign: 'center',
			fontSize: '1.2rem',
			marginTop: '20px',
			boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
			userSelect: 'none',
		}}>
		Thank you! We&apos;ll reach out to you as soon as possible.
	</motion.div>
);

export default SuccessMessage;
