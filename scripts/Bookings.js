import { getBookings } from "./dataAccess.js";
const bookings = getBookings()

const listBookings = (booking) => {
    return `
    <li>
        ${booking.parentName} booked ${booking.performer} for ${booking.childName} for a special event on ${booking.date}.
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