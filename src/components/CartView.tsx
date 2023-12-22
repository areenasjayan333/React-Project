interface Props {
  cartItems: string[];
  onClick: () => void;
}

function CartView({ cartItems, onClick }: Props) {
  return (
    <>
      <div>{cartItems.map((data) => data)}</div>
      <button onClick={onClick}>clear</button>
    </>
  );
}

export default CartView;
