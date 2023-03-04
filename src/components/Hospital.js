import React from 'react';
import './css/Doctor.css';


function Hospital() {
  return (
    <div className='box Background-image'>

    <form action="/Pharmacy" method="post">
        <label for="location">Enter Your City:</label>
        <select name="location" id="Specialist">
            <option value="">...</option>
            <option value="MPK">MPK</option>
            <option value="Hydrabad">Hydrabad</option>
            <option value="Karachi">Karachi</option>
        </select>
        <input type="submit" name="submit" value="Enter" />
    </form>
    
    </div>
  )
}

export default Hospital
