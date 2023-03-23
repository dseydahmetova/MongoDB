import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout'

function Index(props) {
    return (
        <DefaultLayout>
            <h1>ALL Flights</h1>
            <div id="flights" >
                <table className="flight-table">
                    <tr >
                        <th>Airline</th>
                        <th>Airport</th>
                        <th>Flight №</th>
                        <th>Departs</th>
                        <th>Details</th>
                    </tr>
                    {props.flights.map((flight, index) =>
                        <div key={index}>
                            {flight.departs < Date.now() ?
                                <tr className='redText'>
                                    <td>{flight.airline}</td>
                                    <td>{flight.airport}</td>
                                    <td>{flight.flightNo}</td>
                                    <td>{flight.departs.toISOString().slice(0, 16).replace('T', ' ')}</td>
                                    <td><a href={`/flights/${flight._id}`}>details..</a></td>
                                </tr>
                                :
                                <tr>
                                    <td>{flight.airline}</td>
                                    <td>{flight.airport}</td>
                                    <td>{flight.flightNo}</td>
                                    <td>{flight.departs.toISOString().slice(0, 16).replace('T', ' ')}</td>
                                    <td><a href={`/flights/${flight._id}`}>details..</a></td>
                                </tr>
                            }

                        </div>
                    )}
                </table>
                <form action="/flights/new" className="flex-box">
                    <button>NEW FLIGHT</button>
                </form>
            </div>
        </DefaultLayout>
    )
}

export default Index