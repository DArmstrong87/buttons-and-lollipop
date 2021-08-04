const API = "http://localhost:8088"

export const applicationState = {
    bookings: []
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


export const getBookings = () => {
    return applicationState.bookings.map(booking => ({ ...booking }))
}

export const addBooking = () => {

}