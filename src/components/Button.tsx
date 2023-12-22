// import "./Button.css";

// interface Props {
//   label: string;
//   onClickButton: () => void;
//   color: string;
// }

// function Button({ label, onClickButton, color }: Props) {
//   return (
//     <button
//       type="button"
//       className={"btn btn-" + color}
//       onClick={onClickButton}
//     >
//       {label}
//       my button
//     </button>
//   );
// }

function Button() {
  return <button>Click me</button>;
}

export default Button;
