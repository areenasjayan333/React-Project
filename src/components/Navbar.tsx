interface Props {
  itemCount: number;
}
function Navbar({ itemCount }: Props) {
  return <div>{itemCount}</div>;
}

export default Navbar;
