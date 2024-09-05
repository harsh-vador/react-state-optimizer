/* eslint-disable react/prop-types */

// Basic components without optimization
import  { useState } from 'react';

const StockWidget = ({ data }) => {
  console.log('StockWidget re-rendered');
  return <div>Stock Price: {data.price}</div>;
};

const WeatherWidget = ({ data }) => {
  console.log('WeatherWidget re-rendered');
  return <div>Weather: {data.temperature}°C</div>;
};

const NewsWidget = ({ data }) => {
  console.log('NewsWidget re-rendered');
  return <div>News: {data.headline}</div>;
};

const Dashboard = () => {
  const [stockData, setStockData] = useState({ price: 100 });
  const [weatherData, setWeatherData] = useState({ temperature: 25 });
  const [newsData, setNewsData] = useState({ headline: "Breaking News!" });

  const updateStockPrice = () => setStockData({ price: stockData.price + 10 });
  const updateWeather = () => setWeatherData({ temperature: weatherData.temperature + 1 });
  const updateNews = () => setNewsData({ headline: "Updated News!" });

  return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '90vh', justifyContent: 'space-between' }}>
      <div>
        <h1>Dashboard</h1>
        <div style={{ display: 'flex', columnGap: '10px', marginBottom: '10px' }}>
          <button onClick={updateStockPrice}>Update Stock Price</button>
          <button onClick={updateWeather}>Update Weather</button>
          <button onClick={updateNews}>Update News</button>
        </div>
        <StockWidget data={stockData} />
        <WeatherWidget data={weatherData} />
        <NewsWidget data={newsData} />
      </div>
      <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <h2>Designed & developed by:</h2>
        <h4>Harsh Vador</h4>
      </div>
    </div>
 );
};

export default Dashboard;



// Optimized components with useOptimizedState hook

// import React from 'react';
// import { useOptimizedState } from './useOptimizedState';
// import { StockWidget, WeatherWidget, NewsWidget } from './Widgets'; // Assuming you saved StockWidget, WeatherWidget, and NewsWidget in 'Widgets.js'

// const Dashboard = () => {
//   const [stockData, setStockData] = useOptimizedState({ price: 100 });
//   const [weatherData, setWeatherData] = useOptimizedState({ temperature: 25 });
//   const [newsData, setNewsData] = useOptimizedState({ headline: "Breaking News!" });

//   // Example of updating state
//   const updateStockPrice = () => setStockData({ price: stockData.price + 10 });
//   const updateWeather = () => setWeatherData({ temperature: weatherData.temperature + 1 });
//   const updateNews = () => setNewsData({ headline: "Updated News!" });

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', minHeight: '90vh', justifyContent: 'space-between' }}>
//       <div>
//         <h1>Dashboard</h1>
//         <div style={{ display: 'flex', columnGap: '10px', marginBottom: '10px' }}>
//           <button onClick={updateStockPrice}>Update Stock Price</button>
//           <button onClick={updateWeather}>Update Weather</button>
//           <button onClick={updateNews}>Update News</button>
//         </div>
//         <StockWidget data={stockData} />
//         <WeatherWidget data={weatherData} />
//         <NewsWidget data={newsData} />
//       </div>
//       <div style={{ textAlign: 'center', marginBottom: '10px' }}>
//         <h2>Designed & developed by:</h2>
//         <h4>Harsh Vador</h4>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


