import { useState } from 'react'
import './App.css'
import PDFfile from './PDF'
import { PDFDownloadLink } from "@react-pdf/renderer";

const App = () => {
  return (
    <div>
      <PDFDownloadLink document={<PDFfile />}>
        {({ loading }) => (loading ? <button>Loading Document...</button> : <button>Download</button>)}
      </PDFDownloadLink>
    </div>
  );
};

export default App;
