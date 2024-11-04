import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';
import { Box, Divider, IconButton, Typography } from '@mui/material';

export default function Footer() {
	return (
		<Box sx={{ px: 15, mt: 5 }}>
			<Divider />
			<Box sx={{ display: 'flex', justifyContent: 'space-evenly', p: 2 }}>
				<Typography>Designed by Suryakant Malla</Typography>
				<Box sx={{ display: 'flex', gap: 2 }}>
					<IconButton
						sx={{ color: '#0DB75F' }}
						href='https://www.facebook.com/msuryak093/'
						target='_blank'
					>
						<Facebook />
					</IconButton>
					<IconButton
						sx={{ color: '#0DB75F' }}
						href='https://www.instagram.com/surrya_._/'
						target='_blank'
					>
						<Instagram />
					</IconButton>
					<IconButton
						sx={{ color: '#0DB75F' }}
						href='https://www.linkedin.com/in/suryakant-malla-b9b70b1a2/'
						target='_blank'
					>
						<LinkedIn />
					</IconButton>
				</Box>
			</Box>
		</Box>
	);
}
