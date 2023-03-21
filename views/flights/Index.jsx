import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout'

function Index(props) {
    return (
        <DefaultLayout>
            <h1>Index View</h1>
            <div id="flights">

                {props.flights.map((flight, index) =>
                    <div key={index}>
                        <a href={`/flights/${flight._id}`}>
                            {flight.departs < Date.now() ?
                                <p className='redText'>Airline:{' '} {flight.airline} {' - '}
                                    Flight Number: {flight.flightNo}{' - '}
                                    Departs: {flight.departs.toISOString().slice(0, 16).replace('T', ' ')}
                                </p>
                                :
                                <p>Airline:{' '} {flight.airline} {' - '}
                                    Flight Number: {flight.flightNo}{' - '}
                                    Departs: {flight.departs.toISOString().slice(0, 16).replace('T', ' ')}
                                </p>
                            }
                        </a>
                    </div>
                )}


                <form action="/flights/new">
                    <button>NEW FLIGHT</button>
                </form>
            </div>
        </DefaultLayout>
    )
}

export default Index