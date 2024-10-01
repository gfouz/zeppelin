import { Key } from 'react';
import { Flight } from '../../../flights.types.ts';

type FlightInfoProps = {
  flight: Flight;
};

export default function FlightInfo({ flight }: FlightInfoProps) {
  const { connected_flight } = flight;
  function formatDate(date: string | number | undefined) {
    const _date = date === undefined ? '' : date;
    return `${new Date(_date.toLocaleString())}`;
  }
  return (
    <article className='modal-text-size'>
      <section className='p-6 border border-gray-300 rounded-lg shadow-lg'>
        <p className='text-gray-600'>
          <strong>ID del Vuelo:</strong> {flight.id}
        </p>

        <p className='text-gray-600'>
          <strong>Lugar de Salida:</strong> {flight.departure_place}
        </p>
        <p className='text-gray-600'>
          <strong>Lugar de Llegada:</strong> {flight.arrival_place}
        </p>
        <p className='text-gray-600'>
          <strong>Número de Vuelo:</strong> {flight.flight_number}
        </p>
        <p className='text-gray-600'>
          <strong>Hora de Salida:</strong> {flight.departure_time}
        </p>
        <p className='text-gray-600'>
          <strong>Hora de Llegada:</strong> {flight.arrival_time}
        </p>
        <p className='text-gray-600'>
          <strong>Fecha de Salida:</strong> {formatDate(flight?.departure_date)}
        </p>
        <p className='text-gray-600'>
          <strong>Equipaje Permitido:</strong> {flight.luggage} kg
        </p>
        <p className='text-gray-600'>
          <strong>Estado:</strong> {flight.status}
        </p>
      </section>
      {connected_flight && connected_flight.length > 0 && (
        <section className='p-6 mt-1 border border-gray-300 rounded-lg shadow-md'>
          <h2 className='text-md mb-1 font-semibold text-gray-700'>
            Vuelos Conectados
          </h2>
          {connected_flight.map((cf: Flight, index: Key | null | undefined) => (
            <div key={index} className='bg-gray-50'>
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
          ))}
        </section>
      )}
    </article>
  );
}
