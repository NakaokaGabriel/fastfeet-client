import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  text-align: left;
  border-spacing: 0;

  thead tr th {
    font-size: 16px;
    font-weight: bold;
    color: #444444;
    padding: 20px 25px;
  }

  tbody {
    background: #fff;
    border-radius: 4px;

    tr {
      padding-bottom: 10px;

      td {
        font-size: 16px;
        color: #666666;
        padding: 20px 25px;
      }
    }
  }
`;
