import React from 'react'
import ReactDOM from 'react-dom/client'
import  {HelloWordApp}  from './helloWordApp'
import { FirstApp } from './FirstApp'
import './styles.css';
import { CounterApp } from './counter'




ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={10}/>
    </React.StrictMode>
    )

    