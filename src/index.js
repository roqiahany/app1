// entery point
import ReactDOM from 'react-dom/client';
import { App } from './App';
// import { Home } from './Home';
// import { About } from './About';
// import Gallery from './Gallery';

const root = document.getElementById('root');
root.innerHTML = '<h2>hi</h2>';

const eleRoot = ReactDOM.createRoot(root);
eleRoot.render(<App />);
