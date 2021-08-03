import { database } from "./database.js"

// Getters
export const getParents = () => {
    return database.parents.map(parent => ({...parent}))
}
export const getPerformers = () => {
    return database.performers.map(performer => ({...performer}))
}
export const getBookings = () => {
    return database.bookings.map(booking => ({...booking}))
}
export const getEventBuilder = () => {
    return database.eventBuilder.map(event => ({...event}))
}

// Setters
export const setParent = (id) => {
    return database.eventBuilder.parentId = id
}
export const setParent = (id) => {
    return database.eventBuilder.parentId = id
}
export const setParent = (id) => {
    return database.eventBuilder.parentId = id
}
export const setParent = (id) => {
    return database.eventBuilder.parentId = id
}
export const setParent = (id) => {
    return database.eventBuilder.parentId = id
}
export const setPerformer = (id) => {
    return database.eventBuilder.performerId = id
}


export const addBooking = () => {

}