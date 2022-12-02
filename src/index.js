import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Component
function Animals() {
  return (
    <div>
      <h1>Thursday</h1>
        <ul>
          <li>opposums</li>
          <li>coyotes</li>
          <li>skunks</li>          
        </ul>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App />
    
    // <div>
    //   <h1>Thursday</h1>
    //     <ul>
    //       <li>dogs</li>
    //       <li>cats</li>
    //       <li>squirrels</li>          
    //     </ul>
    // </div>

    <Animals />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
