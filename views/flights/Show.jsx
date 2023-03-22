import React from 'react'
import {useState} from 'react'
import DefaultLayout from '../layouts/DefaultLayout'

function Show(props) {
// props.flight.destinations.sort((a,b) => a.arrival-b.arrival)
const [selectedItems, setSelectedItems] = useState([])
const airports = [ 'AUS', 'DAL', 'LAX', 'SAN', 'SEA' ]

// const handleSelectItem = (e) => {
//     const selectedOptions = [...e.taraget.value]
//     const updatedArr = airports.filter(item => !selectedOptions.includes(item))
// setSelectedItems(updatedArr)
// }

const postedList = ["AUS", "DAL"];

  const filteredList = airports.filter( item  => !postedList.includes(item) );

console.log(selectedItems)

    return (
        <DefaultLayout>
            <div >
                {
                    <>
                        <h2>Details:</h2>
                        <p>
                            <div>
                                <p>Airline: {props.flight.airline}</p>
                                <p>Flight Number: {props.flight.flightNo}</p>
                                <p>Date: {props.flight.departs.toISOString().slice(0, 16).replace('T', ' ')}</p>
                                <p>Airport: {props.flight.airport}</p>

                                {props.flight.destinations.length ?
                                    <>
                                        <h4>Destinations:</h4>
                                        <p>{props.flight.destinations.map((dest, index) =>
                                            <div key={index}>
                                                <div>{dest.airport}</div>
                                                <div>{dest.arrival.toISOString().slice(0, 16).replace('T', ' ')}</div>
                                            </div>
                                        )
                                        }</p>

                                    </>
                                    : ''
                                }
                                <details>
                                    <summary style={{ opacity: '.5' }}>Add destination</summary>
                                    <form action={`/flights/${props.flight._id}`} method="POST">
                                    <label htmlFor="ap">Airport:</label>
                                        {/* <select name="airport" id="ap">
                                            <option defaultValue="AUS">AUS</option>
                                            <option defaultValue="DAL">DAL</option>
                                            <option defaultValue="LAX" >LAX</option>
                                            <option defaultValue="SAN">SAN</option>
                                            <option defaultValue="SEA" >SEA</option>
                                        </select> */}

                                        {/* <select onChange = {handleSelectItem}>
                                            {airports.filter(item => !selectedItems.find(aport => item))
                                            .map(item => <option defaultValue={item}>{item}</option>)}
                                        </select> */}

                                        <select name="airport" id="ap" >
                                        {filteredList.map((item, index) => 
                                                                                
                                                <option key={index} defaultValue={item}>{item}</option>
                                       ) }
                                        </select>

                                        <label htmlFor="ar">Arrival:</label>
                                        <input type="datetime-local" name="arrival" id="ar" /><br /><br />

                                        <button>Add</button>
                                    </form>
                                </details>


                                {/* <p>{flight.destinations}</p> */}
                                {/* <form action={`/flights/${props.flight._id}/comments/${comment._id}?_method=DELETE`} method="POST"><input type="submit" value="X"/></form>*/}
                                {/* <a href={`/flights/${props.flight._id}/destinations/${comment._id}`}>Add destination</a>  */}
                            </div>
                        </p>
                        <br /><br />
                    </>
                }


                {/* <div className="buttons">
                    <form action={`/flights/${props.flight._id}?_method=DELETE`} method="POST">
                        <button>Delete</button>
                    </form>
                    <form action={`/flights/${props.flight._id}/edit`}>
                        <button>Edit</button>
                    </form>
                    <form action='/flights'>
                        <button>Back</button>
                    </form>
                </div> */}
            </div>
        </DefaultLayout>
    )
}

export default Show