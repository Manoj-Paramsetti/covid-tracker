import './App.css';
import Cards from './components/cards'
import React, { useState } from "react";
var axios = require("axios").default;

let countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burma","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo (Brazzaville)","Congo (Kinshasa)","Costa Rica","Cote d'Ivoire","Croatia","Cuba","Cyprus","Czechia","Denmark","Diamond Princess","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Holy See","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Korea, South","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","MS Zaandam","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Namibia","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Macedonia","Norway","Oman","Pakistan","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan*","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Trinidad and Tobago","Tunisia","Turkey","US","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","West Bank and Gaza","Yemen","Zambia","Zimbabwe"]
var Country = "global" 

function App() {
  var [active, setActive] = useState(0)
  var [recovered, setrecovered] = useState(0)
  var [death, setdeath] = useState(0)
  let option = React.createRef();
  const axiosurl = 'https://covid19.mathdro.id/api';
  const getData = async (country) => {
    let url = axiosurl;
    
      if (country!=='global') {
        url = axiosurl+'/countries/'+country;
      }
    
      try {
        const res = await axios.get(url);
        update_state(res.data)
      } catch (error) {
        console.log(error)
      }
  };  
  
  function update_state(data){              
    setActive(data.confirmed.value)
    setrecovered(data.recovered.value)
    setdeath(data.deaths.value)
  }
  
  getData(Country)

  function update(){
    Country =  option.current.value
    getData(Country)
  }  
  
  return (
    <div className="App">
      <h1 style={{background:"#FCFCFC", color: "#444444", paddingTop: 20, paddingBottom: 20}}>Corona Virus Tracker</h1>
      <img src="https://images.vexels.com/media/users/3/193251/isolated/preview/b23a8130b03eff475be26b2275ebfc19-covid-19-man-character-icon-by-vexels.png" height="200px" alt="Wear corona mask"></img>
      {"\n"}
      <select ref={option} onChange={update} style={{width: "80%", padding: "10px", background: "#EEEEEE", outline:0, border:0, paddingRight: "20px"}}>
        <option key="-1" value="global">Global</option>
        {
        countries.map((country, key) =>
          <option key={key} value={country}> {country} </option>
        )}
      </select>
      <Cards 
      active={active-recovered-death}
      recovered={recovered}
      death={death}
      />
      <section style={{marginTop: "50px"}}>
      </section>
    </div>
  );
}


export default App;
