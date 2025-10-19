import React, { useState } from 'react';
import FileUploadForm from './FileUploadForm';
import SummaryReport from './SummaryReport';
import MetricsTable from './MetricsTable';
import ChartDisplay from './ChartDisplay';
import { uploadDataset } from '../api/analysisApi';

const Dashboard = () => {
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileUpload = async (file) => {
    setIsLoading(true);
    setError(null);
    setResults(null);

    try {
      const data = await uploadDataset(file);
      setResults(data);
    } catch (err) {
      setError(err.message || "An unknown error occurred during analysis.");
    } finally {
      setIsLoading(false);
    }
  };

  console.log('Import Check', {
    FileUploadForm,
    SummaryReport,
    MetricsTable,
    ChartDisplay
  });

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>🤖 Data Insights Specialist</h1>
      <p style={{ textAlign: 'center', color: '#666' }}>
        Upload a CSV or Excel file to generate automated insights, statistics, and visualizations.
      </p>

      <FileUploadForm onFileUpload={handleFileUpload} />

      {isLoading && (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <p>Processing data and generating AI insights... Please wait. ⏳</p>
        </div>
      )}

      {error && (
        <div style={{ color: 'red', textAlign: 'center', padding: '10px', border: '1px solid red', borderRadius: '4px' }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      {results && (
        <div style={{ marginTop: '40px' }}>
          <h2>✅ Analysis Results</h2>

          <SummaryReport summary={results.summary_report} />

          <MetricsTable metrics={results.statistical_metrics} />

          <ChartDisplay visualizations={results.visualizations} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
