import styled from 'styled-components';

export const Actions = styled.div`
  position: relative;

  .actions {
    position: absolute;
    left: -30px;
    width: 150px;

    &::after {
      content: '';
      position: absolute;
      top: -5px;
      left: 50%;
      box-shadow: 0px 0px 5px #00000026;
      width: 10px;
      height: 10px;
      transform: rotate(45deg);
      z-index: 99;
    }

    ul {
      position: absolute;
      left: 0;
      z-index: 100;
      width: 150px;
      text-align: left;
      background: #fff;
      box-shadow: 0px 0px 2px #00000026;
      z-index: 100;

      li {
        margin: 0 10px;

        a {
          padding: 10px 0;
          display: block;
          color: #999999;
          font-size: 16px;
          display: flex;
          align-items: center;

          svg {
            margin-right: 10px;
          }
        }

        & + li {
          padding: 6px 0;
          border-top: 1px solid #eeeeee;
        }
      }
    }
  }
`;
