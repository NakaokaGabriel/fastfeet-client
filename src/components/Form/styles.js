import styled from 'styled-components';

export const FormGroup = styled.div`
  width: 100%;
`;

export const InputGroup = styled.div`
  display: flex;

  & + div {
    margin-top: 15px;
  }

  div {
    width: 100%;

    & + div {
      margin-left: 30px;
    }

    label {
      display: block;
      margin-bottom: 10px;
      font-size: 14px;
      color: #444;
      font-weight: bold;
    }

    input {
      width: 100%;
      border: 1px solid #dddddd;
      border-radius: 4px;
      background: #fff;
      height: 45px;
      color: #dddddd;
      font-size: 16px;
      padding-left: 15px;

      &::placeholder {
        color: #dddddd;
        font-size: 16px;
      }
    }
  }
`;
