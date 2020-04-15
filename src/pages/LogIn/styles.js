import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #ffffff;
  padding: 60px 30px;
  border-radius: 4px;

  img {
    width: 310px;
    max-width: 100%;
    margin-bottom: 40px;
  }
`;

export const Form = styled.form`
  label,
  input {
    display: block;
  }

  button {
    width: 100%;
    margin-top: 15px;
    height: 45px;
    border: none;
    border-radius: 4px;
    background: #7d40e7;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    transition: 0.3s background;

    &:hover {
      background: ${darken(0.05, '#7d40e7')};
    }
  }
`;

export const FormGroup = styled.div`
  label {
    font-weight: bold;
    color: #444;
    font-size: 14px;
    margin-bottom: 10px;
  }

  & + & label {
    margin-top: 15px;
  }

  input {
    width: 100%;
    height: 45px;
    border: 1px solid #dddddd;
    padding-left: 15px;
    border-radius: 4px;

    &::placeholder {
      font-size: 16px;
    }
  }
`;
