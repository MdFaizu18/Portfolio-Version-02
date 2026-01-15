import { ThemeProvider } from "./contexts/ThemeContext";
import Portfolio from "./components/Portfolio";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}

export default App;
