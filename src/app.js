import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import { View } from 'react-native';
import LibraryList from './components/LibraryList';

const App = () => {
	return (
		<Provider store={createStore(reducers)}>
			<View>
				<Header headerText="Finn is Too Cool" />
				<LibraryList />
			</View>
		</Provider>
	);
};

export default App;

