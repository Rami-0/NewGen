'use client'
import Link from 'next/link';
import { LinkTo } from './styles';
import { motion } from 'framer-motion';

const GetStartedButton = ({ padding }: { padding: string }) => {
	return (
		<motion.div
			whileHover={{ scale: 1.2 }}
			whileTap={{
				scale: 0.8,
				borderRadius: '0%',
			}}>
			<LinkTo
				style={{
					padding: padding,
				}}
				href='/#contact'>
				Reach Out
			</LinkTo>
		</motion.div>
	);
};

export default GetStartedButton;
