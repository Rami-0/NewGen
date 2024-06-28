import { useState, useRef, SyntheticEvent } from 'react';
import { motion, useInView } from 'framer-motion';
import { Wrapper, StyledForm, textFieldStyles, inputLabelProps, buttonStyles } from './style';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert, { AlertColor } from '@mui/material/Alert';
import axios from 'axios';
import Recaptcha from '@/utils/Recaptcha';

const Form = () => {
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		email: '',
		description: '',
	});

	const [message, setMessage] = useState('');
	const [severity, setSeverity] = useState<AlertColor>('success');
	const [open, setOpen] = useState(false);
	const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
	const [submissionCount, setSubmissionCount] = useState(0);

	const handleChange = (e: any) => {
		const { id, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[id]: value,
		}));
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		// If this is not the first submission, require reCAPTCHA validation
		if (submissionCount > 0 && !recaptchaToken) {
			setMessage('Please complete the reCAPTCHA.');
			setSeverity('error');
			setOpen(true);
			return;
		}

		try {
			const response = await axios.post('/api/send-email', {
				...formData,
				recaptchaToken: submissionCount > 0 ? recaptchaToken : null,
			});
			setMessage(response.data.message);
			setSeverity('success');
		} catch (error) {
			setMessage('Failed to send email. Please try again later.');
			setSeverity('error');
		}

		// Increment the submission count and reset reCAPTCHA
		setSubmissionCount(submissionCount + 1);
		setRecaptchaToken(null);
		setOpen(true);
	};

	const handleClose = (event: any, reason: any) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};

	const handleRecaptchaVerify = (token: string | null) => {
		setRecaptchaToken(token);
	};

	const formVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
	};

	const formRef = useRef(null);
	const isInView = useInView(formRef, { margin: '-10%' });

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
					{submissionCount > 0 && <Recaptcha onVerify={handleRecaptchaVerify} />}
				</StyledForm>
			</motion.div>
			<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
				<Alert onClose={(event: SyntheticEvent<Element, Event>, reason?: string) => handleClose(event, reason)} severity={severity as AlertColor} sx={{ top: 0, width: '100%' }}>
					{message}
				</Alert>
			</Snackbar>
		</Wrapper>
	);
};

export default Form;
