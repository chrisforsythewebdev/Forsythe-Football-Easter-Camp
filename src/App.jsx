import "./styles.css";
import FormFF from "./FormFF.jsx";
import logo from "./images/logo.png";
import promo from "./images/promo.jpeg";

export default function App()  {
  return (
    <>
      <div className="container">
        <div className="logo-container">
          <img className="logo" src={promo} />
        </div>    

       
      <div className="main">
        <div className="wrapper flex-direction">
          <div className="form-wrapper">
            <FormFF />
          </div>

        </div>
      </div>
      
        

       

      </div>
    </>
  )
}