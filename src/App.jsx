import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
