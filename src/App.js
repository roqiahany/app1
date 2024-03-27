// main component of your app
import { Component } from 'react';

import { Card } from './Components/Card/Card';
import { Home } from './Components/Home/Home';

export class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Card />
      </div>
    );
  }
}
class Admin {}
