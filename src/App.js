import { useState } from "react";
import "./App.css";
import Bill from "./components/Bill";
import Friends from "./components/Friends";
import AddFriendForm from "./components/AddFriendForm";

const initialData = [
  {
    name: "Clark",
    oweAmount: 35,
    imageURL: "https://i.pravatar.cc/51",
    doYouOwe: true,
  },
  {
    name: "Sarah",
    oweAmount: 0,
    imageURL: "https://i.pravatar.cc/49",
    doYouOwe: false,
  },
  {
    name: "Anthony",
    oweAmount: 0,
    imageURL: "https://i.pravatar.cc/50",
    doYouOwe: false,
  },
];

function App() {
  const [friends, setFriends] = useState(initialData);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [billData, setBillData] = useState({
    billValue: 0,
    yourExpense: 0,
    payee: "you",
  });

  console.log(selectedFriend);

  function handleSplit() {
    setFriends((prev) => {
      let friend = prev[selectedFriend];
      friend.oweAmount =
        billData.billValue - billData.yourExpense < 0
          ? 0
          : billData.billValue - billData.yourExpense;

      friend.doYouOwe = billData.payee === "you" ? false : true;
      console.log(prev.toSpliced(selectedFriend, 1, friend));
      return prev.toSpliced(selectedFriend, 1, friend);
    });
    setSelectedFriend(null);
  }

  return (
    <div class="main-container">
      <div class="friends-container">
        {friends.map((friend, i) => (
          <Friends
            friend={friend}
            key={i}
            onFriendSelect={() => {
              setSelectedFriend(i);
              setBillData({ billValue: 0, yourExpense: 0, payee: "you" });
            }}
            selectedFriend={selectedFriend}
          />
        ))}

        <AddFriendForm setFriends={setFriends} />
      </div>
      {selectedFriend !== null ? (
        <Bill
          selectedFriend={friends[selectedFriend]}
          billData={billData}
          setBillData={setBillData}
          handleSplit={handleSplit}
        />
      ) : null}
    </div>
  );
}

export default App;
