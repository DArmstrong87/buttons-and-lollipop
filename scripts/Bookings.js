import { getBookings, deleteEvent } from "./dataAccess.js";

document.addEventListener("click",
    click => {
        if (click.target.id.startsWith('booking')) {
            const [, bookingId] = click.target.id.split('--')
            deleteEvent(parseInt(bookingId))
        }
    }
)

const listBookings = (booking) => {
    return `
    <li>
        ${booking.parentName} booked ${booking.performer} for ${booking.childName} for a special event on ${booking.eventDate}. The address is ${booking.address} and ${booking.numOfAttendees} people will be attending.
        <button class="delete-event" id="booking--${booking.id}">Delete event</button>
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