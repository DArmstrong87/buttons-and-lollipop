import { BookingForm } from "./BookingForm.js"
import { getBookings } from "./dataAccess.js"

const bookings = getBookings()

export const ButtonsAndLollipop = () => {
    return `<h1>Buttons and Lollipop Entertainment</h1>
    <section class="booking__form">
        <h2>Book your event with us today!</h2>
        ${BookingForm()}
    </section>

    <section class="bookings">
        <h2>Booked events will go here</h2>
        ${getBookings()}
    </section>
    `
}