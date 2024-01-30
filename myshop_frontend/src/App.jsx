import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import RouterCustom from './router';

function App() {

  return (
    <BrowserRouter>
      <RouterCustom />
    </BrowserRouter>
  );
}

export default App
