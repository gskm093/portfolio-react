import Board from '../../components/Board';
import Contact from '../../components/Contact';
import Experience from '../../components/Experience';
import Footer from '../../components/Footer';
import Heading from '../../components/Heading';
import Projects from '../../components/projects';

export default function Home() {
	return (
		<>
			<Heading />
			<Experience />
			<Board />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
}
