import React, {useEffect} from 'react';
import '../style/Covid.css';

function Covid() {
    
    function getCovidData () {
        try{
            const res = fetch('https://data.covid19india.org/data.json');
            const actualData = res.json();
            console.log(actualData.statewise[0]);
    } catch (err) {
        console.log(err);
    }

}

    useEffect(() => {
        // getCovidData();
    },[]);

  return (
    <>
        <h1>LIVE</h1>
        <h2>COVID-19 CORONAVIRUS TRACKER</h2>

        <ul>
            <li className="card">
                <div className="card_main">
                    <div className="card_inner">
                        <p className='card_name'><span> OUR </span> COUNTRY </p>
                        <p className='card_total card_small'>INDIA</p>
                    </div>

                </div>

            </li>
        </ul>
    </>
  )
}
export default Covid;
