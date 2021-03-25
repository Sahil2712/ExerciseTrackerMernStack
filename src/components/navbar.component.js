import React,{Component} from 'react';
import {Link} from 'react-router-dom';


export default class Navbar extends Component{
  render(){
    return(
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to='/' className="navbar-brand">ExerciseTracker</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li>
              <Link to='/' className="navbar-brand">ExerciseTracker</Link>
              </li>
              <li className="navbar-item">
                <Link to='/create' className="navbar-brand">Create ExerciseTracker</Link>
                </li>
                <li className="navbar-item">
                <Link to='/user' className="navbar-brand">Create User</Link>
                </li>
                </ul>
            </div>
        </nav>
    )
  }
}
