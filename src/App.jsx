import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import MCQ from './components/MCQ';
import Header from './components/Header'
import About from './components/About';
import ContactUs from './components/ContactUs';
import './App.css';
import * as XLSX from 'xlsx';
const App = () => {
  const [mcqs, setMcqs] = useState([]);
  const [fileUploaded, setFileUploaded] = useState(false);

  const handleFileUpload = (data) => {
    const workbook = XLSX.read(data, { type: 'array' });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    setFileUploaded(true);
    const formattedMCQs = jsonData.map((item) => ({
      question: item.Question,
      options: [item.Option1, item.Option2, item.Option3, item.Option4],
      correct: item.CorrectAnswer,
    }));

    setMcqs(formattedMCQs);
  };

  return (
    <div className="app">
      <Header/>
      <h1>MCQ App</h1>
      {!fileUploaded && <FileUpload onFileUpload={handleFileUpload} />}
      {mcqs.length > 0 && <MCQ mcqs={mcqs} />}
      {!fileUploaded && <section id="about">
        <About />
      </section>}
      <section id="contact"><ContactUs/></section>
    </div>
  );
};

export default App;
