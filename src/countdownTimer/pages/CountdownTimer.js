import React from 'react';
import { Main } from '../components/Main';
import DateCountdown from 'react-date-countdown-timer';
import { Button } from '../components/Button';
import { InputsBox, TextInput } from '../components/Input';
import { TimerWrapper } from '../components/TimerWrapper';

export default function CountdownTimer() {
  return (
    <Main>
      <h2>Countdown Timer</h2>
      <InputsBox>
        <TextInput placeholder={'Write down event name'} type="text" />
        <Button>Start</Button>
      </InputsBox>
      <TimerWrapper>
        <p>Event Name</p>
        <DateCountdown />
      </TimerWrapper>
    </Main>
  );
}
