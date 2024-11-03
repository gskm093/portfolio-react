import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
	return (
		<>
			{/* We can specify nav here */}
			<Navbar />
			<Outlet />
		</>
	);
}

export default App;
