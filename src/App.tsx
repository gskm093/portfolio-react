import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/Scroller';

function App() {
	return (
		<>
			{/* We can specify nav here */}
			<ScrollToTop />
			<Navbar />
			<Outlet />
		</>
	);
}

export default App;
