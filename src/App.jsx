import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import FileUpload from './components/FileUpload';
import MCQ from './components/MCQ';
import './App.css'

const App= ()=> {
  const [mcqs, setMcqs] = useState([]);

  const handleFileUpload = (data) => {    // for handling file upload
    const workbook = XLSX.read(data, { type: 'array' });
    const sheetName = workbook.SheetNames[0]; 
    const worksheet = workbook.Sheets[sheetName];
    const jsonData = XLSX.utils.sheet_to_json(worksheet);  //used for converting xlsx sheet to json data

    const formattedMCQs = jsonData.map((item) => ({   // for formatting mcqs
      question: item.Question,
      options: [item.Option1, item.Option2, item.Option3, item.Option4],
      correct: item.CorrectAnswer,
    }));

    setMcqs(formattedMCQs); // for updating the state
  };

  return (
    <div className="app">
      <h1>MCQ App</h1>
      <FileUpload onFileUpload={handleFileUpload} />
      {mcqs.length > 0 && <MCQ mcqs={mcqs} />}
    </div>
  );
};

export default App;
