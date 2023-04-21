
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';

function App() {
  return (
  <>
<Navbar title="TextAnalyzer" a1="Home" a2="About" /> 
<div className="container my-5">
<TextForms heading="Enter The Text To Analyze"/>
<About/>
</div>
  </>
)};

export default App;
