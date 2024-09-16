import { useSelector } from "react-redux";
import BagSummery from "../components/bagSummery";
import GenerateItem from "../components/GenerateItem";
const Bag = () => {
  const items = useSelector((store) => store.Item);
  const bagItems = useSelector((store) => store.bag);

  const finalItem = items.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id); // This expression should be remember......
    return itemIndex >= 0;
  });

  console.log(finalItem);

  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {finalItem.map((item) => (
              <GenerateItem item={item} key={item.id} />
            ))}
          </div>
          <BagSummery />
        </div>
      </main>
    </>
  );
};
export default Bag;
