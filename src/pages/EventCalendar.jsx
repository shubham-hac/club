import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function EventCalendar() {
  const [date, setDate] = useState(new Date());
  
  const events = {
    '2024-03-15': 'Community Clean-up Drive',
    '2024-03-20': 'Leadership Workshop',
    '2024-03-25': 'Fundraising Gala',
    '2024-04-01': 'Monthly Meeting',
  };

  const tileContent = ({ date, view }) => {
    const dateStr = date.toISOString().split('T')[0];
    if (view === 'month' && events[dateStr]) {
      return <div className="text-xs bg-blue-200 p-1 rounded">{events[dateStr]}</div>;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Event Calendar</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="w-full max-w-md mx-auto lg:max-w-none">
          <Calendar
            onChange={setDate}
            value={date}
            tileContent={tileContent}
            className="w-full bg-white rounded-lg shadow-lg p-4"
          />
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            {Object.entries(events).map(([date, event]) => (
              <div key={date} className="bg-white p-4 rounded-lg shadow">
                <div className="font-bold">{new Date(date).toLocaleDateString()}</div>
                <div>{event}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventCalendar;