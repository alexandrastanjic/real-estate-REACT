
import { Route, Switch } from 'react-router-dom';
import AllPropertiesPage from './pages/AllProperties';
import FavoritesPage from './pages/Favorites';
import './App.css';
import HomePage from './pages/HomePage';
import Layout from './components/layout/Layout';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/properties' exact>
            <AllPropertiesPage />
          </Route>
          <Route path='/favorites'>
            <FavoritesPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
