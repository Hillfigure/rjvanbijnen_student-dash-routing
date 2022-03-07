import './App.css';
import ChartPage from './components/ChartPage';
import Student from './components/Student';
import { 
  BrowserRouter,
  Route,
  Routes
 } from "react-router-dom";

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<ChartPage />} />
          <Route path="/:id" element={<Student />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;