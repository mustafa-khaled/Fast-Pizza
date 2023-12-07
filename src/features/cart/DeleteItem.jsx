import { useDispatch } from "react-redux";
import { deleteItem } from "./CartSlice";
import Button from "../../ui/Button";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  const handleDeleteItem = function () {
    dispatch(deleteItem(pizzaId));
  };

  return (
    <Button type="small" onClick={handleDeleteItem}>
      Delete
    </Button>
  );
}

export default DeleteItem;
