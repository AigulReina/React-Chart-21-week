import React from 'react';
import { Chart } from 'react-google-charts';

function App() {
  const data = [
    ['Anime', 'Watching'],
    ['The Pharmacist Monologue', 20],
    ['Mashle: Magic and Muscles', 30],
    ['Spy Family', 50],
    ['Jujutsu Kaisen', 80],
  ];

  const options = {
    title: 'My Top Anime This Month',
    pieHole: 0, // Регулировка размера отверстия в центре круга (от 0 до 1)
    pieSliceText: 'percentage', // Отображает проценты на срезах
    slices: {
      0: { color: 'orange' }, // Цвет первого среза
      1: { color: 'green' }, // Цвет второго среза
      2: { color: 'blue' }, // Цвет третьего среза
      3: { color: 'purple' },
    },
  };

  return (
    <div className="App">
      <h1>Google Charts Example</h1>
      <Chart
        chartType="PieChart"
        data={data}
        width="100%"
        height="400px"
        options={options}
      />
    </div>
  );
}

export default App;

