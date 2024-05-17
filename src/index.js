import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StarRating from './StarRating';

const Test = () => {
  const [movieRating, setMovieRating] = useState(0);

  return(
    <div>
      <StarRating maxRating={5} color='blue' onSetRating={setMovieRating} />
      <span>The rating is {movieRating} star</span>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={3} color='orange' message={['Bad', 'Average', 'Azaming']}/>
    <StarRating />
    <StarRating maxRating={10} color='green' size={32}/>
    <StarRating maxRating={20} color='red' size={24} defaultRating={14}/>
    <Test /> */}
  </React.StrictMode>
);

