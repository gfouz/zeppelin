//@ts-nocheck
import { useCounterStore } from '../../store/counterstore';

export default function Counter() {
  const count = useCounterStore((state: any) => state.count);
  const dispatch = useCounterStore((state: any) => state.dispatch);
  return (
    <div className='w-full min-h-[100vh] flex flex-col items-center justify-center'>
      <div className='w-[100px] border border-red-700 p-8 inline-block'>
        <h1 className='text-[2em]'>{count}</h1>
      </div>
      <button
        className='w-[100px] py-2 px-8 border border-green-700'
        onClick={() => dispatch({ type: 'increment', payload: 1 })}
      >
        <h1 className='text-[2em] text-green-700'>+</h1>
      </button>
      <button
        className='w-[100px] py-2 px-8 border border-green-700'
        onClick={() => dispatch({ type: 'decrement', payload: 1 })}
      >
        <h1 className='text-[2em] text-green-700'>-</h1>
      </button>
    </div>
  );
}
