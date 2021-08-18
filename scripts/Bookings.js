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
    <section class="event-container">
        <ul class="event-details">
            <li>
            ${booking.parentName} booked ${booking.performer} for ${booking.childName}
            </li>
            <li>Event Date: ${booking.eventDate}</li>
            <li>Address: ${booking.address}</li>
            <li>Number of attendees: ${booking.numOfAttendees}</li>
        </ul>
        <select class="performer">
            
        </select>
        <button class="delete-event" id="booking--${booking.id}">Delete Event</button>
    </section>
    `
}

export const Bookings = () => {
    const bookings = getBookings()
    let html = `<ul class="all-events">`

    const bookingList = bookings.map(listBookings)
    html += bookingList.join("")
    html += `</ul>`
    return html
}