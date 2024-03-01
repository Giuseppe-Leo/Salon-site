import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import BookScreen from "./screens/BookScreen";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/book" element={<BookScreen />} />
      </Routes>
    </div>
  );
}

export default App;
