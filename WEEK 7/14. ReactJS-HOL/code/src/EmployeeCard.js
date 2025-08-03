import React, { useContext } from 'react';
import Styles from './EmployeeCard.module.css';
import ThemeContext from './ThemeContext';

function EmployeeCard(props) {
    const theme = useContext(ThemeContext); // 🔑 Get theme from context

    return (
        <div className={Styles.Card}>
            <h3>{props.employee.name}</h3>
            <p>{props.employee.email}</p>
            <p>{props.employee.phone}</p>
            <p>
                <a href="#" className={Styles[theme]}>Edit</a>
                <a href="#" className={Styles[theme]}>Delete</a>
            </p>
        </div>
    );
}

export default EmployeeCard;


