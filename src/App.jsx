import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import QuestionInnerPage from "./components/QuestionInnerPage";
import Questions from "./components/Questions";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Questions />} />
          <Route path="/question/:id" element={<QuestionInnerPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
