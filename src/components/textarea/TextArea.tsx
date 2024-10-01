import { Textarea as NextUITextarea } from '@nextui-org/input';
import { InputProps } from '../../schemas/post.schema';

export default function Textarea({
  color = 'primary',
  label = 'content',
  register,
  errors,
  defaultValue,
}: InputProps) {
  return (
    <NextUITextarea
      color={color}
      maxRows={10}
      label={label}
      variant='underlined'
      labelPlacement='outside'
      {...register('content')}
      placeholder='Enter your Content'
      classNames={{
        input: '!text-violet-100 text-md max-w-2xl',
        label: '!text-violet-200 text-md capitalize font-black',
      }}
      defaultValue={defaultValue}
      isInvalid={errors?.content?.message ? true : false}
      errorMessage={`${errors?.content?.message}`}
    />
  );
}
