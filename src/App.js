import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import Navbar from './components/layout/Navbar';
import Users from './components/layout/users/Users';
import Search from './components/layout/users/Search';



class App extends Component {
   state = {
     users: [],
     loading: false
    }
    
      
  //  async componentDidMount() {
  //   this.setState({ loading: true })
  //   const res = await axios.get(`https://www.superheroapi.com/api.php/284285416511313/search/batman`)
    
  //   this.setState({ users: res.data,  loading: false})
  //  }


  //  Search Hero
   searchUsers = async text => {
    this.setState({ loading: true })
    const res = await axios.get(`https://www.superheroapi.com/api.php/284285416511313/search/${this.state.text}`)
    
    this.setState({ users: res.data,  loading: false})
   };


  render() {
    return ( 
      <div className="App">
        <Navbar />
        <div className='container'>
          <Search searchUsers={this.searchUsers}/>
        <Users loading={this.state.loading} users={this.state.users}/>
        </div> 
      </div>
    );
  }
}

export default App;

