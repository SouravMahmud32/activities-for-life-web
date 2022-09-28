import React from 'react';
import './Question.css';

const Question = () => {
    return (
        <div className='qestion'>
            <h1>Q&A Part</h1>
            <div>
                <h2>1.How does react work?</h2>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary
                inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div>
                <h2>2.What is the difference between props and state in react?</h2>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            </div>
            <div>
                <h2>3.Beside loading data, what is the use have useState?</h2>
                <p>variables in functional components . so basically useState is the ability to encapsulate local state in a functional component.useState can be used to toggle between two values, usually true and false.</p>
            </div>
        </div>
    );
};

export default Question;