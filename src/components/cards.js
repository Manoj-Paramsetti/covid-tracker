import CountUp from 'react-countup';

function cards(props){
    return(
        <section id="cards">
            <section id="card_one">
                <h3 style= {{marginLeft: "20px"}}>Active Cases</h3>
                <h2 style={{color: "#666",marginLeft: "20px"}}><CountUp start={0} end= {parseInt(props.active)} duration={2} separator=" " /></h2>
                <section id ="bottomBorderActive" ></section>
            </section>
            <section id="card_two">
                <h3 style= {{marginLeft: "20px"}}>Recovered</h3>
                <h2 style={{color: "#666", marginLeft: "20px"}}><CountUp start={0} end= {parseInt(props.recovered)} duration={2} separator=" " /></h2>
                <section id ="bottomBorderRecovered" ></section>
            </section>
            <section id="card_three">
                <h3 style= {{marginLeft: "20px"}}>Death</h3>
                <h2 style={{color: "#666", marginLeft: "20px"}}><CountUp start={0} end= {parseInt(props.death)} duration={2} separator=" " /></h2>
                <section id ="bottomBorderDeath" ></section>
            </section>
        </section>
    )
}

export default cards;