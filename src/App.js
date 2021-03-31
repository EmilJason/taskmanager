import Theme from "./context/Theme";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Theme>
        <Navbar />
        {/* <Login /> */}
        <Dashboard />
      </Theme>
    </>
  );
}

export default App;
