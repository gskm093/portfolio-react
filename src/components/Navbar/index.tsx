import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Avatar, Button, List, ListItem, Typography } from '@mui/material';
import myImage from '../../assets/images/myimage.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
	const buttons = [
		{ name: 'About', path: '/' },
		{ name: 'Skills', path: '/skills' },
		{ name: 'Portfolio', path: '/projects' },
		{ name: 'Testimonial', path: '/testimonials' },
	];
	const [selectedIndex, setSelectedIndex] = useState(0);
	const handleClick = (index: number) => {
		setSelectedIndex(index);
	};
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				px: 15,
				pt: 2,
			}}
		>
			<Box sx={{ display: 'flex', gap: 2 }}>
				<Avatar
					alt='Profile Picture'
					src={myImage}
					sx={{ border: '2px solid #0DB75F', borderRadius: '50%' }}
				/>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Typography
						color='primary'
						sx={{ fontSize: '1.5rem', color: 'primary', fontWeight: 700 }}
					>
						SURYAKANT MALLA
					</Typography>
				</Box>
			</Box>
			<Box>
				<List sx={{ display: 'flex' }}>
					{buttons.map((each, index) => (
						<ListItem key={each.name}>
							<Button
								variant={index === selectedIndex ? 'contained' : 'text'}
								onClick={() => handleClick(index)}
								sx={{
									color: index === selectedIndex ? 'white' : '#0DB75F',
									backgroundColor:
										index === selectedIndex ? 'primary.main' : 'transparent',
									'&:hover': {
										backgroundColor:
											index === selectedIndex ? 'primary.dark' : 'transparent',
									},
								}}
							>
								<Link
									to={each.path}
									style={{ textDecoration: 'none', color: 'inherit' }}
								>
									<Typography
										variant='body1'
										sx={{
											textTransform: 'none',
										}}
									>
										{each.name}
									</Typography>
								</Link>
							</Button>
						</ListItem>
					))}
				</List>
			</Box>
			<Box>
				<Button
					sx={{
						border: '2px solid #0DB75F',
						color: 'black',
						borderRadius: '10px',
						p: 3,
						textTransform: 'none',
					}}
				>
					<Typography variant='body1'>Download CV</Typography>
				</Button>
			</Box>
		</Box>
	);
}
