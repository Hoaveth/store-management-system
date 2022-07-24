import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Auth/Login";
import CheckManagement from "./pages/Check_Management/CheckManagement";
import CreditManagement from "./pages/Credit_Management/CreditManagement";
import Dashboard from "./pages/Dashboard/Dashboard";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <Router>
      <div className="App">
        <div className="app-container">
          {isAuthenticated && <Sidebar />}
          <div className="main-content">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  isAuthenticated ? (
                    <Dashboard />
                  ) : (
                    <Navigate replace to="/sign_in" />
                  )
                }
              ></Route>
              <Route path="/sign_in" element={<Login />} />
              <Route path="/sign_up" element={<SignUp />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/check_management" element={<CheckManagement />} />
              <Route path="/credit_management" element={<CreditManagement />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
