import React, { useState } from "react";

const Table = () => {
  const [data, setData] = useState([]);

  return (
    <div>
      table
      <table>
        <tr>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Email</th>
          <th>Mobileno</th>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  );
};

export default Table;
