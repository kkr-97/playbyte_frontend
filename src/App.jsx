import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import QuestionsInnerPage from "./components/QuestionInnerPage";
import Questions from "./components/Questions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Questions />} />
        <Route path="/questions/:id" element={<QuestionsInnerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
