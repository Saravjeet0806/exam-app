import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <h2>About MCQ App</h2>
      <p>
        Welcome to the MCQ App! This application is designed to help you manage and take multiple-choice quizzes with ease.
        You can upload your quiz questions using an Excel file, and the app will handle the rest. Whether you're a student
        preparing for exams or a teacher creating assessments, our app provides a simple and efficient way to work with MCQs.
      </p>
      <p>
        Key Features:
      </p>
      <ul>
        <li>Upload MCQs via Excel file</li>
        <li>Automated formatting of questions and options</li>
        <li>User-friendly interface for taking quizzes</li>
        <li>Immediate feedback on correct answers</li>
      </ul>
      <p>
        Our goal is to make the process of creating and taking quizzes as seamless as possible. We hope you find this app
        useful and enjoyable. If you have any feedback or suggestions, feel free to reach out to us.
      </p>
    </div>
  );
};

export default About;
