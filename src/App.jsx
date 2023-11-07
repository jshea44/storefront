import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Categories from './Components/Categories';
import Products from './Components/Products';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <>
      <Header />
      <Provider store={store}>
        <Categories></Categories>
        <Products></Products>
      </Provider>
      <Footer />
    </>
  );
}

export default App;
