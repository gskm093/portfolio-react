import { Button, IconButton, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import proPic from '../../assets/images/myimage.png';
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';
export default function Heading() {
	const handleScrollToContact = () => {
		const contactSection = document.getElementById('contact-section');
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: 'smooth' });
		}
	};
	return (
		<Box
			sx={{
				display: 'flex',
				height: '600px',
				alignItems: 'center',
				px: 15,
				pt: 10,
			}}
		>
			<Box sx={{ width: '50%' }}>
				<Box sx={{ p: 3 }}>
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
							Welcome
						</Typography>
					</Box>
					<Typography variant='h2' sx={{ pt: 3, fontWeight: 700 }}>
						I have{' '}
						<Typography variant='h1' color='primary' sx={{ fontWeight: 900 }}>
							FULLSTACK DEVELOPMENT
						</Typography>{' '}
						Experience
					</Typography>
					<Typography variant='subtitle1' sx={{ pt: 3 }}>
						I am a MERN stack developer with 3 years of experience, currently
						working as a lead backend developer at Smartters Software on a
						project called Binimise, which focuses on waste management systems
						for municipal corporations
					</Typography>
				</Box>
				<Box sx={{ p: 3 }}>
					<Button
						variant='contained'
						sx={{ textTransform: 'none', color: '#FFFF', p: 3 }}
						onClick={handleScrollToContact}
					>
						Contact Me
					</Button>
					<Button sx={{ textTransform: 'none', mx: 5, p: 3 }}>
						View Portfolio
					</Button>
				</Box>
			</Box>
			<Box
				sx={{ display: 'flex', justifyContent: 'center', width: '50%', pt: 5 }}
			>
				<Box
					height={'400px'}
					width={'450px'}
					sx={{ backgroundColor: '#0DB75F' }}
				></Box>
				<Box
					sx={{
						height: 400,
						width: 450,
						border: '5px solid black', // Solid black border
						borderRadius: '10px',
						backgroundColor: 'transparent', // Transparent background
						position: 'absolute',
						top: 280,
						right: 290,
					}}
				></Box>
				<Box sx={{ position: 'absolute', top: 122 }}>
					<img src={proPic} alt='profile' height={'500px'} />
				</Box>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						gap: 2,
					}}
				>
					<Typography
						variant='body1'
						sx={{
							writingMode: 'vertical-rl',
							// textOrientation: 'upright',
							color: '#0DB75F', // Adjust color if needed
						}}
					>
						Follow me on:
					</Typography>

					<IconButton
						sx={{ color: '#0DB75F' }}
						href='https://facebook.com'
						target='_blank'
					>
						<Facebook />
					</IconButton>
					<IconButton
						sx={{ color: '#0DB75F' }}
						href='https://instagram.com'
						target='_blank'
					>
						<Instagram />
					</IconButton>
					<IconButton
						sx={{ color: '#0DB75F' }}
						href='https://linkedin.com'
						target='_blank'
					>
						<LinkedIn />
					</IconButton>
				</Box>
			</Box>
		</Box>
	);
}
