import React, { useState } from "react";

export default function Bill({
  selectedFriend,
  billData,
  setBillData,
  handleSplit,
}) {
  const [alert, setAlert] = useState("");
  function handleChange(e) {
    const [key, value] = [e.target.name, e.target.value];
    console.log(key, value);
    setBillData((prev) => {
      if (key === "yourExpense") {
        console.log(typeof prev.billValue, typeof value);
        if (Number(prev.billValue) < Number(value)) {
          setAlert("Your expense cannot be greater than bill value");
          setTimeout(() => {
            setAlert("");
          }, 2000);
          return { ...prev };
        }
      }
      setAlert("");
      return {
        ...prev,
        [key]: value,
      };
    });
  }

  let othersExpense =
    billData.billValue - billData.yourExpense < 0
      ? 0
      : billData.billValue - billData.yourExpense;
  return (
    <div className="bill selected">
      <span className="alert">{alert}</span>
      <h3 className="bill-heading">Split a bill with {selectedFriend.name}</h3>
      <form className="bill-form">
        <label>💰 Bill value</label>
        <input
          name="billValue"
          type="number"
          value={billData.billValue}
          width="80"
          onChange={handleChange}
        />

        <label>🕴️ Your Expense</label>
        <input
          name="yourExpense"
          type="number"
          value={billData.yourExpense}
          onChange={handleChange}
        />

        <label>🧑‍🤝‍🧑{selectedFriend.name}'s expense: </label>
        <input type="number" value={othersExpense} disabled />

        <label>🤑 Who is paying the bill?</label>
        <select name="payee" className="payee" onChange={handleChange}>
          <option value="you">You</option>
          <option value={selectedFriend.name}>{selectedFriend.name}</option>
        </select>
        <button
          className="split-button"
          onClick={(e) => {
            e.preventDefault();
            handleSplit();
          }}
        >
          Split Bill
        </button>
      </form>
    </div>
  );
}
