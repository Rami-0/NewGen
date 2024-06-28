import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

type RecaptchaProps = {
	onVerify: (token: string | null) => void;
};

const Recaptcha: React.FC<RecaptchaProps> = ({ onVerify }) => {
	const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY; // Use NEXT_PUBLIC prefix
	if (!RECAPTCHA_SITE_KEY) {
		console.error('RECAPTCHA_SITE_KEY is not defined');
		return <div>Loading reCAPTCHA...</div>; // Return a consistent element
	}
	return <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={onVerify} />;
};

export default Recaptcha;
