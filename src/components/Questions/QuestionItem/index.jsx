import { onSelectQuestion } from "../../../store/questionsSlice.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./index.css";

function QuestionItem({ details, index }) {
  const { question, answeredCnt, answeredByAvatars } = details;
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onClickQuestion = () => {
    dispatch(onSelectQuestion(details));
    navigate("./question/" + index);
  };

  return (
    <li className="col-12" onClick={onClickQuestion}>
      <div className="question-item">
        <div className="img-container">
          <img
            src="images/interaction-img.png"
            alt="interaction image"
            className="interaction-img"
          />
        </div>
        <div className="question-container">
          <h1 className="question">{question}</h1>
          <div className="responses-container">
            <p className="response">
              <span>{answeredCnt} of your friends</span> answered this question
            </p>
            <div className="avatars-container">
              {answeredByAvatars.map((imgLink, index) => (
                <img
                  key={index}
                  src={imgLink}
                  className="response-avatar"
                  alt="avatar"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default QuestionItem;
