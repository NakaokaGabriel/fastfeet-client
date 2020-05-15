import styled from 'styled-components';

export const Actions = styled.div`
  position: relative;

  .actions {
    overflow: ${(props) => (props.actions ? 'unset' : 'hidden')};
    position: absolute;
    left: -30px;
    width: 150px;
    z-index: 100;

    &::after {
      content: '';
      position: absolute;
      top: -5px;
      left: 50%;
      background: #fff;
      box-shadow: -1px -1px 2px 0px #00000026;
      width: 10px;
      height: 10px;
      transform: rotate(45deg);
      z-index: 1000;
    }

    ul {
      position: absolute;
      left: 0;
      z-index: 100;
      width: 150px;
      text-align: left;
      background: #fff;
      box-shadow: 0px 0px 2px #00000026;
      border-radius: 4px;

      li {
        margin: 0 10px;

        &:first-child {
          margin-top: 10px;
        }

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
