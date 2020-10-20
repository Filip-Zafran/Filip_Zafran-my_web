import React from 'react';
import './App.css';
import NameCard from './components/NameCard';
import Sidebar from './components/Sidebar';
import Projects from '../src/components/Projects';
import PastExp from '../src/components/PastExp';

function App() {
	return (
		<div>
			<NameCard> </NameCard>
			<Sidebar> </Sidebar>
			<div className="right-sidebar">
				<Projects />
				<PastExp />
			</div>
		</div>
	);
}

export default App;
