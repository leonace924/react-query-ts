import React from "react";
import SingleUser from "../SingleUser";

interface Props {
  data?: { results: Array<any>; info: any };
}

const Table: React.FC<Props> = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Avatar</th>
          <th>Name</th>
          <th>Email</th>
          <th>Username</th>
          <th>Password</th>
        </tr>
      </thead>
      {data && (
        <tbody>
          {data?.results?.map((el: any, id: number) => (
            <SingleUser key={id} user={el} />
          ))}
        </tbody>
      )}
    </table>
  );
};

export default Table;
