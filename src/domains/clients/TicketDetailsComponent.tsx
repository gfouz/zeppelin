import { Key } from 'react';
import { Ticket } from '../../tickets.types';
import { Flight } from '../../flights.types';

type TicketDetailsProps = {
  ticket: Ticket;
};

const TicketDetails = ({ ticket }: TicketDetailsProps) => {
  const {
    ticket_issuer,
    flight,
    status,
    airline,
    booking_code,
    infant_price,
    child_price,
    adult_price,
    description,
    created_at,
  } = ticket;
  function formatDate(date: string | number | undefined) {
    const _date = date === undefined ? '' : date;
    return `${new Date(_date.toLocaleString())}`;
  }
  return (
    <article className='grid grid-cols-[repeat(auto-fit,minmax(200px,300px))] py-18 place-content-center gap-2 w-full bg-gray-50'>
      {/* Ticket Issuer Section */}
      <section className='p-4 text-sm rounded-lg shadow-md border border-gray-300'>
        <h1 className='text-xl font-extrabold text-gray-800 mb-6'>
          Emisor del Pasaje
        </h1>
        <p className='text-gray-600'>
          <strong>Nombre:</strong> {ticket_issuer?.first_name}
        </p>
        <p className='text-gray-600'>
          <strong>Apellido:</strong> {ticket_issuer?.last_name}
        </p>
      </section>

      {/* Flight Section */}
      <section className='p-4 text-sm border border-gray-300 rounded-lg shadow-md'>
        <h2 className='text-xl font-semibold text-gray-700 mb-4'>
          Vuelo Principal
        </h2>

        <p className='text-gray-600'>
          <strong>Lugar de Salida:</strong> {flight?.departure_place}
        </p>
        <p className='text-gray-600'>
          <strong>Lugar de Llegada:</strong> {flight?.arrival_place}
        </p>
        <p className='text-gray-600'>
          <strong>Número de Vuelo:</strong> {flight?.flight_number}
        </p>
        <p className='text-gray-600'>
          <strong>Hora de Salida:</strong> {flight?.departure_time}
        </p>
        <p className='text-gray-600'>
          <strong>Hora de Llegada:</strong> {flight?.arrival_time}
        </p>
        <p className='text-gray-600'>
          <strong>Fecha de Salida:</strong> {formatDate(flight?.departure_date)}
        </p>
        <p className='text-gray-600'>
          <strong>Equipaje Permitido:</strong> {flight?.luggage} kg
        </p>
        <p className='text-gray-600'>
          <strong>Estado:</strong> {flight?.status}
        </p>
      </section>

      {/* Connected Flights Section */}
      {flight?.connected_flight && flight?.connected_flight.length > 0 && (
        <section className='p-4 text-sm border border-gray-300 rounded-lg shadow-md'>
          <h2 className='text-xl font-semibold text-gray-700 mb-4'>
            Vuelos Conectados
          </h2>
          {flight?.connected_flight.map(
            (cf: Flight, index: Key | null | undefined) => (
              <div key={index} className='mb-4 p-4 bg-gray-50'>
                <p className='text-gray-600'>
                  <strong>Número de Vuelo:</strong> {cf.flight_number}
                </p>
                <p className='text-gray-600'>
                  <strong>Lugar de Salida:</strong> {cf.departure_place}
                </p>
                <p className='text-gray-600'>
                  <strong>Lugar de Llegada:</strong> {cf.arrival_place}
                </p>
                <p className='text-gray-600'>
                  <strong>Hora de Salida:</strong> {cf.departure_time}
                </p>
                <p className='text-gray-600'>
                  <strong>Hora de Llegada:</strong> {cf.arrival_time}
                </p>
                <p className='text-gray-600'>
                  <strong>Fecha de Salida:</strong>{' '}
                  {formatDate(cf.departure_date)}
                </p>
              </div>
            ),
          )}
        </section>
      )}

      {/* Ticket Details Section */}
      <section className='p-4 text-sm border border-gray-300 rounded-lg shadow-md'>
        <h2 className='text-xl font-semibold text-gray-700 mb-4'>
          Detalles del Pasaje
        </h2>
        <p className='text-gray-600'>
          <strong>Estado:</strong>{' '}
          <span
            className={` 
              ${
                (status == 'available' &&
                  'tracking-widest font-extrabold text-lime-500') ||
                (status == 'booked' &&
                  'tracking-widest font-extrabold text-rose-500')
              }
            `}
          >
            {status}
          </span>
        </p>
        <p className='text-gray-600'>
          <strong>Aerolínea:</strong> {airline}
        </p>
        <p className='text-gray-600'>
          <strong>Código de Reserva:</strong> {booking_code}
        </p>
        <p className='text-gray-600'>
          <strong>Precio de Infantes:</strong> {infant_price}
        </p>
        <p className='text-gray-600'>
          <strong>Precio de Niño:</strong> {child_price}
        </p>
        <p className='text-gray-600'>
          <strong>Precio de Adulto:</strong> {adult_price}
        </p>
        <p className='text-gray-600'>
          <strong>Descripción:</strong> {description}
        </p>
        <p>
          <strong>Emitido el:</strong>{' '}
          {new Date(`${created_at}`).toLocaleString()}
        </p>
      </section>
    </article>
  );
};

export default TicketDetails;
