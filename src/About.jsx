import react from "react";
import './App.scss';
import './index.scss'
import {Link} from "react-router-dom";

function About(){
    return (<div>
        <div class="topnav">
      <Link to="/">Home</Link>
      <Link class="active" to="about">About this site</Link>
      <Link to="/contact">Contact</Link>
    </div >

    <h2>Hello and welcome to our page! We’re here to reduce the effort of making multiple calls. 😊</h2>
   <p class="p1"> Our top priority is keeping your privacy safe. This webpage has no backend, so your data is always in safe hands - think Frodo entrusting the One Ring to Gandalf in “The Lord of the Rings.”</p>  
<p class="p1">Here’s a brief explanation of how our site works:</p>

<li class="p1">Enter the data consisting of names and their phone numbers (e.g., “Name1 +911236547896”).</li>
<li class="p1">Press the enter button to see the refined version.</li>
<li class="p1">This webpage will generate a link to call them directly.</li>
<li class="p1">Multiple entries are okay, and the input format can be tabular or a simple string.</li>
<li class="p1">If you want to prioritize a contact, click the “Mark Important” button to highlight it and make it appear at the top of the screen.</li>
<li class="p1"  >To remove a contact from the list, use the “Delete” button.</li></div>
)}
export default About;