import styled from 'styled-components';

export const Table = styled.div`
  width: 100%;
  text-align: left;
`;

export const Head = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.columns}, 1fr)`};
  margin-bottom: 15px;
  padding: 15px;

  strong {
    font-size: 16px;
    color: #444;

    &:last-child {
      text-align: right;
    }
  }
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background: #fff;
  border-radius: 4px;
  padding: 15px;

  & + div {
    margin-top: 20px;
  }

  p {
    font-size: 16px;
    color: #666666;

    &:last-child {
      text-align: right;
    }
  }
`;
