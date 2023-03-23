import React from 'react'
import { useState } from 'react'
import DefaultLayout from '../layouts/DefaultLayout'

function Show(props) {
    props.flight.destinations.sort((a,b) => a.arrival-b.arrival)
    const [selectedItems, setItem] = useState('')
    const airports = ['AUS', 'DAL', 'LAX', 'SAN', 'SEA']

    // function handleSelectItem(e) {
    // const selectedOptions = [...e.taraget.value]
    // console.log("this is hhh" + e.trget.defaultValue)
    // const updatedArr = [...selectedItems, e.target.defaultValue]
    // const updatedArr = e.target.value
    // console.log(updatedArr)
    // setSelectedItems(updatedArr)
    // }


    const handleChange = (e) => {
        console.log("Fruit Selected!!");
    }


    const postedList = ["AUS", "DAL"];

    const filteredList = airports.filter(item => !selectedItems.includes(item));

    console.log("this is " + selectedItems)

    return (
        <DefaultLayout>
            <div >
                {
                    <>
                        <h1>Details:</h1>
                        <div className="group-btn">
                            <form action={`/flights/${props.flight._id}?_method=DELETE`} method="POST">
                                <button>Delete</button>
                            </form>
                            <form action={`/flights/${props.flight._id}/edit`}>
                                <button>Edit</button>
                            </form>
                            <form action='/flights'>
                                <button>Back</button>
                            </form>
                        </div>
                        <div id="flight-detail">
                            <table className="flight-table">
                                <tr >
                                    <th>Airline</th>
                                    <th>Airport</th>
                                    <th>Flight №</th>
                                    <th>Departs</th>
                                    <th>Details</th>
                                </tr>
                                <tr className='redText'>
                                    <td>{props.flight.airline}</td>
                                    <td>{props.flight.airport}</td>
                                    <td>{props.flight.flightNo}</td>
                                    <td>{props.flight.departs.toISOString().slice(0, 16).replace('T', ' ')}</td>
                                    <td>{props.flight.airport}</td>
                                </tr>
                            </table>
                            {props.flight.destinations.length ?
                                <>
                                    <h3>Destinations:</h3>
                                    <table className="dest-table">
                                        <tr >
                                            <th>Airport</th>
                                            <th>Arrival</th>
                                            <th>Edit/Delete</th>
                                        </tr>
                                        {props.flight.destinations.map((dest, index) =>
                                            <tr key={index}>
                                                <td>{dest.airport}</td>
                                                <td>{dest.arrival.toISOString().slice(0, 16).replace('T', ' ')}</td>
                                                <td className='group-btn'>
                                                <a href={`/flights/${props.flight._id}/dest/${dest._id}`}> <button>Edit</button> </a>
                                              
                                               <form className = 'dest-form' action={`/flights/${props.flight._id}/dest/${dest._id}?_method=DELETE`} method="POST">
                                               <button>Delete</button>
                                               </form>
                                              
                                                </td>
                                            </tr>
                                        )}
                                    </table>
                                </>
                                : ''
                            }


                            <details>
                                <summary style={{ opacity: '.7' }}>Add destination</summary>
                                <form action={`/flights/${props.flight._id}`} method="POST">
                                    <label htmlFor="ap">Airport:
                                        {/* <select name="airport" id="ap" onChange={handleChange}>
                                            <option value="AUS">AUS</option>
                                            <option value="DAL">DAL</option>
                                            <option value="LAX" >LAX</option>
                                            <option value="SAN">SAN</option>
                                            <option value="SEA" >SEA</option>
                                        </select> */}

                                        <select id="ap" name="airport">
                                            <option className="dropdown-item" value="AUS">AUS</option>
                                            <option value="SAN">SAN</option>
                                            <option value="SEA"> SEA</option>
                                        </select>
                                    </label>

                                    {/* <select onChange = {handleSelectItem}>
                                            {airports.filter(item => !selectedItems.find(aport => item))
                                            .map(item => <option defaultValue={item}>{item}</option>)}
                                        </select> */}

                                    {/* <select name="airport" id="ap" onChange = {handleSelectItem}>
                                        
                                        {filteredList.map((item, index) => 
                                                                                
                                                <option key={index} value={item}>{item}</option>
                                       ) }
                                        </select> */}

                                    <label htmlFor="ar">Arrival:
                                        <input type="datetime-local" name="arrival" id="ar" min={props.flight.departs.toISOString().slice(0, 16).replace('T', ' ')} defaultValue={props.flight.departs.toISOString().slice(0, 16).replace('T', ' ')} /><br /><br />
                                    </label>
                                    <button>Add</button>
                                </form>
                            </details>

                        </div>

                        <br /><br />
                    </>
                }
            </div>
        </DefaultLayout>
    )
}

export default Show