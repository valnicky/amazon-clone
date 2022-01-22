import '../styles/Home.css';
import Product from '../components/Product.jsx';

function Home() {
  return <div className="home">
      <div className="home__container">
     
     <img className="home__image" src={require('../img/home.jpg')} alt="homeimg" />
     
     <div className="home__row">
         <Product />
         <Product />
     </div>
     <div className="home__row">
         <Product />
         <Product />
         <Product />
     </div>
     <div className="home__row">
         <Product />
         </div>    
      </div>
  </div>;
}

export default Home;
