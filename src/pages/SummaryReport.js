import React from 'react';

const SummaryReport = ({ summary }) => {
  if (!summary) return null;

  return (
    <div
      style={{
        marginTop: '20px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        backgroundColor: '#f9f9f9'
      }}
    >
      <h3>🤖 Automated AI Insights Report</h3>
      <p style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}>{summary}</p>
    </div>
  );
};

export default SummaryReport;
