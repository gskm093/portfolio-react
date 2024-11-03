import { Box, Button, Typography } from '@mui/material';
import Slider from './Slider';
export default function Projects(children: any) {
	return (
		<Box
			sx={{
				display: 'flex',
				height: '550px',
				alignItems: 'center',
				px: 15,
				mt: -10,
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
							Portfolio
						</Typography>
					</Box>
					<Typography
						variant='h2'
						sx={{
							pt: 3,
							fontWeight: 700,
							display: 'flex',
							alignItems: 'center',
						}}
					>
						My Creative Works Latest
						<Typography
							variant='h1'
							color='primary'
							sx={{ fontWeight: 900, display: 'inline', mx: 0.5 }}
						>
							&nbsp;Projects&nbsp;
						</Typography>
					</Typography>

					<Typography variant='subtitle1' sx={{ pt: 3 }}>
						I have selected and mentioned some of my best projects.
					</Typography>
				</Box>
				<Box sx={{ p: 3 }}>
					<Button
						variant='contained'
						sx={{ textTransform: 'none', color: '#FFFF', p: 3 }}
					>
						Show More
					</Button>
				</Box>
			</Box>
			<Box
				sx={{ width: '50%', mt: 10, display: 'flex', flexDirection: 'column' }}
			>
				<Slider />
			</Box>
		</Box>
	);
}
