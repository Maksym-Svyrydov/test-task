const User = ({ avatar, name, followers, tweets }) => {
  return (
    <div>
      <img src={avatar} alt=""></img>
      <ul>
        <li>{name}</li>
        <li>{tweets}</li>
        <li>{followers}</li>
      </ul>
      <button type="submit"></button>
    </div>
  );
};

export default User;
