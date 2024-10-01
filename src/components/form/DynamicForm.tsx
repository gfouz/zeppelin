//@ts-nocheck
import { useForm, SubmitHandler, FieldValues } from 'react-hook-form';
import { ZodSchema } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

interface DynamicFormProps<T extends FieldValues> {
  fields: Array<{ name: keyof T; type: string; label: string }>;
  schema: ZodSchema<T>;
  onSubmit: SubmitHandler<T>;
}

const DynamicForm = <T extends FieldValues>({
  fields,
  schema,
  onSubmit,
}: DynamicFormProps<T>) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({
    resolver: zodResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='max-w-md mx-auto p-4 bg-white rounded shadow-md'
    >
      <h2 className='text-xl font-bold mb-4'>Formulario Dinámico</h2>

      {fields.map((field) => (
        <div className='mb-4' key={field.name as string}>
          <label className='block mb-2'>{field.label}</label>
          <input
            type={field.type}
            {...register(field.name)}
            className='w-full p-2 border border-gray-300 rounded'
          />
          {errors[field.name] && (
            <p className='text-red-500'>{errors[field.name]?.message}</p>
          )}
        </div>
      ))}

      <button
        type='submit'
        className='w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600'
      >
        Enviar
      </button>
    </form>
  );
};

export default DynamicForm;
