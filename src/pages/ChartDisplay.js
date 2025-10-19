import React from 'react';

const ChartDisplay = ({ visualizations }) => {
  if (!visualizations || Object.keys(visualizations).length === 0)
    return <p>No visualizations generated.</p>;

  return (
    <div style={{ marginTop: '30px' }}>
      <h3>📈 Data Visualizations</h3>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center'
        }}
      >
        {Object.entries(visualizations).map(([colName, base64Image]) => (
          <div
            key={colName}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              borderRadius: '8px',
              textAlign: 'center'
            }}
          >
            <h4 style={{ marginBottom: '10px' }}>{colName} Distribution</h4>
            <img
              src={`data:image/png;base64,${base64Image}`}
              alt={`Visualization for ${colName}`}
              style={{ maxWidth: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChartDisplay;
