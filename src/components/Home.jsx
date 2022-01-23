import '../styles/Home.css';
import Product from '../components/Product.jsx';

function Home() {
  return <div className="home">
      <div className="home__container">
     
     <img className="home__image" src={require('../img/home.jpg')} alt="homeimg" />
     
     <div className="home__row">
         <Product id="4903850" title="The Lean Startup: How Constant Innovation Creates Radicaly Successful Businesses Paperback" price={29,99} image = {require("../img/bookLeanStartup.jpeg")}  rating={5}/>
         
         <Product id= "12321341" title="Smart watch Amazfit GTR 47mm Reloj Inteligente Deportivo AMOLED de 1.39 GPS GLONASS" price={199,99} image = {require("../img/smartwatch.jpg")}  rating={3} />
     </div>
     <div className="home__row">
         <Product id="49538094" title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" price={239.0} image = {require("../img/mixer.png")}  rating={4} />
         
         <Product id="23445930"  title="Amazon Echo (3rd generation) Smart speaker with Alexa, Charcoal Fabric" price={98,99} image = {require("../img/echoplus.png")}  rating={5}/>
         
         <Product id="3254354345" title="New Apple iPad Pro (12.9-inch, WI-FI, 128GB - Silver 4th Generation)" price={598,99} image = {require("../img/apple.png")}  rating={4} />
     </div>
     <div className="home__row">
         <Product id="90829332" title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440" price={1094,98} image = {require("../img/monitorSamsung.png")}  rating={4}/>
         </div>    
      </div>
  </div>;
}

export default Home;
