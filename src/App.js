
//isim ile export edilmişse bu şekilde import yapılır
import { Content } from "./Content";
import {Footer} from "./Footer"; 

//export default ile yapılmışsa bu şekilde import yapılır
import Header from "./Header"


import "./style.css"


function App() {
  return (
    <div className="App">

    <Header/>
    <Content/>
    <Footer/>
    

    </div>
  );
}

export default App;
