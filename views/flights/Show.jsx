import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout'

function Show(props) {

    return (
            <DefaultLayout>
                <div >
                    <h2>{props.flight.airline}</h2>

                    {/* {
                        props.flight.comments.length ?
                        <>
                            <div>Comments:</div>
                            <p>{props.flight.comments.map((comment, i) => 
                                <div key={i} className="comm">
                                    <div>{comment.user}</div>
                                    <div>{comment.body}</div>
                                    <form action={`/flights/${props.flight._id}/comments/${comment._id}?_method=DELETE`} method="POST"><input type="submit" value="X"/></form>
                                    <a href={`/flights/${props.flight._id}/comments/${comment._id}`}>+</a>
                                </div>
                            )}</p>
                            <br/><br/>
                        </>
                        : ''
                    } */}
                    {/* <details>
                        <summary style={{ opacity: '.5' }}>Leave a comment:</summary>
                        <form action={`/posts/${props.post._id}/comments`} method="POST">
                            <textarea name="body" id="lc" cols="1" rows="1" />
                            <button>Comment</button>
                        </form>
                    </details> */}
                    
                    <div className="buttons">
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
                </div>
            </DefaultLayout>
    )
}

export default Show