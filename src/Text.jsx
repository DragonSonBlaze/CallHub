import react from "react";
import './App.scss';
import './index.scss'
import {Link} from "react-router-dom";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
function Text(){
    return (<div>
    <div class="topnav">
  {/* <a class="active" href="home">Home</a> */}
  <Link class="active"to="/">Home</Link>

  <Link to="about">About this site</Link>
  <Link to="contact">Contact</Link>
</div >
<div >
    <h1 id="inner">Welcome to CallHub!</h1>
    <p class="text-style">  CallHub: The website that lets you call all your friends and family with just one click. It’s like the Avengers assembling, but without the superpowers. And if you’re wondering if we’re as good as we say we are, just ask the cast of Ocean’s Eleven. They used us to plan their heist. 😎</p>
    <p class="text-style">  This website reduces the effort for calling a large number of people by putting them in one place and enabling click call!</p><br></br>  
    </div>
 </div>)
}

export default Text;