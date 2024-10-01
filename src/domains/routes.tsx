import { lazy } from 'react';
const Root = lazy(() => import('./root'));
const CreateUserPage = lazy(() => import('./users/create-user.tsx'));
const SignInPage = lazy(() => import('./users/signin-user'));
const Users = lazy(() => import('./users/index.tsx'));
const Passengers = lazy(() => import('./passengers/index.tsx'));
const CreatePassengerPage = lazy(
  () => import('./passengers/create-passenger.tsx'),
);
const UpdatePassengerPage = lazy(
  () => import('./passengers/update-passenger.tsx'),
);

const Flights = lazy(() => import('./flights/index.tsx'));
const FlightDetailsPage = lazy(
  () => import('./flights/flight-details-page.tsx'),
);

const CreateFlightPage = lazy(() => import('./flights/create-flight.tsx'));
const UpdateFlightPage = lazy(() => import('./flights/update-flight.tsx'));
const DuplicateFlightPage = lazy(
  () => import('./flights/duplicate-flight.tsx'),
);
const FlightTickets = lazy(() => import('./flights/flight-tickets.tsx'));
const CreateConnectionPage = lazy(
  () => import('./flights/create-connetion.tsx'),
);

const FlightsForClients = lazy(() => import('./clients/index.tsx'));

const Tickets = lazy(() => import('./tickets/index.tsx'));
const CheckUpTicketPage = lazy(() => import('./clients/check-up-ticket.tsx'));
const CreateTicketPage = lazy(() => import('./tickets/create-ticket.tsx'));
const UpdateTicketPage = lazy(() => import('./tickets/update-ticket.tsx'));
const TicketDetailsPage = lazy(
  () => import('./tickets/show-ticket-details.tsx'),
);

//const Checkins = lazy(() => import('./checkins/index.tsx'));
//const CreateCheckinPage = lazy(() => import('./checkins/create-checkin.tsx'));

const Settings = lazy(() => import('./settings/index.tsx'));
const CreateSettingPage = lazy(() => import('./settings/create-setting.tsx'));
const UpdateSettingPage = lazy(() => import('./settings/update-setting.tsx'));

const ErrorPage = lazy(() => import('./error-page.tsx'));

export const list = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'users/create',
    element: <CreateUserPage />,
  },
  {
    path: '/signin',
    element: <SignInPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'passengers/',
    element: <Passengers />,
  },
  {
    path: 'passengers/create',
    element: <CreatePassengerPage />,
  },
  {
    path: 'passengers/update',
    element: <UpdatePassengerPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'flights/',
    element: <Flights />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'flights/details/',
    element: <FlightDetailsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'flights/create/',
    element: <CreateFlightPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'flights/update/',
    element: <UpdateFlightPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'flights/create-connection/',
    element: <CreateConnectionPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'flights/duplicate/',
    element: <DuplicateFlightPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'flight-tickets/',
    element: <FlightTickets />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'vuelos/',
    element: <FlightsForClients />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'tickets/',
    element: <Tickets />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'mi reserva/',
    element: <CheckUpTicketPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'tickets/create',
    element: <CreateTicketPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'tickets/update',
    element: <UpdateTicketPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'ticket-details/',
    element: <TicketDetailsPage />,
    errorElement: <ErrorPage />,
  },

  {
    path: 'users/',
    element: <Users />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'settings/',
    element: <Settings />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'settings/create',
    element: <CreateSettingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'settings/update',
    element: <UpdateSettingPage />,
    errorElement: <ErrorPage />,
  },
];

//const UpdateTicketPage = lazy(() => import('./tickets/update-ticket.tsx'));

/*
  {
    path: 'checkins/',
    element: <Checkins />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'checkins/create',
    element: <CreateCheckinPage />,
    errorElement: <ErrorPage />,
  },
*/
