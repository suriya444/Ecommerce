import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import  Router  from './routes';
import'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router/>
    </div>
    </Provider>
  );
}

export default App;
