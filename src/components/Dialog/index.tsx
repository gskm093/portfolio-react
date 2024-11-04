import React, { useState } from 'react';
import {
	TextField,
	Button,
	Snackbar,
	Alert,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
} from '@mui/material';

interface MyDialogInterface {
	state: boolean;
	handleClickOpen: () => void;
}
const MyDialog = ({ state, handleClickOpen }: MyDialogInterface) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const [openSnackbar, setOpenSnackbar] = useState(false);
	const [snackbarMessage, setSnackbarMessage] = useState('');

	const handleChange = (e: any) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e: any) => {
		e.preventDefault();
		// Handle form submission logic here (e.g., sending to backend)
		console.log('Form submitted:', formData);

		// Show success message
		setSnackbarMessage('Your message has been sent successfully!');
		setOpenSnackbar(true);

		// Reset the form fields
		setFormData({ name: '', email: '', subject: '', message: '' });
		handleClickOpen(); // Close dialog after submission
	};

	const handleCloseSnackbar = () => {
		setOpenSnackbar(false);
	};

	return (
		<Dialog open={state} onClose={handleClickOpen} disableScrollLock>
			<DialogTitle>Contact Me</DialogTitle>
			<DialogContent>
				<form onSubmit={handleSubmit}>
					<TextField
						fullWidth
						margin='normal'
						label='Name'
						name='name'
						value={formData.name}
						onChange={handleChange}
						required
					/>
					<TextField
						fullWidth
						margin='normal'
						label='Email'
						name='email'
						type='email'
						value={formData.email}
						onChange={handleChange}
						required
					/>
					<TextField
						fullWidth
						margin='normal'
						label='Subject'
						name='subject'
						value={formData.subject}
						onChange={handleChange}
						required
					/>
					<TextField
						fullWidth
						margin='normal'
						label='Message'
						name='message'
						multiline
						rows={4}
						value={formData.message}
						onChange={handleChange}
						required
					/>
				</form>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClickOpen} color='primary'>
					Cancel
				</Button>
				<Button type='submit' color='primary' onClick={handleSubmit}>
					Send Message
				</Button>
			</DialogActions>

			<Snackbar
				open={openSnackbar}
				autoHideDuration={6000}
				onClose={handleCloseSnackbar}
			>
				<Alert onClose={handleCloseSnackbar} severity='success'>
					{snackbarMessage}
				</Alert>
			</Snackbar>
		</Dialog>
	);
};

export default MyDialog;
