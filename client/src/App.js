import React from 'react';
import MainPage from './components/MainPage';
import { AppProviders } from './Providers';

const App = () => (
	<AppProviders>
		<MainPage />
	</AppProviders>
);

export default App;
