import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { Select as NextSelect, SelectItem } from '@nextui-org/select';
import { Post } from '../../schemas/post.schema';

interface Category {
  name: string;
}

type Props = {
  register: UseFormRegister<Post>;
  errors: FieldErrors<Post | any>;
  categories: Category[];
};

export default function Select({ register, errors, categories }: Props) {
  return (
    <NextSelect
      color='primary'
      label='Select one or more categories'
      {...register('categories')}
      variant='underlined'
      className='max-w-xs'
      selectionMode='multiple'
      placeholder='Select one or several Categories'
      isInvalid={errors?.categories?.message ? true : false}
      errorMessage={`${errors?.categories?.message}`}
      classNames={{
        label: '!text-violet-100 text-md capitalize font-black',
        value: '!text-violet-100 text-md',
      }}
    >
      {categories ? (
        categories.map((category) => (
          <SelectItem key={category.name}>{category?.name}</SelectItem>
        ))
      ) : (
        <SelectItem key=''>no-data</SelectItem>
      )}
    </NextSelect>
  );
}

//   npx nextui-cli@latest add input

//   npx nextui-cli@latest add button

//   npx nextui-cli@latest add select

//   npx nextui-cli@latest add tooltip

//   npx nextui-cli@latest add spacer

//   npx nextui-cli@latest add checkbox

//   npx nextui-cli@latest add divider

//   npx nextui-cli@latest add image

//   npx nextui-cli@latest add slider

//   npx nextui-cli@latest add table

//Attention: Individual components from NextUI do not require the "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}" in the tailwind config
//For optimized bundle sizes, consider using "./node_modules/@nextui-org/theme/dist/components/(button|checkbox|divider|input|select|spacer|popover|ripple|spinner|listbox|scroll-shadow).js" instead
