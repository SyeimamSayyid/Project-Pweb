import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import LandingPage from "./LandingPage";
import Signup from "./Signup";
import Login from "./Login";
import Loader from "./Loader";
import Dashboard from "./Dashboard";
import Profil from "./Profil";
import FallingStars from "./FallingStars"; // Import komponen FallingStars

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <FallingStars /> {/* Selalu tampilkan efek bintang jatuh */}
        <Routes>
          <Route path="/" element={<LandingPageWithNavigation />} />
          <Route path="/signup" element={<SignupPageWithLoader />} />
          <Route path="/login" element={<LoginPageWithLoader />} />
          <Route path="/loader" element={<Loader />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profil" element={<Profil />} />
        </Routes>
      </div>
    </Router>
  );
};

// Komponen LandingPage dengan navigasi
const LandingPageWithNavigation = () => {
  const navigate = useNavigate();

  const handleNavigateToLogin = () => {
    navigate("/login");
  };

  return <LandingPage onLoginClick={handleNavigateToLogin} />;
};

// Komponen LoginPage dengan Loader
const LoginPageWithLoader = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/loader");
    setTimeout(() => {
      navigate("/dashboard");
    }, 3000); // Navigasi ke dashboard setelah 3 detik
  };

  return <Login onLogin={handleLogin} />;
};

// Komponen SignupPage dengan Loader
const SignupPageWithLoader = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/loader");
    setTimeout(() => {
      navigate("/dashboard");
    }, 3000); // Navigasi ke dashboard setelah 3 detik
  };

  return <Signup onSignup={handleSignup} />;
};

export default App;
