import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';

class App extends Component {
    constructor(){
        super()
        this.state={
            robots : [],
            searchfield : ''
        }
    }
    componentDidMount(){
        fetch('https://gist.githubusercontent.com/kislay007/0d82aaf3205f31af90e9a666891aa0b4/raw/80c63bb4e122bae340be46288f02b86dd5a9229e/db.json').then(response=>response.json())
        .then(users => this.setState({robots : users}));
    }

    onSearchChange = (event) => {
        this.setState({searchfield : event.target.value})
    }
    render(){
            const {robots, searchfield} = this.state;
            const filterRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if(this.state.robots.length===0)
            {return <h1 className='tc'>Loading...</h1>}
            else{
        return (
            <div className='tc'>
                <h1 className='tc f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filterRobots}/>
                </Scroll>
            </div>
        );
    }
    }
}
    
export default App;

