import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

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
        </div>
      </div>
    );
  }
}
