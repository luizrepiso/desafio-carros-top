import './styles.css';

const ButtonSearch = () => {
  return (
    <div className= "catalog-search-container">
       <div className="search-container">
        <h1>Digite sua busca</h1>
        </div>       
      <button className="btn btn-primary button-icon">
        <p>Buscar</p>
      </button>
    </div>
  );
};
export default ButtonSearch;
