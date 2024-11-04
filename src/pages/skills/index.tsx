import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Avatar, Box } from '@mui/material';
import proPic from '../../assets/images/myimage.png';
import react from '../../assets/icons/react.png';
import nodejs from '../../assets/icons/nodejs.png';
import javascript from '../../assets/icons/js.png';
import sql from '../../assets/icons/sql.png';
import nextjs from '../../assets/icons/nextjs.png';
import mongodb from '../../assets/icons/mongodb.png';
import materialui from '../../assets/icons/materialui.png';
import html from '../../assets/icons/html.png';
import css from '../../assets/icons/css.png';
import feathers from '../../assets/icons/feathersjs.png';
import git from '../../assets/icons/git.png';
import aws from '../../assets/icons/aws.png';
import SkillsAccordion from '../../components/SkillsAccordion';
import Footer from '../../components/Footer';

export default function Skills() {
	const skills = [
		{
			imageUrl: javascript,
			description:
				'JavaScript is a versatile programming language used for web development.',
			title: 'JavaScript',
		},
		{
			imageUrl: react,
			description:
				'React is a JavaScript library for building user interfaces.',
			title: 'React',
		},
		{
			imageUrl: nodejs,
			description:
				"Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
			title: 'Node JS',
		},
		{
			imageUrl: feathers,
			description:
				'Feathers is a lightweight web framework for creating real-time applications.',
			title: 'Feathers JS',
		},
		{
			imageUrl: sql,
			description:
				'SQL is a standard language for managing and manipulating databases.',
			title: 'SQL',
		},
		{
			imageUrl: mongodb,
			description:
				'MongoDB is a NoSQL database that uses a document-oriented data model.',
			title: 'Mongo DB',
		},
		{
			imageUrl: aws,
			description: 'AWS provides on-demand cloud computing platforms and APIs.',
			title: 'AWS',
		},
		{
			imageUrl: html,
			description:
				'HTML is the standard markup language for documents designed to be displayed in a web browser.',
			title: 'HTML',
		},
		{
			imageUrl: css,
			description:
				'CSS is a style sheet language used for describing the presentation of a document written in HTML.',
			title: 'CSS',
		},
		{
			imageUrl: materialui,
			description:
				'Material UI is a popular React UI framework with pre-styled components.',
			title: 'Material UI',
		},
		{
			imageUrl: nextjs,
			description:
				'Next.js is a React framework for server-rendered applications.',
			title: 'Next JS',
		},
		{
			imageUrl: git,
			description:
				'Git is a distributed version control system for tracking changes in source code.',
			title: 'GIT',
		},
	];

	return (
		<>
			<Box sx={{ px: 15, pt: 10, display: 'flex' }}>
				<Box
					sx={{
						width: '50%',
						display: 'flex',
						justifyContent: 'center',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					{/* Scrolling Skills */}
					<Typography variant='h2' sx={{ fontWeight: 700 }}>
						Professional Skill Set
					</Typography>
					<Typography variant='subtitle1' sx={{ mt: 2 }}>
						&nbsp;&nbsp;&nbsp;&nbsp;I am a skilled MERN Stack Developer with a
						focus on building efficient, interactive, and scalable web
						applications. My expertise in JavaScript, React, and Next.js enables
						me to create responsive, user-friendly interfaces, while my backend
						skills in Node.js and Feathers.js power secure, high-performing
						applications. I bring strong database management abilities in
						MongoDB and SQL, ensuring reliable data handling across
						applications. My experience with OAuth and JWT guarantees secure
						authentication, and I leverage Git for streamlined version control.
						Continuously expanding my skills, I am dedicated to delivering
						innovative, reliable solutions that meet today’s business needs and
						future growth.
					</Typography>

					{/* Scrolling Skill Icons */}
					<Box
						sx={{
							overflow: 'hidden', // Hide overflowing content
							width: '100%', // Full width of the parent container
							position: 'relative',
							pt: 3,
						}}
					>
						<Box
							sx={{
								display: 'flex',
								animation: 'scroll 30s linear infinite',
								'@keyframes scroll': {
									'0%': { transform: 'translateX(-100%)' }, // Start off-screen
									'100%': { transform: 'translateX(100%)' }, // End off-screen
								},
							}}
						>
							{skills.map((skill, index) => (
								<Box
									key={index}
									sx={{
										display: 'flex',
										alignItems: 'center',
										flexDirection: 'column',
										gap: 2,
										mx: 2, // Margin to space icons out
									}}
								>
									<Avatar
										src={skill.imageUrl}
										alt={skill.title}
										sx={{ width: 50, height: 50 }}
									/>
									<Typography variant='caption'>{skill.title}</Typography>
								</Box>
							))}
						</Box>
					</Box>
				</Box>
				<Box sx={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'center',
							width: '50%',
							pt: 5,
						}}
					>
						<Box
							height={'400px'}
							width={'450px'}
							sx={{ backgroundColor: '#0DB75F', mt: 14 }}
						></Box>
						<Box
							sx={{
								height: 400,
								width: 430,
								border: '5px solid black', // Solid black border
								borderRadius: '10px',
								backgroundColor: 'transparent', // Transparent background
								position: 'absolute',
								top: 230,
								right: 292,
							}}
						></Box>
						<Box sx={{ position: 'absolute', top: 100 }}>
							<img src={proPic} alt='profile' height={'500px'} />
						</Box>
					</Box>
				</Box>
			</Box>
			<SkillsAccordion />
			<Footer />
		</>
	);
}
