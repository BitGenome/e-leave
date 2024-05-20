/* eslint-disable import/prefer-default-export */
import { useEffect } from 'react';

type FormResetProps = {
  isSubmitSuccessful: boolean;
  reset: () => void;
};

export const useResetForm = ({ isSubmitSuccessful, reset }: FormResetProps) => {
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);
};
