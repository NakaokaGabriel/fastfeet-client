import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    color: #444;
  }
`;

export const Utils = styled.div`
  margin: 35px 0 22px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    border: 1px solid #dddddd;
    border-radius: 4px;
    background: #fff;
    height: 36px;
    width: 237px;
    font-size: 14px;
    color: #999999;
    padding-left: 40px;

    &::placeholder {
      font-size: 14px;
      color: #999999;
    }
  }

  a {
    background: #7d40e7;
    height: 36px;
    width: 142px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
  }
`;
