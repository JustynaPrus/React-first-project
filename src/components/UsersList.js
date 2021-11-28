import React from "react";
import "../styles/Opinions.css";

const UsersList = ({ data }) => {
  return (
    <div className="user">
      {data
        ? data.map(({ user, comment }) => (
            <>
              <div key={user.login.uuid}>
                <img src={user.picture.large} alt={user.name.last} />
                <h3>{`${user.name.first} ${user.name.last}`}</h3>
                <p>{user.email}</p>
                <p>{comment.body}</p>
              </div>
            </>
          ))
        : null}
    </div>
  );
};

export default UsersList;
