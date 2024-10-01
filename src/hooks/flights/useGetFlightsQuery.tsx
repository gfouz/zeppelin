import { useQuery } from '@tanstack/react-query';
import { getFlights } from '../../services/flights/getFlights.ts';
import { Flight } from '../../flights.types.ts';

export const useGetFlightsQuery = () => {
  const { isPending, isError, data, error, refetch } = useQuery<Flight[]>({
    queryKey: ['get-flights'],
    queryFn: getFlights,
    refetchOnMount: false, // Evita refetch al montar el componente
    refetchOnWindowFocus: true, // Evita refetch cuando la ventana vuelve al foco
  });
  const flights = data?.map((flight) => flight);
  return { flights, error, isError, isPending, refetch };
};
