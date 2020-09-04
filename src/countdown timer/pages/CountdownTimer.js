import React, { useState } from 'react';
import { Main } from '../../common/Main';
import StartButton from '../components/Button';
import { TimerWrapper } from '../components/TimerWrapper';
import { DateBox, Box, InputsBox } from '../components/boxes';
import { TextInput, DateInput } from '../components/Input';

export default function CountdownTimer() {
  const [inputText, setInputText] = useState('');
  const [text, setText] = useState('No  name');
  const [dateString, setDateString] = useState('0m 0d 0h 0m 0s');
  const [eventDate, setEventDate] = useState(new Date());

  const clickOnStartButton = () => {
    setText(inputText);
    if (!eventDate) {
      alert('please input a date');
    } else {
      startCountdown();
    }
  };

  const startCountdown = () => {
    var countdownInterval = setInterval(function () {
      var now = new Date().getTime();
      console.log(now);
      var difference = new Date(eventDate).getTime() - now;
      console.log(eventDate);
      let days = Math.floor(difference / (1000 * 60 * 60 * 24));
      let month = Math.floor(days / 30);
      let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      let minutes = Math.floor((difference / 1000 / 60) % 60);
      let seconds = Math.floor((difference / 1000) % 60);

      let showDate =
        month +
        'm ' +
        days +
        'd ' +
        hours +
        'h ' +
        minutes +
        'm ' +
        seconds +
        's ';

      setDateString(showDate);
      if (difference < 0) {
        clearInterval(countdownInterval);
      }
    }, 1000);
  };

  return (
    <Main>
      <h3>Countdown Timer</h3>
      <InputsBox>
        <Box>
          <TextInput
            placeholder={'Write down event name'}
            type="text"
            value={inputText}
            onChange={(event) => setInputText(event.target.value)}
          />
          <DateInput
            type="date"
            value={eventDate}
            onChange={(event) => setEventDate(event.target.value)}
          />
          <StartButton name="Start" onClick={clickOnStartButton} />
        </Box>
      </InputsBox>

      <TimerWrapper>
        <p>{text}</p>
      </TimerWrapper>
      <DateBox>{dateString}</DateBox>
    </Main>
  );
}
