import react from "react";
import './App.scss';
import './index.scss'
import {Link} from "react-router-dom";

function Contact(){    return (<div>
        <div class="topnav">
      <Link to="/">Home</Link>
      <Link  to="/about">About this site</Link>
      <Link class="active"to="contact">Contact</Link>
    </div >
    <h2 text-align="center"> This is where the contants would be, IF I HAD ANY!</h2>
    </div>

    )
}

export default Contact;