import React from 'react';
import './home.css';
import { Link, Switch, Route } from 'react-router-dom';
import { Clock } from '../../component/clock';
import About from '../about/about';

export default class Home extends React.Component{
  render(){
    return (
      <div className='home-container'>
        <div className='header'>
          <div className='avator'></div>
          <div className='name'>furo</div>
          <div className='navi'>
            <Link to={'/'} className='navi-item'>首页</Link>
            <Link to={'/about'} className='navi-item'>关于</Link>
          </div>
	        <Clock />
        </div>
        <div className='content'>
          <Switch>
            <Route path={'/about'}>
              <About></About>
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}
