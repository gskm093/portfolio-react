import {
	Box,
	Button,
	TextareaAutosize,
	TextField,
	Typography,
} from '@mui/material';
import React from 'react';

export default function ContactForm() {
	return (
		<Box
			component='form'
			sx={{
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				gap: 2,
				maxWidth: 600,
				mx: 'auto',
			}}
			noValidate
			autoComplete='off'
		>
			<Typography variant='body1' component='label'>
				Full Name
			</Typography>
			<TextField variant='outlined' fullWidth required />

			<Typography variant='body1' component='label'>
				Email
			</Typography>
			<TextField variant='outlined' fullWidth required type='email' />

			<Typography variant='body1' component='label'>
				Message
			</Typography>
			<TextareaAutosize
				aria-label='message'
				minRows={4}
				placeholder='Type your message here'
				style={{
					width: '100%',
					padding: '16.5px 14px',
					fontSize: '16px',
					borderRadius: '4px',
					borderColor: '#c4c4c4',
					outline: 'none',
				}}
				required
			/>

			<Button
				variant='contained'
				type='submit'
				sx={{ alignSelf: 'center', mt: 2, color: '#FFFFFF' }}
			>
				Submit
			</Button>
		</Box>
	);
}
