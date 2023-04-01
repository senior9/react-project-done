import React from "react";
import "./Qustion.css";

const Question = () => {
  return (
    <div className="question container">
      <div className="question-section">
        <p className="ques">Q:- Difference between Props Vs State </p>
        <div className="ques-ans">
          <p className="text-left  text-warning">
            Ans:- Difference between Props Vs State
          </p>
          <table>
            <tr>
              <th>Props</th>
              <th>State</th>
            </tr>
            <tr>
              <td>Props are immutable</td>
              <td>States are mutable</td>
            </tr>
            <tr>
              <td>Props can be access in child component</td>
              <td>States can't be accessin child component</td>
            </tr>
            <tr>
              <td>Props make components reusable.</td>
              <td>State cannot make components reusable.</td>
            </tr>
          </table>
        </div>
      </div>
      <hr />
      <div className="question-section">
        <p className="ques">Q:- How useState Works? </p>
        <div className="ques-ans">
          <p className="text-left  text-warning">
            Ans:- useState provides a simple and efficient way to manage component state, allowing for a cleaner and more modular architecture for your React applications.
          </p>
          
        </div>
      </div>
      <div className="question-section">
        <p className="ques">Q:- without Data load  How useEffect Works? </p>
        <div className="ques-ans">
          <p className="text-left  text-warning">
            Ans:- Updating the DOM,Setting up a subscription, allows functional components to use lifecycle methods.
          </p>
          
        </div>
      </div>
      <div className="question-section">
        <p className="ques">Q:- How does React Works? </p>
        <div className="ques-ans">
          <p className="text-left  text-warning">
            Ans:- <br /> 1.React maintain a tree. <br />
            2.HTML is treated as a tree by our browsers. <br />
            3.Using virtual DOM, react creates a copy of DOM . react get difference bet real DOM and virtual DOM. React only apply the changes of virtual DOM to Real DOM. Which is called React Reconciliation. <br />
            4.React recognises that we are just altering the for attributes here. therefore, react only alter the for attributes.

          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Question;
