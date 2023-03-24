import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout';

function Edit(props) {
    return ( 
        <DefaultLayout>
            <h1>Edit Flight</h1>
            <div>
                <form action={`/flights/${props.flight._id}?_method=PUT`} method="POST">
                <label htmlFor="al">AirLine:
                    <select name="airline" id="al" defaultValue={props.flight.airline}>
                        <option defaultValue="American">American</option>
                        <option defaultValue="Southwest">Southwest</option>
                        <option defaultValue="United" >United</option>
                    </select>
                </label>
                <label htmlFor="al">Airport:
                    <select name="airport" id="ap" defaultValue={props.flight.airport}>
                        <option defaultValue="AUS">AUS</option>
                        <option defaultValue="DAL">DAL</option>
                        <option defaultValue="LAX" >LAX</option>
                        <option defaultValue="SAN">SAN</option>
                        <option defaultValue="SEA" >SEA</option>
                    </select>
                </label>
                <label htmlFor="fn">Flight №:
                    <input defaultValue = {props.flight.flightNo} type="number" id="fn" className = "numInput" name="flightNo" min="10" max="9999" /><br /><br />
                </label>
                <label htmlFor="dt">Departs:
                    <input type="datetime-local" name="departs" id="dt" defaultValue={props.flight.departs.toISOString().slice(0, 16)} /><br /><br />
                </label>
                    <button>Submit</button>
                </form>
                <form action={`/flights/${props.flight._id}`}>
                    <button>Back</button>
                </form>
            </div>
        </DefaultLayout>
    );
}

export default Edit;