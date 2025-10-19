import React from 'react';

const tableStyles = {
  width: '100%',
  borderCollapse: 'collapse',
  margin: '20px 0'
};

const thStyles = {
  border: '1px solid #ddd',
  padding: '8px',
  backgroundColor: '#f2f2f2',
  textAlign: 'left'
};

const tdStyles = {
  border: '1px solid #ddd',
  padding: '8px',
  textAlign: 'left'
};

const MetricsTable = ({ metrics }) => {
  if (!metrics || Object.keys(metrics).length === 0) return <h3>No Numerical Data Found</h3>;

  // Assume all columns have the same set of metrics
  const sampleMetrics = Object.values(metrics)[0];
  const metricKeys = Object.keys(sampleMetrics);

  return (
    <div>
      <h3>📊 Statistical Analysis</h3>
      <table style={tableStyles}>
        <thead>
          <tr>
            <th style={thStyles}>Column</th>
            {metricKeys.map((key) => (
              <th key={key} style={thStyles}>
                {key.replace(/_/g, ' ').toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(metrics).map(([columnName, stats]) => (
            <tr key={columnName}>
              <td style={tdStyles}>
                <strong>{columnName}</strong>
              </td>
              {metricKeys.map((key) => (
                <td key={key} style={tdStyles}>
                  {Array.isArray(stats[key])
                    ? stats[key].join(', ')
                    : stats[key] !== null
                    ? stats[key].toFixed(2)
                    : 'N/A'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MetricsTable;
