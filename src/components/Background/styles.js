import styled from 'styled-components';

export const Background = styled.div`
  background: ${(props) => (props.background ? '#fff' : 'transparent')};
  border-radius: ${(props) => (props.background ? '4px' : 'none')};
  padding: ${(props) => (props.background ? '25px 30px' : '0')};
`;
