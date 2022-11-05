import { BrowserRouter as Router } from 'react-router-dom';
import NavRoutes from './components/navigation/NavRoutes'
import './App.css';
import { CartContextProvider } from './components/elements/context/CartContext';
import { FilterContextProvider } from './components/elements/context/FilterContext';

function App() {
  return (
    <>
    <Router>
      <FilterContextProvider>
        <CartContextProvider>
          <NavRoutes/>
        </CartContextProvider>
      </FilterContextProvider>
    </Router>
    </>
  );
}

export default App;
