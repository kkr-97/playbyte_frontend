import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./index.css";

function QuestionInnerPage() {
  const [myAnsInput, setMyAnswerInput] = useState("");
  const [my_answers, setMyAnswers] = useState([]);

  const navigate = useNavigate();
  const { isAuthenticated, username } = useSelector((state) => state.user);
  const { selectedQuestion } = useSelector((state) => state.questions);

  const { question, friends_answers } = selectedQuestion;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { replace: true });
    }
  }, []);

  const FriendAns = ({ details }) => {
    const { avatar, name, answers } = details;
    return (
      <div className="friend-profile-ans-container">
        <img src={avatar} alt={name} className="profile-img" />
        <div className="friend-ans-par-container">
          {answers.map((answer, index) => (
            <div key={index} className="friend-ans-container">
              {index === 0 && <p className="name m-0 mb-1">{name}</p>}
              <p className="answer mb-0">{answer}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const MyAns = () => {
    return (
      my_answers.length > 0 && (
        <div className="my-profile-ans-container">
          <div className="my-ans-par-container">
            {my_answers.map((answer, index) => (
              <div key={index} className="my-ans-container">
                {index === 0 && <p className="name m-0 mb-1">{username}</p>}
                <p className="answer m-0">{answer}</p>
              </div>
            ))}
          </div>
          <img
            src="/images/my-avatar.png"
            alt={username}
            className="profile-img"
          />
        </div>
      )
    );
  };

  const onChangeMyAnswer = (e) => {
    setMyAnswerInput(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (myAnsInput === "") return;
    setMyAnswers((prevState) => [...prevState, myAnsInput]);
    setMyAnswerInput("");
  };

  return (
    isAuthenticated && (
      <div className="container p-0 ">
        <div className="row">
          <div className="col-12 question-detail-page">
            <div className=" control-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-chevron-left"
                viewBox="0 0 16 16"
                onClick={() => navigate(-1, { replace: true })}
              >
                <path
                  fillRule="evenodd"
                  d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                />
              </svg>
              <h1 className="m-0">QUESTIONS</h1>
              <div className="dummy"></div>
            </div>
            <div className="">
              <div className="hero-container">
                <h1 className="detail-question">{question}</h1>
                <img
                  src="/images/interaction-img.png"
                  className="interaction-img"
                  alt="Ask Friends"
                />
              </div>
              <div className="hero-sub-container">
                <p className="view-more m-0">
                  View more questions on this topic
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-plus-lg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                  />
                </svg>
              </div>
            </div>
            <div className="flex-grow-1 overflow-y-auto">
              <div className="answers-container">
                <div className="friends-answers-container">
                  {friends_answers.map((item, index) => (
                    <FriendAns key={index} details={item} />
                  ))}
                </div>
                <div className="my-answers-container">
                  <MyAns />
                </div>
              </div>
            </div>
            <hr />
            <div className="col-12 p-3">
              <form className="form-container" onSubmit={onSubmitForm}>
                <input
                  type="text"
                  value={myAnsInput}
                  onChange={onChangeMyAnswer}
                  className="answer-input"
                  placeholder="Type a message"
                />
                <button
                  type="submit"
                  disabled={myAnsInput.length === 0}
                  className="submit-btn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default QuestionInnerPage;
