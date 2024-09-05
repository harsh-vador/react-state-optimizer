/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useRef, useEffect } from 'react';

// Utility to log excessive re-renders
const useRenderLogger = (componentName) => {
  const renderCount = useRef(0);
  useEffect(() => {
    renderCount.current++;
    console.log(`${componentName} has rendered ${renderCount.current} times`);
  });
};

export const StockWidget = React.memo(({ data }) => {
  useRenderLogger('StockWidget');
  return <div>Stock Price: {data.price}</div>;
});

export const WeatherWidget = React.memo(({ data }) => {
  useRenderLogger('WeatherWidget');
  return <div>Weather: {data.temperature}°C</div>;
});

export const NewsWidget = React.memo(({ data }) => {
  useRenderLogger('NewsWidget');
  return <div>News: {data.headline}</div>;
});
