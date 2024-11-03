import { Box, Typography } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import ContactForm from './Form';

export default function Contact() {
	return (
		<Box sx={{ px: 15, pt: 10 }} id='contact-section'>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Box
					sx={{
						border: '1px solid #0DB75F',
						borderRadius: '50%',
						width: '100px',
						display: 'flex',
						justifyContent: 'center',
						p: 1,
					}}
				>
					<Typography
						variant='body1'
						sx={{
							p: 1,
							color: '#0DB75F',
						}}
					>
						Contact
					</Typography>
				</Box>
				{/* <Typography variant='h2' sx={{ pt: 3, fontWeight: 700 }}>
					I have{' '}
					<Typography variant='h1' color='primary' sx={{ fontWeight: 900 }}>
						FULLSTACK DEVELOPMENT
					</Typography>{' '}
					Experience
				</Typography> */}
				<Typography variant='subtitle1' sx={{ pt: 3 }}>
					Feel free to Contact me by submitting the form below and I will get
					back to you as soon as possible
				</Typography>
			</Box>
			<Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
				<Box sx={{ display: 'flex', pt: 3, width: '50%' }}>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							width: '50%',
						}}
					>
						<Box
							sx={{
								display: 'flex',
								pt: 3,
								justifyContent: 'flex-start',
								gap: 2,
							}}
						>
							<Box
								sx={{
									bgcolor: '#0DB75F',
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
									p: 4,
									borderRadius: '5px',
								}}
							>
								<LocalPhoneIcon sx={{ color: '#ffffff' }} />
							</Box>
							<Box>
								<Typography
									variant='body1'
									sx={{ pl: 1, color: '#8f8c8c', fontWeight: 700 }}
								>
									Call Me
								</Typography>
								<Typography variant='body1' sx={{ pl: 1, fontWeight: 700 }}>
									+91 8984474721
								</Typography>
								<Typography variant='body1' sx={{ pl: 1, fontWeight: 700 }}>
									+91 7008631134
								</Typography>
							</Box>
						</Box>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'flex-start',
								pt: 3,
								gap: 2,
							}}
						>
							<Box
								sx={{
									bgcolor: '#0DB75F',
									display: 'flex',
									justifyContent: 'center',
									p: 4,
									borderRadius: '5px',
								}}
							>
								<MailIcon sx={{ color: '#FFFFFF' }} />
							</Box>
							<Box>
								<Typography
									variant='body1'
									sx={{ pl: 1, color: '#8f8c8c', fontWeight: 700 }}
								>
									Email Me
								</Typography>
								<Typography variant='body1' sx={{ pl: 1, fontWeight: 700 }}>
									msuryak093@gmail.com
								</Typography>
							</Box>
						</Box>
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'flex-start',
								pt: 3,
								gap: 2,
							}}
						>
							<Box
								sx={{
									bgcolor: '#0DB75F',
									display: 'flex',
									justifyContent: 'center',
									p: 4,
									borderRadius: '5px',
								}}
							>
								<AddLocationAltIcon sx={{ color: '#FFFFFF' }} />
							</Box>
							<Box>
								<Typography
									variant='body1'
									sx={{ pl: 1, color: '#8f8c8c', fontWeight: 700 }}
								>
									Address
								</Typography>
								<Typography variant='body1' sx={{ pl: 1, fontWeight: 700 }}>
									Kalinga Nagar, Bhubaneswar, Odisha
								</Typography>
							</Box>
						</Box>
					</Box>
					<Box sx={{ width: '50%' }}>
						<ContactForm />
					</Box>
				</Box>
			</Box>
		</Box>
	);
}
