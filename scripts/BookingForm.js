
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
        <input type="number" name="childName" class="input" />
    </div>
    <div class="field">
        <label class="label" for="eventLength">Event Length (minutes)</label>
        <input type="number" name="eventLength" class="input" />
    </div>
    <div class="field">
        <label class="label" for="performer">Performer</label>
        <input type="radio" name="buttons"/>Buttons the Clown</input>
        <input type="radio" name="lollipop"/>Lollipop the Clown</input>
    </div>
    <div class="field">
        <label class="label" for="eventDate">Event Date</label>
        <input type="date" name="eventDate" class="input" />
    </div>

    <button class="button" id="bookEvent">Book Event</button>
`

return html
}