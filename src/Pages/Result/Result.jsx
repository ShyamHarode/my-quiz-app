import * as React from "react";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Result.css";

const Result = ({ name, score }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name, navigate]);

  return (
    <div className="result">
      <h1>Hey! {name}</h1>
      <h2>Your Final Score : {score}</h2>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
      <img src={require("../../images/trophy.jpg")} alt="img" />
    </div>
  );
};

export default Result;
