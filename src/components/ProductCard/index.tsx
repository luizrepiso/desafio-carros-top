import { ReactComponent as CarCatalogo } from 'assets/images/car-catalogo.svg';
import ButtonProduct from './ButtonProduct';

import './styles.css';

const ProductCard = () => {
  return (
    <div>
      <div className="product-card">
        <div className="card-top-container">
          <CarCatalogo />
        </div>
        <div className="card-bottom-container">
          <h1>Audi Supra TT</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, nisi
          </p>
        </div>
        <div className="card-buttom-container">
          <ButtonProduct />
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
