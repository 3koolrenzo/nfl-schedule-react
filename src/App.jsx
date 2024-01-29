import React from 'react';
import EventCard from './components/EventCard';
import './components/EventCard.css';
import './App.css';
import backgroundImage from './components/backgroundimg.jpg'

const App = () => {
  const events = [
    {
      title: 'Rams vs Lions',
      date: 'Sun, Jan 14',
      time: '8 p.m. ET ',
      location: 'Ford Field Staduim',
      link: '',
    },

    {
      title: 'Steelers vs Bills',
      date: 'Mon, Jan 15',
      time: '4:30 p.m. ET',
      location: 'Bills Stadium',
      link: '',
    },

    {
      title: 'Eagles Vs Buccaneers',
      date: 'Mon, Jan 15',
      time: '8:15 p.m. ET',
      location: 'Raymond James Stadium',
      link: '',
    },
    {
      title: 'Texans vs Ravens',
      date: 'Sat, Jan 20',
      time: '4:30 p.m. ET',
      location: 'M&T Bank Stadium',
      link: '',
    },
    {
      title: 'Packers Vs 49ers',
      date: 'Sat, Jan 20',
      time: '8:15 p.m. ET',
      location: 'Levi Stadium',
      link: '',
    },
    {
      title: 'Buccaneers vs Lions',
      date: 'Sun, Jan 21',
      time: '3 p.m. ET',
      location: 'Ford Field',
      link: '',
    },
    {
      title: 'Chiefs vs Bills',
      date: 'Sun, Jan 21',
      time: '6:30 p.m. ET',
      location: 'Bills Stadium',
      link: '',
    },
    {
      title: 'Chiefs vs Ravens',
      date: 'Sun, Jan 28',
      time: '3 p.m. ET',
      location: 'M&T Bank Stadium',
      link: '',
    },
    {
      title: 'Lions vs 49ers',
      date: 'Sun, Jan 28',
      time: '6:30 p.m. ET',
      location: 'Levi Stadium',
      link: '',
    },
    {
      title: '49ers Vs Chiefs',
      date: 'Sun, Feb 11',
      time: '6:30 p.m. ET',
      location: 'Allegiant Stadium',
      link: '',
    },
  ];
  const chunkArray = (array, chunkSize) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const chunkedEvents = chunkArray(events, 3);

  return (
    <div>
      <header>
        <h1>NFL Football Games </h1>
      </header>
      <div className="app">
        <div className="event-list">
          {chunkedEvents.map((row, rowIndex) => (
            <div key={rowIndex} className="event-row">
              {row.map((event, colIndex) => (
                <EventCard key={colIndex} {...event} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
