import styled from 'styled-components';

export const Actions = styled.div`
  position: relative;

  .actions {
    position: absolute;
    left: 0;
    width: 150px;
    text-align: left;
    background: #fff;
    box-shadow: 0px 0px 2px #00000026;
    z-index: 100;

    &::after {
      content: 'a';
      position: absolute;
      top: 0;
    }

    ul li {
      padding: 5px;

      & + li {
        margin-top: 10px;
      }
    }
  }
`;
