import React, { useState } from 'react';
import './ManageTrainStyles.css';
function createData(trainID, source, destination, status, ETA, speed, currentStation){
  return { trainID, source, destination, status, ETA, speed, currentStation};
};

export function ManageTrains(){
    const [trains, setTrains] = useState([
        createData('T1', 'Alice Johnson', 'alice.j@example.com', 'Delayed', 'Tech Corp', '40kmh','Howrah'),
        createData('T2', 'Bob Williams', 'bob.w@example.com', 'Halted', 'Innovate Ltd.', '400kmh','Howrah'),
        createData('T3', 'Charlie Davis', 'charlie.d@example.com', 'Delayed', 'Creative Inc.', '40kmh', 'Howrah'),
        createData('T4', 'Diana Rodriguez', 'diana.r@example.com', 'On Time', 'Global Solutions', '90kmh', 'Howrah'),
    ]);
    const [expandedRows, setExpandedRows] = useState([]);

    //filtering function
    function filterByDelayed(event){
        const filterStatus = event.target.value;
        // filtering on given status
        const filteredTrains = trains.filter((train) => {
            return train.status === filterStatus;
        });
        
        const rest = trains.filter((train) => {
            return train.status !== filterStatus;
        });
        
        //creating new List
        const newTrainsList = [...filteredTrains , ...rest];
        setTrains(newTrainsList);
    }
    //function toggle row
  const toggleRow = (id) => {
    setExpandedRows((prev) =>
      prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]
    );
  };

  return (
    <div className='container'>
        <h1>Manage Trains</h1>
        <div className='filter-container'>

        <label>Filter:</label>
        <select className='filter-by-status' name='filterByStatus' onChange={(e) => filterByDelayed(e)}>
            <option value="On Time">On TIme</option>
            <option value="Delayed">Delayed</option>
            <option value="Halted">Halted</option>
            <option value="Arrived">Arrived</option>
            <option value="Cancelled">Cancelled</option>
        </select>
        </div>
    <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          <th>Train ID</th>
          <th>Start</th>
          <th>Destination</th>
          <th>Status</th>
          <th>ETA</th>
          <th>More Details</th>
        </tr>
      </thead>
      <tbody>
        {trains.map(train => (
          <React.Fragment key={train.trainID}>
            <tr>
              <td>{train.trainID}</td>
              <td>{train.source}</td>
              <td>{train.destination}</td>
              <td>{train.status}</td>
              <td>{train.ETA}</td>
              <td>
                <button onClick={() => toggleRow(train.trainID)} style={{ cursor: 'pointer' }}>
                  {expandedRows.includes(train.trainID) ? '▼' : '▶'}
                </button>
              </td>
            </tr>
            {expandedRows.includes(train.trainID) && (
              <tr>
                <td>{train.trainID}</td>
                <td colSpan="4" style={{ backgroundColor: '#f9f9f9' }}>
                  Speed: {train.speed}<br/>
                  Current Station: {train.currentStation}
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
    </div>
  );
}
