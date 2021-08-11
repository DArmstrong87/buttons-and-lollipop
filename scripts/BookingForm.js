import { postRequest } from "./dataAccess.js"

document.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "bookEvent") {
        // Get what the user typed into the form fields
        const userParentName = document.querySelector("input[name='parentName']").value
        const userAddress = document.querySelector("input[name='bookingAddress']").value
        const userChildName = document.querySelector("input[name='childName']").value
        const userAttendees = document.querySelector("input[name='attendees']").value
        const userEventLength = document.querySelector("input[name='eventLength']").value
        const userPerformer = document.querySelector("input[name='performer']").value
        const userDate = document.querySelector("input[name='eventDate']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            parentName: userParentName,
            address: userAddress,
            childName: userChildName,
            numOfAttendees: userAttendees,
            length: userEventLength,
            performer: userPerformer,
            eventDate: userDate
        }

        // Send the data to the API for permanent storage
        postRequest(dataToSendToAPI)
    }
})


export const BookingForm = () => {
    let html = `
    <div class="field">
        <label class="label" for="parentName">Name</label>
        <input type="text" name="parentName" class="input" />
    </div>
    <div class="field">
        <label class="label" for="bookingAddress">Address</label>
        <input type="text" name="bookingAddress" class="input" />
    </div>
    <div class="field">
        <label class="label" for="childName">Child's Name</label>
        <input type="text" name="childName" class="input" />
    </div>
    <div class="field">
        <label class="label" for="attendees">Number Attending</label>
        <input type="number" name="attendees" class="input" />
    </div>
    <div class="field">
        <label class="label" for="eventLength">Event Length (minutes)</label>
        <input type="number" name="eventLength" class="input" />
    </div>
    <div class="field">
        <section class="radio-buttons">
        <label class="label" for="performer">Performer</label>
        <input type="radio" name="performer" value="Buttons the Clown"/>Buttons the Clown</input>
        <input type="radio" name="performer" value="Lollipop the Clown"/>Lollipop the Clown</input>
        </section>
    </div>
    <div class="field">
        <label class="label" for="eventDate">Event Date</label>
        <input type="date" name="eventDate" class="input" />
    </div>

    <button class="button" id="bookEvent">Book Event</button>
`

return html
}