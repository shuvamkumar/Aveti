import { useEffect, useState } from "react";
import "./App.css";
import { newArray, questions } from "./questions";

function App() {
  const [result, setResult] = useState(0);
  const [submitted, setSubmitted] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [counter, setCounter] = useState(1);
  return (
    <>
      <div className="app">
        <h1>Quarter Quiz</h1>
        {counter <= 10 ? (
          <>
            {Object.values(questions).map((item, index) => {
              return (
                <>
                  <div className="question-container">
                    {counter === item.id && (
                      <>
                        <div className="question">{`${index + 1}. ${
                          item.question
                        }`}</div>
                        <div className="options">
                          {item.options.map((option, bigIndex) => {
                            return (
                              <ul key={index} style={{ listStyle: "none" }}>
                                <li className="Option">
                                  <input
                                    type="radio"
                                    name={item.id}
                                    id={item.id}
                                    onClick={() => {
                                      bigIndex === item.correctAnswer &&
                                        setResult(result + 1);
                                    }}
                                  />
                                  {" " + option}
                                </li>
                              </ul>
                            );
                          })}
                        </div>
                      </>
                    )}
                  </div>
                </>
              );
            })}
            <div className={counter !== 1 ? "btn-container" : "btn-exception"}>
              {counter > 1 && (
                <button
                  onClick={() => {
                    setCounter(counter - 1);
                    console.log(result);
                  }}
                  className="btn"
                >
                  Previous
                </button>
              )}
              {counter <= 10 && (
                <button
                  onClick={() => {
                    setCounter(counter + 1);
                    console.log(result);
                    // console.log(answerList);
                  }}
                  className="btn"
                >
                  Next
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="result-container">
            <h1>{`Hey! you have secured ${result}/10`}</h1>
          </div>
        )}
      </div>
      {/* <div className="App">
        {newArray.map((item, bigIndex) => {
          return (
            <>
              <div key={bigIndex}>
                <h3 className="Question">
                  {JSON.parse(item.question).question.content}
                  {console.log(JSON.parse(item.question))}
                </h3>
                {JSON.parse(item.question).question.widgets[
                  "radio 1"
                ].options.choices.map((option, index) => {
                  return (
                    <ul key={index} style={{ listStyle: "none" }}>
                      <li className="Option">
                        <input
                          type="radio"
                          name={JSON.parse(item.question_id)}
                          onClick={() => {
                            let newArray = [...answerList];
                            newArray[bigIndex] = index + 1;
                            setAnswerList(newArray);
                          }}
                        ></input>
                        {`${index + 1}. ${option.content}`}
                      </li>
                    </ul>
                  );
                })}
              </div>
            </>
          );
        })}
        <button
          onClick={() => {
            setSubmitted(1);
          }}
        >
          Submit
        </button>
      </div> */}
      {/* <div className="Login-Container">
        <h3 className="Heading">Aveti Learning</h3>
        <div className="Login-Details-Card">
          <div className="input-container">
            <span>Username</span>
            <input
              name="username"
              type="text"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
                console.log(e.target.value);
              }}
            />
          </div>
          <div className="input-container">
            <span>Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                console.log(e.target.value);
              }}
            />
          </div>
          <button>Login</button>
        </div>
      </div> */}
    </>
  );
}

export default App;
