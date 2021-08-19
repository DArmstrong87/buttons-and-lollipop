const API = "http://localhost:8088"

export const applicationState = {
    bookings: [],
    clowns: []
}

export const fetchRequests = () => {
    return fetch(`${API}/bookings`)
        .then(response => response.json())
        .then(
            (bookings) => {
                // Store the external state in application state
                applicationState.bookings = bookings
            }
        )
}
export const fetchPerformers = () => {
    return fetch(`${API}/performers`)
        .then(response => response.json())
        .then(
            (performer) => {
                // Store the external state in application state
                applicationState.performers = performer
            }
        )
}

export const postRequest = (userBookingRequest) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userBookingRequest)
    }


    return fetch(`${API}/bookings`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            document.dispatchEvent(new CustomEvent("stateChanged"))
        })
}


export const getBookings = () => {
    return applicationState.bookings.map(booking => ({ ...booking }))
}
export const getPerformers = () => {
    return applicationState.performers.map(performer => ({ ...performer }))
}

export const deleteEvent = (id) => {
    return fetch(`${API}/bookings/${id}`, { method: "DELETE" })
        .then(
            () => {
                document.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}