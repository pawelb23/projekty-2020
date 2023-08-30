//odwołując się do katalogu z beczką (index.js ---> barrel) można pisać krótsze importy
import { home, rooms, treatments, bookings } from '../views';

export const routes = [

    { name: 'Home', path: '/', component: home, data: {}, },

    { name: 'Rooms', path: '/rooms', component: rooms, data: {}, },

    { name: 'Treatments', path: '/treatments', component: treatments, data: {}, },

    { name: 'Bookings', path: '/bookings', component: bookings, data: {}, },

];