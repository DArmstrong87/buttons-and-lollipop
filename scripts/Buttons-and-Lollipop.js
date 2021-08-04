import { BookingForm } from "./BookingForm.js"
import { Bookings } from "./Bookings.js"


export const ButtonsAndLollipop = () => {
    return `<h1>Buttons and Lollipop Entertainment</h1>
    <section class="booking__form">
        <h2>Book your event with us today!</h2>
        ${BookingForm()}
    </section>

    <section class="bookings">
        <h2>Upcoming Events</h2>
        ${Bookings()}
    </section>
    `
}