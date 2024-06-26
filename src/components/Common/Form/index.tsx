import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Wrapper, StyledForm } from './style';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Form = () => {
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		email: '',
		description: '',
	});

	const handleChange = (e) => {
		const { id, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[id]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form Submitted:', formData);
		// You can add your form submission logic here
	};

	const formVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	const formRef = useRef(null);
	const isInView = useInView(formRef, { margin: '-10%' });

	const textFieldStyles = {
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

	const inputLabelProps = {
		sx: {
			color: '#fff',
			'&.Mui-focused': {
				color: 'var(--emerald)',
			},
		},
	};

	const buttonStyles = {
		backgroundColor: '#ccff00', // Neon yellow color
		color: '#000', // Black text color
		borderRadius: '30px', // Rounded corners
		padding: '10px 20px', // Padding inside the button
		textTransform: 'none', // Disable uppercase text transformation
		'&:hover': {
			backgroundColor: '#ccff00', // Same color on hover to maintain consistency
		},
	};

	return (
		<Wrapper>
			<motion.div ref={formRef} initial='hidden' animate={isInView ? 'visible' : 'hidden'} variants={formVariants} transition={{ duration: 0.5 }}>
				<StyledForm id='contact' onSubmit={handleSubmit}>
					<motion.div variants={formVariants} transition={{ duration: 0.5, delay: 0.1 }}>
						<TextField id='name' label='Name' variant='standard' fullWidth value={formData.name} onChange={handleChange} required sx={textFieldStyles} InputLabelProps={inputLabelProps} />
					</motion.div>
					<motion.div variants={formVariants} transition={{ duration: 0.5, delay: 0.2 }}>
						<TextField
							id='phone'
							label='Phone'
							variant='standard'
							fullWidth
							value={formData.phone}
							onChange={handleChange}
							required
							inputProps={{ pattern: '\\d{10}' }} // Simple pattern for 10-digit phone number
							sx={textFieldStyles}
							InputLabelProps={inputLabelProps}
						/>
					</motion.div>
					<motion.div variants={formVariants} transition={{ duration: 0.5, delay: 0.3 }}>
						<TextField id='email' label='Email' variant='standard' fullWidth value={formData.email} onChange={handleChange} required type='email' sx={textFieldStyles} InputLabelProps={inputLabelProps} />
					</motion.div>
					<motion.div variants={formVariants} transition={{ duration: 0.5, delay: 0.4 }}>
						<TextField id='description' label='Description' variant='standard' multiline rows={4} fullWidth value={formData.description} onChange={handleChange} required sx={textFieldStyles} InputLabelProps={inputLabelProps} />
					</motion.div>
					<motion.div
						style={{ width: 'fit-content' }}
						variants={formVariants}
						whileHover={{ scale: 1.2 }}
						whileTap={{
							scale: 0.8,
							borderRadius: '0%',
						}}>
						<Button type='submit' variant='contained' sx={buttonStyles}>
							Reach Out
						</Button>
					</motion.div>
				</StyledForm>
			</motion.div>
		</Wrapper>
	);
};
export default Form;
