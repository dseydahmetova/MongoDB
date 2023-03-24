import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout';

function Edit(props) {
    return (
        <DefaultLayout>
            <h1>Edit Flight Destination</h1>
            <div style={{ flexDirection: 'column' }}>
                <form action={`/flights/${props.flightId}/dest/${props.destination._id}?_method=PUT`} method="POST">

                    <label htmlFor="ap">Airport:
                        <select defaultValue={props.destination.airport} name="airport" id="ap" >
                            {props.airports.map((item, index) =>
                                <option key={index} value={item}>{item}</option>
                            )}
                        </select>
                    </label>
                    <label htmlFor="ar">Arrival:
                        <input defaultValue={props.destination.arrival.toISOString().slice(0, 16).replace('T', ' ')} type="datetime-local" name="arrival" id="ar" /><br /><br />
                    </label>
                    <button>Submit</button>
                </form>

                <form action={`/flights/${props.flightId}`}>
                    <button>Back</button>
                </form>
            </div>
        </DefaultLayout>
    );
}

export default Edit;