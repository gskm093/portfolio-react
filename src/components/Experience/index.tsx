import React from 'react';
import Box from '@mui/material/Box';
import { Divider, Typography } from '@mui/material';

export default function Experience() {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				px: 15,
				pt: 10,
			}}
		>
			<Box>
				<Typography variant='h3' color='primary' sx={{ fontWeight: 700 }}>
					Smartters Software
				</Typography>
				<Typography variant='subtitle1'>FULL STACK developer</Typography>
				<Typography variant='subtitle1'>2022 - Present</Typography>
			</Box>
			<Divider
				orientation='vertical'
				flexItem
				sx={{
					bgcolor: '#0DB75F', // Match the color of text and icons
					// width: 1,
					// height: 2,
				}}
			/>
			<Box>
				<Typography variant='h3' color='primary' sx={{ fontWeight: 700 }}>
					Pragma Apps
				</Typography>
				<Typography variant='subtitle1'>FULL STACK developer</Typography>
				<Typography variant='subtitle1'>2020 - 2021</Typography>
			</Box>
			<Divider
				orientation='vertical'
				flexItem
				sx={{
					bgcolor: '#0DB75F',
				}}
			/>
			<Box>
				<Typography variant='subtitle1'>Total</Typography>
				<Typography variant='h3' color='primary' sx={{ fontWeight: 700 }}>
					3+ Years
				</Typography>
				<Typography variant='subtitle1'>of Experience</Typography>
			</Box>
		</Box>
	);
}
