import React from "react";

export default function Friends({ friend, onFriendSelect }) {
  let oweStyle =
    friend.oweAmount === 0
      ? { color: "black" }
      : friend.doYouOwe
      ? { color: "red" }
      : { color: "green" };

  return (
    <div className="friend">
      <img src={friend.imageURL} alt="" />
      <div className="name-container">
        <p className="name">{friend.name}</p>
        <p className="owe" style={oweStyle}>
          {friend.oweAmount === 0
            ? `You and ${friend.name} are even`
            : friend.doYouOwe
            ? `You owe ${friend.name} ${friend.oweAmount}$`
            : `${friend.name} owes you ${friend.oweAmount}$`}
        </p>
      </div>
      <button onClick={onFriendSelect}>Select</button>
    </div>
  );
}
