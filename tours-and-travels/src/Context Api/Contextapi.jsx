import React, { createContext, useState } from 'react'


export const addTourResponseContext = createContext()
export const editTourResponseContext = createContext()
// export const addReviewResponseContext = createContext()

function Contextapi({ children }) {

    const [addTourResponse, setAddTourResponse] = useState("")
    const [editTourResponse, setEditTourResponse] = useState("")
    // const [addReviewResponse, setAddReviewResponse] = useState("")
    return (
        <>
            <addTourResponseContext.Provider value={{ addTourResponse, setAddTourResponse }}>
                {/* <addReviewResponseContext.Provider value={{addReviewResponse,setAddReviewResponse}}> */}
                    <editTourResponseContext.Provider value={{ editTourResponse, setEditTourResponse }}>
                        {children}
                    </editTourResponseContext.Provider>
                {/* </addReviewResponseContext.Provider> */}
            </addTourResponseContext.Provider>

        </>
    )
}

export default Contextapi