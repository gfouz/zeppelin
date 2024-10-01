import { useEffect } from 'react';
import { UseMutationResult } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { GenericObject } from '../../hooks/hooks.types';

type MutationResult = {
  link: string;
  mutation: UseMutationResult<any, Error, GenericObject, unknown> | any;
};

export default function MutationResultMessage({
  link,
  mutation,
}: MutationResult) {
  const navigate = useNavigate();

  useEffect(() => {
    mutation?.isSuccess && navigate(link);
  }, [mutation?.isSuccess]);

  return (
    <>
      {mutation?.failureReason || mutation?.isError ? (
        <p className='text-rose-500 tracking-tight font-extrabold text-xs mt-1'>{`${mutation?.failureReason || mutation?.error}`}</p>
      ) : (
        <>
          {mutation?.isSuccess ? (
            <p className='my-2 font-extrabold'>{mutation?.status}</p>
          ) : null}
          {mutation?.isPending ? (
            <p className='tracking-tight font-extrabold text-xs mt-1'>
              Requesting...
            </p>
          ) : null}
        </>
      )}
    </>
  );
}
