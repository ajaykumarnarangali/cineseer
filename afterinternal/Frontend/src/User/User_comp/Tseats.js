import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Seating() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const rows = 10;
  const cols = 10;
  const selectedCount = selectedSeats.length;
  const ticketPrice = 10;
  const totalPrice = selectedCount * ticketPrice;

  const handleSeatClick = (row, col) => {
    const seat = `${String.fromCharCode(65 + row)}${col + 1}`;
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleBookTickets = () => {
    // Handle booking tickets here
    alert(`Booked ${selectedCount} tickets: ${selectedSeats.join(', ')}\nTotal Price: $${totalPrice}`);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f2f2f2' }}>
      <div style={{ padding: '20px' }}>
        <h1 style={{ textAlign: 'center' }}>Seating Chart</h1>
        <div>
          {Array.from({ length: rows }, (_, row) => (
            <div key={row} style={{ display: 'flex' }}>
              <div style={{ width: '20px', marginRight: '5px' }}>{String.fromCharCode(65 + row)}</div>
              {Array.from({ length: cols }, (_, col) => (
                <div
                  key={`${row}-${col}`}
                  style={{
                    width: '30px',
                    height: '30px',
                    margin: '5px',
                    backgroundColor: selectedSeats.includes(`${String.fromCharCode(65 + row)}${col + 1}`) ? 'orange' : 'white',
                    cursor: 'pointer',
                    border: '1px solid orange',
                    borderRadius: '5px',
                    marginRight: col === 4 ? '10px' : '0px',
                  }}
                  onClick={() => handleSeatClick(row, col)}
                />
              ))}
            </div>
          ))}
        </div>
        {selectedCount > 0 && (
          <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: 'white', padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <p style={{ marginRight: '10px' }}>{selectedCount} seat{selectedCount > 1 ? 's' : ''} selected: {selectedSeats.join(', ')}</p>
            <button onClick={handleBookTickets}>Pay Rs.{totalPrice}</button>
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <div style={{ width: '180px', height: '15px', margin: '5px', backgroundColor: 'grey' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <div style={{ width: '30px', height: '30px', margin: '5px', backgroundColor: 'white', border: '1px solid orange', borderRadius: '5px' }} />available
          <div style={{ width: '30px', height: '30px', margin: '5px', backgroundColor: 'orange', border: '1px solid orange', borderRadius: '5px' }} />selected
          <div style={{ width: '30px', height: '30px', margin: '5px', backgroundColor: 'grey', borderRadius: '5px' }} />sold
        </div>
      </div>
    </div>
  );
}

export default Seating;
