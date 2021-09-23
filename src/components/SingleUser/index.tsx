import React from "react";

interface Props {
  user: any;
}

const SingleUser: React.FC<Props> = ({ user }) => {
  return (
    <tr>
      <td>
        <img src={user?.picture?.medium} alt="user-pic" />
      </td>
      <td>{`${user?.name?.first} ${user?.name?.last}`}</td>
      <td>{user?.email}</td>
      <td>{user?.login?.username}</td>
      <td>{user?.login?.password}</td>
    </tr>
  );
};

export default SingleUser;
