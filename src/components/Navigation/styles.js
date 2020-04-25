import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background: #fff;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;

  img {
    max-width: 200px;
  }

  ul {
    display: flex;
    align-items: center;

    li a {
      font-size: 15px;
      font-weight: bold;
      color: #999999;
    }

    li.active a {
      color: #444444;
    }

    li + li a {
      margin-left: 20px;
    }

    &:before {
      content: '';
      margin: 0 30px;
      background: #dddddd;
      height: 32px;
      width: 1px;
    }
  }
`;

export const Profile = styled.div`
  text-align: right;

  p {
    font-size: 14px;
    font-weight: bold;
    color: #666666;
  }

  button {
    border: none;
    background: none;
    margin-top: 5px;
    color: #de3b3b;
    font-size: 14px;
  }
`;
