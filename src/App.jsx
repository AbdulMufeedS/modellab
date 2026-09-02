import {useState} from "react";
function App(){
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  function addExpense(){
    if(title==="" || amount==="" || date===""){
      return;
    }
    let Expense={
    title:title,
    amount:amount,
    date:date,
    }
    setExpenses([...expenses, Expense]);
    setTitle("");
    setAmount("");
    setDate("");
  }
  function deleteExpense(index){
    setExpenses(expenses.filter((expense, i) => i !== index));
  }
  return(
    <div>
      <h1>Expense Tracker</h1>
      <input placeholder="Enter Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
      <br /><br />
      <input placeholder="Enter Amount" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
      <br /><br />
      <input placeholder="Enter Date" value={date} onChange={(e)=>setDate(e.target.value)}/>
      <br /><br />
      <button onClick={addExpense}>Add Expense</button>
      <br /><br />
      <h2>Expenses</h2>
      <br /><br />
      {expenses.map((expense, index)=>(
        <div key={index}>
          <p>{expense.title} - {expense.amount} - {expense.date}</p>
          <button onClick={() => deleteExpense(index)}>Delete</button>
        </div>
      ))}
      <br /><br />
      </div>
      );
      }
      export default App;