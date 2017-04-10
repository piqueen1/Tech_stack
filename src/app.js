import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import { View } from 'react-native';

const App = () => {
	return (
		<Provider store={createStore(reducers)}>
			<View>
				<Header headerText="Tech Stack"/>
			</View>
		</Provider>
	);
};

export default App;

