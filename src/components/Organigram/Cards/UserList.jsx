import { UserCard } from "./UserCard";

const UserList = ({ data }) => {
  return (
    <>
      {data.map((user, i) => (
        <UserCard key={i} data={user} parent/>
      ))}
    </>
  );
};

export {UserList}
