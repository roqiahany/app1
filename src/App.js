// main component of your app
import { Component } from 'react';
import { Home } from './Home';
import Gallery from './Gallery';
import { About } from './About';

export class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Gallery />
        <About />
      </div>
    );
  }
}
class Admin {}
