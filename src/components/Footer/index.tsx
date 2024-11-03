import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';
import { Box, Divider, IconButton, Typography } from '@mui/material';

export default function Footer() {
	return (
		<Box sx={{px: 15, mt:5}}>
			<Divider />
			<Box sx={{ display: 'flex', justifyContent: 'space-evenly', p: 2 }}>
				<Typography>Designed by Suryakant Malla</Typography>
				<Box sx={{ display: 'flex', gap: 2 }}>
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
