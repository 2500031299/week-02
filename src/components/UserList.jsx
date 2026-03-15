import users from "../data/users";
import UserCard from "./UserCard";

const UserList = () => {
  return (
    <section className="grid">
      {users.map(({ id, ...user }) => (
        <UserCard key={id} {...user} />
      ))}
    </section>
  );
};

export default UserList;
