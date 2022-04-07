import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const html = ( <div className="App">
    <header className="App-header">
        <p className="App-paragraph-title">Today is: </p>
        <Day/>
        <Weekend/>
    </header>
</div>);

function Weekend() {
    const now = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[now.getDay()]

    if (day === 'Sunday' || day === 'Saturday') {
        return <p className='App-paragraph'>It's a weekend</p>
    } else {
        return <p className='App-paragraph'>It's not a weekend jet</p>
    }
}

function Day() {
    const now = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = days[now.getDay()]
    return <p className='App-paragraph'>{day}</p>
}

ReactDOM.render(
    html,
    document.getElementById('root')
);

reportWebVitals();
