import { ReactComponent as CarCatalogo } from 'assets/images/car-catalogo.svg';

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
        <div className="card-button-container">
          <button className="btn btn-primary btn-icon-product">
            <p>Comprar</p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
