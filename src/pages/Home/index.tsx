import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import Navbar from 'components/Navbar';
import ButtonIcon from 'components/ButtonIcon';

import './styles.css';

const Home = () => {
  return (
    <>
  <Navbar/>
      <div className="home-container">
        <div className="home-card">
          <div className="home-content-container">            
            <h1>O Carro perfeito para você</h1>       
            <h2>Conheça nossos carros e dê mais um passo na realização do seu sonho</h2>                      
          </div>
          <div className="home-image-container">
            <MainImage />
          </div>
        </div>
        <div className="home-button-container">
          <ButtonIcon/>
          <h6>Comece agora a navegar</h6>
        </div>
      </div>
    </>
  );
};
export default Home;
