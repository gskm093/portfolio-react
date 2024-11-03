import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import reactImg from '../../assets/icons/react.png';
import mongoDBImg from '../../assets/icons/mongodb.png';
import nodeJsImg from '../../assets/icons/nodejs.png';
import Cards from './Cards';
import { Link } from 'react-router-dom';

export default function Board() {
	const cards = [
		{
			image: reactImg,
			technology: 'REACT',
			description: `it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`,
		},
		{
			image: mongoDBImg,
			technology: 'MongoDB',
			description: `t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`,
		},
		{
			image: nodeJsImg,
			technology: 'Node JS',
			description: `t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`,
		},
	];
	return (
		<Box
			sx={{
				display: 'flex',
				height: '550px',
				alignItems: 'center',
				px: 15,
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
							My Skills
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
						Why should you
						<Typography
							variant='h1'
							color='primary'
							sx={{ fontWeight: 900, display: 'inline', mx: 0.5 }}
						>
							&nbsp;HIRE&nbsp;
						</Typography>
						me?
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
					>
						Hire Me
					</Button>
				</Box>
			</Box>
			<Box
				sx={{ width: '50%', mt: 10, display: 'flex', flexDirection: 'column' }}
			>
				{cards.map((card, index) => {
					return (
						<Box
							key={index}
							display='flex'
							justifyContent={index % 2 === 1 ? 'flex-end' : 'flex-start'}
							width='100%'
							p={2}
						>
							<Cards
								image={card.image}
								description={card.description}
								technology={card.technology}
							/>
						</Box>
					);
				})}
				<Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
					<Link to='/skills'>
						<Button
							variant='contained'
							sx={{ textTransform: 'none', color: '#FFFFFF', p: 2 }}
						>
							Show More
						</Button>
					</Link>
				</Box>
			</Box>
		</Box>
	);
}
