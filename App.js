import React from 'react'
import Navlink from './Navlink';
import Home from './Home';

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router Tutorial</h1>
        <ul role="nav">
          <li><Navlink to="/" onlyActiveOnIndex={true}>Home</Navlink></li>
          <li><Navlink to="/about">About</Navlink></li>
          <li><Navlink to="/repos">Repos</Navlink></li>
        </ul>
        {this.props.children || <Home/>}
      </div>
    )
  }
})

// кривой рог, новая 2 отд Зинченко Антон 0675693320
