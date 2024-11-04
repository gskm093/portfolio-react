import {
	Accordion,
	AccordionSlots,
	Avatar,
	Box,
	Button,
	Stack,
	Typography,
} from '@mui/material';
import React from 'react';
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
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';
import { Gauge } from '@mui/x-charts/Gauge';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MyDialog from '../Dialog';
export default function SkillsAccordion() {
	const skills = [
		{
			imageUrl: javascript,
			description:
				'JavaScript is a versatile programming language used for web development.',
			title: 'JavaScript',
			rate: 8,
		},
		{
			imageUrl: react,
			description:
				'React is a JavaScript library for building user interfaces.',
			title: 'React',
			rate: 8,
		},
		{
			imageUrl: nodejs,
			description:
				"Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
			title: 'Node JS',
			rate: 9,
		},
		{
			imageUrl: feathers,
			description:
				'Feathers is a lightweight web framework for creating real-time applications.',
			title: 'Feathers JS',
			rate: 9,
		},
		{
			imageUrl: sql,
			description:
				'SQL is a standard language for managing and manipulating databases.',
			title: 'SQL',
			rate: 7,
		},
		{
			imageUrl: mongodb,
			description:
				'MongoDB is a NoSQL database that uses a document-oriented data model.',
			title: 'Mongo DB',
			rate: 7,
		},
		{
			imageUrl: aws,
			description: 'AWS provides on-demand cloud computing platforms and APIs.',
			title: 'AWS',
			rate: 7,
		},
		{
			imageUrl: html,
			description:
				'HTML is the standard markup language for documents designed to be displayed in a web browser.',
			title: 'HTML',
			rate: 9,
		},
		{
			imageUrl: css,
			description:
				'CSS is a style sheet language used for describing the presentation of a document written in HTML.',
			title: 'CSS',
			rate: 8,
		},
		{
			imageUrl: materialui,
			description:
				'Material UI is a popular React UI framework with pre-styled components.',
			title: 'Material UI',
			rate: 10,
		},
		{
			imageUrl: nextjs,
			description:
				'Next.js is a React framework for server-rendered applications.',
			title: 'Next JS',
			rate: 7,
		},
		{
			imageUrl: git,
			description:
				'Git is a distributed version control system for tracking changes in source code.',
			title: 'GIT',
			rate: 8,
		},
	];
	const [expanded, setExpanded] = React.useState<number | null>(0);
	const [displayCount, setDisplayCount] = React.useState(5);
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(!open);
	};
	const handleExpansion = (index: number) => {
		if (index === expanded) {
			setExpanded(null);
		} else setExpanded(index);
	};
	const handleShowMore = () => {
		setDisplayCount((prevCount) => Math.min(prevCount + 5, skills.length));
	};
	return (
		<>
			<Box
				sx={{
					px: 15,
					pt: 13,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Box sx={{ width: '50%' }}>
					{skills.slice(0, displayCount).map((skill, index) => (
						<Accordion
							key={index}
							expanded={expanded === index}
							onChange={(e) => handleExpansion(index)}
							slots={{ transition: Fade as AccordionSlots['transition'] }} // Corrected slot usage
							slotProps={{ transition: { timeout: 400 } }}
							sx={[
								expanded === index
									? {
											'& .MuiAccordion-region': { height: 'auto' },
											'& .MuiAccordionDetails-root': { display: 'block' },
									  }
									: {
											'& .MuiAccordion-region': { height: 0 },
											'& .MuiAccordionDetails-root': { display: 'none' },
									  },
							]}
						>
							<AccordionSummary
								expandIcon={<ExpandMoreIcon />}
								aria-controls={`panel${index}-content`}
								id={`panel${index}-header`}
							>
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										gap: 2,
									}}
								>
									<Avatar
										src={skill.imageUrl}
										alt={skill.title}
										sx={{ width: 50, height: 50 }}
									/>
									<Typography>{skill.title}</Typography>
								</Box>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>{skill.description}</Typography>
							</AccordionDetails>
						</Accordion>
					))}
					{/* Show More Button */}
					{displayCount < skills.length && (
						<Button
							variant='contained'
							onClick={handleShowMore}
							sx={{ mt: 2, color: '#FFFFFF' }}
						>
							Show More
						</Button>
					)}
				</Box>
				{expanded !== null ? (
					<Box sx={{ width: '50%' }}>
						<Box
							display={'flex'}
							justifyContent={'center'}
							alignItems={'center'}
						>
							<Box>
								<Avatar
									src={skills[expanded].imageUrl}
									alt={skills[expanded].title}
									sx={{ width: 100, height: 100, mb: 2 }}
								/>
							</Box>
							<Box>
								<ArrowForwardIcon height={100} width={100} />
							</Box>
							<Box>
								<Stack
									direction={{ xs: 'column', md: 'row' }}
									spacing={{ xs: 1, md: 3 }}
								>
									<Gauge
										width={200}
										height={200}
										value={skills[expanded].rate}
										valueMax={10}
									/>
								</Stack>
							</Box>
						</Box>
						<Box
							display={'flex'}
							justifyContent='center'
							alignItems='center'
							width={'100%'}
							flexDirection={'column'}
						>
							<Typography variant='h4' sx={{ fontWeight: 700 }}>
								{skills[expanded].title}
							</Typography>
							<Typography variant='body1'>
								{skills[expanded].description}
							</Typography>
						</Box>
					</Box>
				) : (
					<Box
						sx={{
							width: '50%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							flexDirection: 'column',
						}}
					>
						<Box>
							<ArrowBackIcon height={100} width={100} />
						</Box>
						<Typography variant='h4'>Please select a skill</Typography>
					</Box>
				)}
			</Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
					px: 15,
					gap: 2,
				}}
			>
				<Box
					sx={{
						width: '50%',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
						gap: 2,
					}}
				>
					<Typography variant='h4'>Why Hire Me?</Typography>
					<Typography variant='body1'>
						I bring a proven track record in delivering high-quality, scalable
						web applications with expertise across the full development stack.
						My hands-on experience in backend and frontend technologies ensures
						that I can tackle complex challenges from design to deployment,
						adapting quickly to project needs. I am committed to staying current
						with the latest industry trends, which allows me to build
						innovative, secure, and efficient solutions tailored to business
						goals. With a focus on collaboration and continuous improvement, I
						am dedicated to adding long-term value to any team or project.
					</Typography>
					<Button
						variant='contained'
						onClick={handleClickOpen}
						sx={{ p: 2, color: '#FFFFFF' }}
					>
						Hire Me
					</Button>
				</Box>
			</Box>
			<MyDialog state={open} handleClickOpen={handleClickOpen} />
		</>
	);
}
