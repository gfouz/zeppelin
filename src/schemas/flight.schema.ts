import { z } from 'zod';

// Función auxiliar para comparar tiempos
const compareTime = (date: Date, time: z.infer<typeof timeSchema>) => {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    time.hour,
    time.minute,
    time.second,
    time.millisecond,
  );
};

const departureDateSchema = z
  .object({
    calendar: z.object({
      identifier: z.string(),
    }),
    era: z.string(),
    year: z.number().min(0),
    month: z.number().min(1).max(12),
    day: z.number().min(1).max(31),
  })
  .refine(
    (data) => new Date(`${data.year}-${data.month}-${data.day}`) > new Date(),
    {
      message: 'Fecha debe estar en el futuro.',
    },
  );

const timeSchema = z.object({
  hour: z.number().min(0).max(23),
  minute: z.number().min(0).max(59),
  second: z.number().min(0).max(59),
  millisecond: z.number(),
});

// Define el esquema de validación con Zod
export const FlightDataSchema = z
  .object({
    airline: z.string().min(1, 'Airline is required'),
    flight_number: z.string().min(1, 'Flight number is required'),
    departure_place: z.string().min(1, 'Departure place is required'),
    arrival_place: z.string().min(1, 'Arrival place is required'),
    departure_time: timeSchema,
    arrival_time: timeSchema,
    departure_date: departureDateSchema,
    luggage: z.string(),
    infant_price: z
      .string()
      .transform((val) => parseFloat(val))
      .refine(
        (num) => !isNaN(num) && num >= 0,
        'Price must be a positive number',
      ),
    child_price: z
      .string()
      .transform((val) => parseFloat(val))
      .refine(
        (num) => !isNaN(num) && num >= 0,
        'Price must be a positive number',
      ),
    adult_price: z
      .string()
      .transform((val) => parseFloat(val))
      .refine(
        (num) => !isNaN(num) && num >= 0,
        'Price must be a positive number',
      ),
  })
  .refine(
    (data) => {
      const departureDate = new Date(
        `${data.departure_date.year}-${data.departure_date.month}-${data.departure_date.day}`,
      );
      const departureDateTime = compareTime(departureDate, data.departure_time);
      const arrivalDateTime = compareTime(departureDate, data.arrival_time);

      console.log('Departure DateTime:', departureDateTime.toISOString());
      console.log('Arrival DateTime:', arrivalDateTime.toISOString());

      // Comparación de fechas y horas
      return arrivalDateTime > departureDateTime;
    },
    {
      message: 'Arrival time must be after departure time',
    },
  );

export const ConnectedFlightDataSchema = z
  .object({
    flight_number: z.string().min(1, 'Flight number is required'),
    departure_place: z.string().min(1, 'Departure place is required'),
    arrival_place: z.string().min(1, 'Arrival place is required'),
    departure_time: timeSchema,
    arrival_time: timeSchema,
    departure_date: departureDateSchema,
    luggage: z.string(),
  })
  .refine(
    (data) => {
      const departureDate = new Date(
        `${data.departure_date.year}-${data.departure_date.month}-${data.departure_date.day}`,
      );
      const departureDateTime = compareTime(departureDate, data.departure_time);
      const arrivalDateTime = compareTime(departureDate, data.arrival_time);

      console.log('Departure DateTime:', departureDateTime.toISOString());
      console.log('Arrival DateTime:', arrivalDateTime.toISOString());

      // Comparación de fechas y horas
      return arrivalDateTime > departureDateTime;
    },
    {
      message: 'Arrival time must be after departure time',
    },
  );

export type FlightFormData = z.infer<typeof FlightDataSchema>;
export type timeSchemaFormData = z.infer<typeof timeSchema>;

export type ConnectedFlightFormData = z.infer<typeof ConnectedFlightDataSchema>;
