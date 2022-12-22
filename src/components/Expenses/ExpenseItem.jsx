import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { useState } from 'react';

const ExpenseItem = (props) => {
	const [title, setTitle] = useState(props.title);

	const clickhandler = () => {
		setTitle('Updated');
	};

	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h3>{title}</h3>
				<div className="expense-item__price">${props.amount}</div>
			</div>
			<button onClick={clickhandler}>Change Title</button>
		</Card>
	);
};

export default ExpenseItem;
