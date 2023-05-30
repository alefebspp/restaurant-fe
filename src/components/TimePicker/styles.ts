import styled from 'styled-components';
import TimePicker from 'react-time-picker';

export const CustomTimePicker = styled(TimePicker)`
  width: 100%;
  background-color: ${({ theme }) => theme.white};

  .react-time-picker__wrapper {
    position: relative;
    display: flex;
    align-items: center;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #ccc;
    padding: 6px;
    font-family: Arial, sans-serif;
    font-size: 14px;
  }

  .react-time-picker__inputGroup {
    flex: 1;
    display: flex;
    align-items: center;
    padding-right: 10px; /* Adicione um espaçamento extra no lado direito */
  }

  .react-time-picker__inputGroup__input {
    flex: 1;
    border: none;
    background-color: transparent;
    outline: none;
    padding: 2px;
    font-size: inherit;
    color: #333;
  }

  .react-time-picker__button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 4px;
  }

  .react-time-picker__clockIcon {
    width: 14px;
    height: 14px;
    fill: #333;
    margin-right: 4px;
  }
`;
