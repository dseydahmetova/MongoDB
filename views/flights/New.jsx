import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout';

function New(props) {
    return (
        <DefaultLayout>
            <h1>New Flight</h1>
            <form action="/flights" method="POST">
                <label htmlFor="al">AirLine:</label>
                {/* <input type="text" id="al" name="airline" /><br /><br /> */}

                <select name="airline" id="al">
                    <option defaultValue="American" selected>American</option>
                    <option defaultValue="Southwest">Southwest</option>
                    <option defaultValue="United" >United</option>
                </select>
                <br /><br />

                <select name="airport" id="ap">
                    <option defaultValue="AUS">AUS</option>
                    <option defaultValue="DAL">DAL</option>
                    <option defaultValue="LAX" >LAX</option>
                    <option defaultValue="SAN">SAN</option>
                    <option defaultValue="SEA" >SEA</option>
                </select>
                <br /><br />

                <label htmlFor="fn">Flight N:</label>
                <input type="number" id="fn" name="flightNo" min="10" max="9999" /><br /><br />

                <label htmlFor="dt">Departs:</label>
                <input type="datetime-local" name="departs" id="dt" defaultValue={props.departsDate} /><br /><br />

                <button>Submit</button>
            </form>
        </DefaultLayout>
    );
}

export default New;