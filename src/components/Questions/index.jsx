import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import QuestionItem from "./QuestionItem";

import "./index.css";

function Questions() {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);
  const { questions } = useSelector((state) => state.questions);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { replace: true });
    }
  }, []);
  return (
    isAuthenticated && (
      <div className="container ">
        <div className="row questions-container">
          <header className="col-12 nav-container border-bottom">
            <h1 className="ques-head">QUESTIONS</h1>
          </header>
          <hr />
          <div className="prev-questions-container container">
            <h6 className="sub-head">
              PREVIOUS QUESTIONS <hr className="hr-line" />
            </h6>
            <ul className="questions-list-container row">
              {questions.map((item, index) => (
                <QuestionItem key={index} details={item} index={index} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  );
}

export default Questions;
