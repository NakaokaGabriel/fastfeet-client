import styled from 'styled-components';

export const Container = styled.div`
  h1 {
    color: #444;
    font-size: 24px;
  }
`;

export const Utils = styled.div`
  margin: 35px 0 22px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* a {
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

    svg {
      margin-right: 5px;
    }
  } */
`;

export const ButtonGroup = styled.div`
  display: flex;

  a {
    background: #cccccc;
    height: 36px;
    width: 112px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    margin-right: 10px;
  }

  button {
    border: none;
    background: #7d40e7;
    height: 36px;
    width: 112px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
  }
`;
