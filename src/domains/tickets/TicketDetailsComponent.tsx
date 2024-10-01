import { Flight } from '../../flights.types.ts';
import { useTicketStore } from '../../store/ticketstore.ts';
import { Key } from 'react';

const TicketDetails = () => {
  function formatDate(date: string | number | undefined) {
    const _date = date === undefined ? '' : date;
    return `${new Date(_date.toLocaleString())}`;
  }
  const { ticket } = useTicketStore((state) => state);

  const {
    ticket_issuer,
    flight,
    first_name,
    last_name,
    passport,
    booking_code,
    infant_price,
    child_price,
    adult_price,
    created_at,
  } = ticket;

  return (
    <article className='grid grid-cols-[repeat(auto-fit,minmax(200px,300px))] py-4 place-content-center gap-2 w-full bg-gray-50'>
      {/* Ticket Issuer Section */}
      <section className='p-4 text-sm rounded-lg shadow-md border border-gray-300'>
        <h1 className='text-xl font-extrabold text-gray-800 mb-6'>
          Emisor del Boleto
        </h1>
        <p className='text-gray-600'>
          <strong>Nombre:</strong> {ticket_issuer?.first_name}
        </p>
        <p className='text-gray-600'>
          <strong>Apellido:</strong> {ticket_issuer?.last_name}
        </p>
      </section>

      <section className='p-4 text-sm rounded-lg shadow-md border border-gray-300'>
        <h1 className='text-xl font-extrabold text-gray-800 mb-6'>
          Datos del Cliente
        </h1>
        <p className='text-gray-600'>
          <strong>Nombre:</strong> {first_name}
        </p>
        <p className='text-gray-600'>
          <strong>Apellidos:</strong> {last_name}
        </p>
        <p className='text-gray-600'>
          <strong>Pasaporte:</strong> {passport}
        </p>
      </section>
      {/* Ticket Details Section */}
      <section className='p-4 text-sm border border-gray-300 rounded-lg shadow-md'>
        <h2 className='text-xl font-semibold text-gray-700 mb-4'>
          Detalles del Pasaje
        </h2>
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
        <p>
          <strong>Creado el:</strong>{' '}
          {new Date(`${created_at}`).toLocaleString()}
        </p>
      </section>

      {/* Flight Section */}
      <section className='p-4 text-sm border border-gray-300 rounded-lg shadow-md'>
        <h2 className='text-xl font-semibold text-gray-700 mb-4'>
          Detalles del Vuelo
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
          <strong>Fecha de Salida:</strong>{' '}
          {new Date(`${flight?.departure_date}`).toLocaleString()}
        </p>
        <p className='text-gray-600'>
          <strong>Equipaje Permitido:</strong> {flight?.luggage} kg
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
    </article>
  );
};

export default TicketDetails;
