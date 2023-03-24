import React from 'react'

function DefaultLayout(props) {
    return (
        <html>
            <head>
                <link rel="stylesheet" href="/styles.css" />
            </head>
            <body>
                <nav>
                    <ul>
                        <li><a href="/flights">All Flights</a> </li>
                        <li> <a href="/flights/new">Add Flight</a> </li>
                    </ul>
                </nav>
                <div>
                    {props.children}
                </div>


            </body>
        </html>
    );
}

export default DefaultLayout;