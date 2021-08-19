import { ButtonsAndLollipop } from "./Buttons-and-Lollipop.js";
import { fetchPerformers, fetchRequests, getBookings } from "./dataAccess.js";

const bookings = getBookings()

export const mainContainer = document.querySelector("#mainContainer")

const renderAll = () => {
    fetchRequests()
        .then(fetchPerformers)
        .then(
            () => {
                mainContainer.innerHTML = ButtonsAndLollipop()
            }
        )
}

renderAll()

document.addEventListener("stateChanged",
    change => {
        renderAll()
        console.log("State changed")
    }
)