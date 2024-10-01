interface Props {
  pending: boolean;
}

const PendingDots = ({ pending = false }: Props) => {
  return (
    <div className='inline-flex justify-center items-center text-md font-bold '>
      <span className='mr-[2px]'>{pending ? 'Loading' : 'Send'}</span>
      {pending ? <div className='loader mt-2'></div> : null}
    </div>
  );
};

export default PendingDots;
