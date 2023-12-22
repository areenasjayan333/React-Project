import { useState } from "react";
import Expense from "./ExpenseProject/Expense";
import ExpenseFilter from "./ExpenseProject/ExpenseFilter";
import ExpenseForm from "./ExpenseProject/ExpenseForm";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expense, setExpense] = useState([
    {
      id: 1,
      description: "aaa",
      category: "Utilities",
      amount: 10,
    },
    {
      id: 2,
      description: "aaa",
      category: "Utilities",
      amount: 10,
    },
    {
      id: 3,
      description: "aaa",
      category: "Utilities",
      amount: 10,
    },
    {
      id: 4,
      description: "aaa",
      category: "Utilities",
      amount: 10,
    },
  ]);

  const Visibility = selectedCategory
    ? expense.filter((e) => e.category === selectedCategory)
    : expense;
  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(data) =>
            setExpense([...expense, { ...data, id: expense.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelect={(category) => setSelectedCategory(category)} />
      </div>
      <Expense
        expense={Visibility}
        onDelete={(id) => setExpense(expense.filter((e) => e.id !== id))}
      />
    </div>
  );
};

export default App;

// import ExpandedText from "./components/ExpandedText";

// const App = () => {
//   return (
//     <ExpandedText>
//       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, cumque
//       nam? Voluptatibus numquam nemo excepturi eos eveniet? Perspiciatis
//       delectus magnam minus rem aspernatur. Unde a natus illum dolores. Sed
//       iusto id cupiditate iure accusantium neque dolore officiis, voluptatibus
//       voluptatem. Facere explicabo excepturi voluptatem velit accusantium veniam
//       molestias nihil voluptas, eos neque culpa odit? Alias, corrupti quis non
//       sunt iusto architecto itaque cupiditate vero dolore ad, beatae voluptatem?
//       Minima quas voluptate corporis, blanditiis, tenetur impedit possimus
//       nesciunt dolores debitis velit quaerat, alias ea animi placeat optio
//       laboriosam tempore sit voluptatem quae maiores eum fugit eius sed. Fuga
//       sit odio distinctio eaque.
//     </ExpandedText>
//   );
// };

// export default App;

// import Navbar from "./components/Navbar";
// import CartView from "./components/CartView";
// import { useState } from "react";

// function App() {
//   const [cartItem, setClear] = useState(["item 1", "item 2", "item 3"]);

//   return (
//     <>
//       <Navbar itemCount={cartItem.length} />
//       <CartView cartItems={cartItem} onClick={() => setClear([])} />
//     </>
//   );
// }

// export default App;
// let item = ["bag", "shoes", "sock", "book", "slipper"];
// const handleSelectItem = (item: string) => {
//   console.log(item);
// };
// return (
//   <div>
//     <ListGroup
//       item={item}
//       heading="Products"
//       onSelected={handleSelectItem}
//     ></ListGroup>
//   </div>
// );

// import { useState } from "react";
// import Button from "./components/Button.tsx";
// const colors = [
//   "primary",
//   "secondary",
//   "success",
//   "danger",
//   "warning",
//   "info",
//   "light",
//   "dark",
// ];

// let [i, setSelectedIndex] = useState(-1);
// // i++;
// return (
//   <Button
//     label={colors[i]}
//     onClickButton={() => setSelectedIndex((i) => i + 1)}
//     color={colors[i]}
//   ></Button>
// );
