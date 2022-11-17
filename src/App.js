// import logo from "./logo.svg";
import "./App.css";
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'

function App() {
  return (
    // <> ... </>  => javascript fragment.
    // {}  => These curly braces can be used to embedd javascript in html.
    <>
      <Navbar navTitle = "Flipkart" home = "flipHome" aboutText = "flipAbout" hrefVal="https://flipkart.com"/>
      {/* <Navbar navTitle = "Amazon" home = "amHome" aboutText = "amAbout" hrefVal="https://amazon.com"/> */}
      {/* <Navbar /> */}

      <TextForm/>
    </>

  );
}

// function App2(){
//   return (
//     <h1>hello mc</h1>
//   );
// }


export default App;
