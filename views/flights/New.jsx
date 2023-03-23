import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout';

function New(props) {
    return (
        <DefaultLayout>
            <h1>New Flight</h1>
            <form action="/flights" method="POST">
                <label htmlFor="al">AirLine:
                    <select name="airline" id="al">
                        <option defaultValue="American" selected>American</option>
                        <option defaultValue="Southwest">Southwest</option>
                        <option defaultValue="United" >United</option>
                    </select>
                </label>
                <label htmlFor="al">Airport:
                    <select name="airport" id="ap">
                        <option defaultValue="AUS">AUS</option>
                        <option defaultValue="DAL">DAL</option>
                        <option defaultValue="LAX" >LAX</option>
                        <option defaultValue="SAN">SAN</option>
                        <option defaultValue="SEA" >SEA</option>
                    </select>
                </label>

                <label htmlFor="fn">Flight №:
                    <input type="number" id="fn" className = "numInput" name="flightNo" min="10" max="9999" /><br /><br />
                </label>
                <label htmlFor="dt">Departs:
                    <input type="datetime-local" name="departs" id="dt" defaultValue={props.departsDate} /><br /><br />
                </label>
                <button>Submit</button>
            </form>
        </DefaultLayout>
    );
}

export default New;