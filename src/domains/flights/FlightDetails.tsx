import { useFlightStore } from '../../store/flightstore.ts';

const FlightDetails = () => {
  const { flight } = useFlightStore((state) => state);

  const formatPrice = (price: string | number | undefined) => {
    return price == 0.0 ? 'Incluido' : `$ ${price}`;
  };
  function formatDate(date: string | number | undefined) {
    const _date = date === undefined ? '' : date;
    return `${new Date(_date.toLocaleString())}`;
  }
  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,300px))] py-4 place-content-center gap-2 w-full bg-gray-50'>
      {/* Sección de vuelo principal */}
      <section
        className={`${(flight?.isConnected && 'text-amber-300') || (flight?.isMain && 'text-emerald-300')} p-4 text-sm rounded-lg shadow-md border border-gray-300`}
      >
        <h3 className='text-center text-xl font-bold'>
          {(flight?.isMain && 'Vuelo Principal') ||
            (flight?.isConnected && 'Vuelo Conectado')}
        </h3>
        <hr className='mt-2'></hr>
        <p>
          <strong>Vuelo:</strong>{' '}
          {`${flight?.flight_number} está ${flight?.status}`}
        </p>
        <p>
          <strong>Salida desde:</strong> {flight.departure_place}
        </p>
        <p>
          <strong>Destino:</strong> {flight.arrival_place}
        </p>
        <p>
          <strong>Fecha de salida:</strong> {formatDate(flight.departure_date)}{' '}
          <strong>Hora de salida:</strong>
          {flight.departure_time}
        </p>
        <p>
          <strong>Hora de llegada:</strong> {flight.arrival_time}{' '}
        </p>
        <p>
          <strong>Equipaje permitido:</strong> {flight.luggage} kg
        </p>
        <p>
          <strong>Precio Adulto:</strong> {formatPrice(flight.adult_price)}
        </p>
        <p>
          <strong>Precio Niño:</strong> {formatPrice(flight.child_price)}
        </p>
        <p>
          <strong>Precio Infante:</strong> {formatPrice(flight.infant_price)}
        </p>
      </section>

      {/* Sección de vuelo conectado */}
      {flight.connected_flight &&
        flight.connected_flight.length > 0 &&
        flight.connected_flight.map((connectedFlight, index) => (
          <div
            key={index}
            className='mb-4 pb-3 p-4 text-yellow-200 text-sm rounded-lg shadow-md border border-gray-300'
          >
            <p>
              <strong>Vuelo:</strong>{' '}
              {`${connectedFlight?.flight_number} está ${connectedFlight?.status}`}
            </p>
            <p>
              <strong>Salida desde:</strong> {connectedFlight.departure_place}
            </p>
            <p>
              <strong>Destino:</strong> {connectedFlight.arrival_place}
            </p>
            <p>
              <strong>Fecha y hora de salida:</strong>{' '}
              {connectedFlight.departure_date} {connectedFlight.departure_time}
            </p>
            <p>
              <strong>Hora de llegada:</strong> {connectedFlight.arrival_time}
            </p>
            <p>
              <strong>Equipaje permitido:</strong> {connectedFlight.luggage} kg
            </p>
            <p>
              <strong>Precio Adulto:</strong>{' '}
              {formatPrice(connectedFlight.adult_price)}
            </p>
            <p>
              <strong>Precio Niño:</strong>{' '}
              {formatPrice(connectedFlight.child_price)}
            </p>
            <p>
              <strong>Precio Infante:</strong>{' '}
              {formatPrice(connectedFlight.infant_price)}
            </p>
          </div>
        ))}
    </div>
  );
};

export default FlightDetails;
