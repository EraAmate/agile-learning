import React, { useState } from 'react';
import { Main } from '../components/Main';
import DateCountdown from 'react-date-countdown-timer';
import { Button } from '../components/Button';
import { InputsBox, TextInput, DateInput, Div } from '../components/Input';
import { TimerWrapper } from '../components/TimerWrapper';

export default function CountdownTimer() {
  const date = 'December 31, 2020';
  const [event, setEvent] = useState('');
  const [eventDate, setEventDate] = useState(date);
  const clickOnStartButton = () => {
    setEventDate();
  };

  return (
    <Main>
      <h2>Countdown Timer</h2>
      <InputsBox>
        <Div>
          <TextInput
            placeholder={'Write down event name'}
            type="text"
            value={event}
            onChange={(event) => setEvent(event.target.value)}
          />
          <DateInput type="date" />
          <Button onClick={clickOnStartButton}>Start</Button>
        </Div>
      </InputsBox>

      <TimerWrapper>
        <p>{event}</p> {/* eventName??? */}
        <DateCountdown dateTo={eventDate} />
      </TimerWrapper>
    </Main>
  );
}
