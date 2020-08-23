import React, { useState } from 'react';
import { Main } from '../components/Main';
import DateCountdown from 'react-date-countdown-timer';
import { Button } from '../components/Button';
import { InputsBox, TextInput, DateInput, Div } from '../components/Input';
import { TimerWrapper } from '../components/TimerWrapper';

export default function CountdownTimer() {
  const [inputText, setInputText] = useState('');
  const [text, setText] = useState('New Year');
  const [eventDate, setEventDate] = useState('December 31, 2020');
  const [inputDate, setInputDate] = useState();

  const clickOnStartButton = () => {
    setEventDate(inputDate);
    setText(inputText);
  };

  return (
    <Main>
      <h2>Countdown Timer</h2>
      <InputsBox>
        <Div>
          <TextInput
            placeholder={'Write down event name'}
            type="text"
            value={inputText}
            onChange={(event) => setInputText(event.target.value)}
          />
          <DateInput
            type="date"
            value={inputDate}
            onChange={(event) => setInputDate(event.target.value)}
          />
          <Button onClick={clickOnStartButton}>Start</Button>
        </Div>
      </InputsBox>

      <TimerWrapper>
        <p>{text}</p> {/* eventName??? */}
        <DateCountdown dateTo={eventDate} />
      </TimerWrapper>
    </Main>
  );
}
