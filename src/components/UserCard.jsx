const UserCard = ({ name, email, role }) => {
  return (
    <div className="card">
      <div className="avatar">{name[0]}</div>

      <h3>{name}</h3>
      <p>{email}</p>

      <span className={`role ${role.toLowerCase()}`}>
        {role}
      </span>
    </div>
  );
};

export default UserCard;
