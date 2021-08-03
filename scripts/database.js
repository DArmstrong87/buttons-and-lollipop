export const database = {
    parents: [
        {
            id: 1,
            name: 'Kelly Gebhart',
            childName: 'Joey Gebhart',
            address: '453 Evergreen Terrace'
        },
        {
            id: 2,
            name: 'Susan Dunbar',
            childName: 'Erica Dunbar',
            address: '521 Treehouse Lane'
        }
    ],
    performers: [
        {
            id: 1,
            name: 'Lollipop the Clown'
        },
        {
            id: 2,
            name: 'Buttons the Clown'
        }
    ],
    bookings: [
        {
            id: 1,
            parentId: 1,
            parentName: '',
            childName: '',
            address: '',
            numOfAttendees: 12,
            reservationDate: 'date',
            length: 70,
            performerId: 1
        }
    ],
    eventBuilder: {}
}