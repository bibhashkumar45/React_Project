import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../store/bagSlice";
import { MdAddCircleOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();

  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.indexOf(item.id) >= 0;

  const handleAddToBag = () => {
    dispatch(bagAction.addTobag(item.id));
  };

  const handleRemoveButton = () => {
    dispatch(bagAction.removeFromBag(item.id));
  };
  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          ${item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs{item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>

        {elementFound ? (
          <button
            type="button"
            class="btn btn-danger btn-add-bag"
            onClick={handleRemoveButton}
          >
            <MdDelete />
            &nbsp; Remove
          </button>
        ) : (
          <button
            type="button"
            class="btn btn-success btn-add-bag"
            onClick={handleAddToBag}
          >
            <MdAddCircleOutline />
            &nbsp; Add to Bag
          </button>
        )}
      </div>
      `
    </>
  );
};

export default HomeItem;
