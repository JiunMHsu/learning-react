import Expenses from './components/Expenses/Expenses';

const App = () => {
	const expenses = [
		{ title: 'Alquiler', amount: 62224.67, date: new Date(2022, 9, 10) },
		{ title: 'Expensas', amount: 5245.3, date: new Date(2022, 9, 15) },
		{ title: 'Gas Natural', amount: 1345.9, date: new Date(2022, 9, 11) },
		{ title: 'Obra Social', amount: 78345.9, date: new Date(2022, 9, 12) },
	];

	return (
		<div className="App">
			<h1>React</h1>
			<Expenses expenses={expenses}/>
		</div>
	);
};

export default App;
