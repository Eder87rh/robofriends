import React, { Component } from 'react';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './MainPage.css';

import Header from '../components/Header';


class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    return this.props.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
    })
  }
  
  render() {
    const {  onSearchChange, robots, isPending } = this.props;
    
    return (
      <div className='tc'>
        <Header/>
        <SearchBox searchChange={ onSearchChange }/>
        <Scroll>
          { isPending ? "Loading" : 
            <ErrorBoundry>
              <CardList robots={ this.filterRobots() } />
            </ErrorBoundry>
          }
        </Scroll>
      </div>
    );
  }
}

export default MainPage;