import { Button, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Categories from "../../Data/Categories";
import "./Home.css";

const Home = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate("/quiz");
    }
  };

  return (
    <div className="content">
      <img
        src={require("../../images/q1.jpg")}
        className="banner"
        alt="quiz app"
      />
      <div className="settings">
        <span style={{ fontSize: 30 }}>Quiz Settings</span>
        <div className="settings__select">
          {error && <ErrorMessage>Please Fill all the fields</ErrorMessage>}
          <TextField
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
            style={{ marginBottom: 30, background: "rgb(235, 218, 102, 0.3)" }}
          />
          <TextField
            select
            label="Select Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30, background: "rgb(235, 218, 102, 0.3)" }}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Select Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30, background: "rgb(235, 218, 152, 0.3)" }}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
