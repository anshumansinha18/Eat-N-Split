import React, { useState } from "react";

export default function AddFriendForm({ setFriends }) {
  const [addFriendInput, setAddFriendInput] = useState({
    name: "",
    imageURL: "",
    oweAmount: 0,
    doYouOwe: false,
  });
  const [isAddingFriend, setIsAddingFriend] = useState(false);

  function handleChange(e) {
    const [key, value] = [e.target.name, e.target.value];
    setAddFriendInput((prev) => ({ ...prev, [key]: value }));
  }

  function addFriend() {
    setFriends((prev) => [...prev, addFriendInput]);
    setIsAddingFriend(!isAddingFriend);
  }
  return (
    <>
      {isAddingFriend ? (
        <div className="add-friend-form selected">
          <label>🧑‍🤝‍🧑 Friend Name</label>
          <input
            name="name"
            type="text"
            value={addFriendInput.name}
            onChange={handleChange}
          ></input>

          <label>🖼️ Image URL:</label>
          <input
            name="imageURL"
            type="text"
            value={addFriendInput.imageURL}
            onChange={handleChange}
          ></input>

          <button class="add-btn" onClick={addFriend}>
            Add
          </button>
        </div>
      ) : null}
      <button
        className="close-btn"
        onClick={() => {
          setIsAddingFriend(!isAddingFriend);
          setAddFriendInput({
            name: "",
            imageURL: "",
            oweAmount: 0,
            doYouOwe: false,
          });
        }}
      >
        {!isAddingFriend ? "Add Friend" : "Close"}
      </button>
    </>
  );
}
