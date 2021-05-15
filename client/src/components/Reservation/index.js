import React, { useState } from 'react';






export function Reservation() {
        const [name, setName] = useState("");

        const handleSubmit = (e) => {
                console.log("button was clicked");
                console.log(e.target.value);
                setName(e.target.value)

        }

        return (
                <div>

                        <h1>{name}</h1>

                        <input
                                onChange={handleSubmit}
                                type="text"
                                placeholder="type something here"
                        />

                        <button>Submit</button>

                </div>
        )
}

// export default Reservation