import { getBookings } from "./dataAccess.js";

const listBookings = (booking) => {
    return `
    <li>
        ${booking.parentName} booked ${booking.performer} for ${booking.childName} for a special event on ${booking.eventDate}. The address is ${booking.address} and ${booking.numOfAttendees} people will be attending.
    </li>
    `
}

export const Bookings = () => {
    const bookings = getBookings()
    let html = `<ul>`

    const bookingList = bookings.map(listBookings)
    html += bookingList.join("")
    html += `</ul>`
    return html
}