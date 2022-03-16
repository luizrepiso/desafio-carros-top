import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';


import Catalog from 'pages/Catalog';
const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/">
          <Catalog />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
