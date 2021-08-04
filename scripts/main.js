import { ButtonsAndLollipop } from "./Buttons-and-Lollipop.js";
import { fetchRequests, getBookings } from "./dataAccess.js";

const bookings = getBookings()

export const mainContainer = document.querySelector("#mainContainer")

const renderAll = () => {
    fetchRequests().then(
        () => {
            mainContainer.innerHTML = ButtonsAndLollipop()
        }
    )
}

renderAll()