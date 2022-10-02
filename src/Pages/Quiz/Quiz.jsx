import { CircularProgress } from "@mui/material";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import Question from "../../components/Question/Question";
import "./Quiz.css";

const Quiz = ({ name, questions, score, setScore, setQuestions, response }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [currQues, questions]);

  console.log(questions);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <div className="quiz">
      <span className="subtitle">Welcome, {name}</span>
      {questions && (
        <>
          <div className="quizInfo">
            <span>Category: {questions[currQues].category}</span>
            <span>Score : {score}</span>
          </div>

          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      )}
      {response && !questions && (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
      {!response && (
        <div style={{ margin: "10px", textAlign: "center" }}>
          <h1 style={{ color: "orangered" }}>No Questions Found!</h1>
          <h2>Please try with other Category or Difficulty Level</h2>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ alignSelf: "center", marginTop: 20 }}
            href="/"
          >
            Go to homepage
          </Button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
