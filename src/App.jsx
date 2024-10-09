import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Editor from "./components/Editor";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Editor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
