import { Box, Typography } from '@mui/material';
import React from 'react';
interface propsInterface {
	image: string;
	technology: string;
	description: string;
}
export default function Cards({
	image,
	technology,
	description,
}: propsInterface) {
	return (
		<>
			<Box width={'50%'}>
				<img src={image} alt={technology} height={'50px'} />
				<Box width={'100%'}>
					<Typography gutterBottom variant='h5' sx={{ fontWeight: 700 }}>
						{technology}
					</Typography>
					<Typography variant='body2' sx={{ color: 'text.secondary' }}>
						{description}
					</Typography>
				</Box>
			</Box>
		</>
	);
}
