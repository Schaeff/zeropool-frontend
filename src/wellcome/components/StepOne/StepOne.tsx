import React from 'react';
import { cn } from '@bem-react/classname';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';

import './StepOne.scss';

const css = cn('StepOne');

interface StepOneProps { }

export const StepOne: React.FC<StepOneProps> = () => {
  const dispatch = useDispatch();

  return (
    <div className={css()} data-testid="StepOne">
      <h1> StepOne </h1>

      <p>
        Secret phrase should consist of 12 words. Store it carefully.
        If you loose it, than you will loose access to all your
        associated wallets!
      </p>

      <button
        className={css('BackButton')}
        onClick={() => dispatch(push('/'))}
      >
        Previous screen
      </button>

      <button
        className={css('ActionButton')}
        onClick={() => dispatch(push('/create-account-step2'))}
      >
        Generate secret phrase
      </button>
    </div>
  )
};