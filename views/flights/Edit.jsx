import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout';

function Edit(props) {
    return ( 
        <DefaultLayout>
            <h1>Edit Post</h1>
            <div className='buttons' style={{ flexDirection: 'column' }}>
                <form action={`/flights/${props.flight._id}?_method=PUT`} method="POST">
                <label htmlFor="al">AirLine:</label><br />
                <input type="text" id="al" name="airline" defaultValue={props.flight.airline}/><br /><br />

                <label htmlFor="fn">Flight N:</label><br />
                <input type="number" id="fn" name="flightNo" min="10" max="9999" defaultValue={props.flight.flightNo}/><br /><br />

                <label htmlFor="dt">Departs:</label><br />
                <input type = "datetime-local" name="departs" id="dt" defaultValue={props.flight.departs} /><br /><br />

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