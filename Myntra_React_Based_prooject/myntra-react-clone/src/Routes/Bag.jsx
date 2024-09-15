import BagSummery from "../components/bagSummery";
import GenerateItem from "../components/GenerateItem";



const Bag=()=>
{
  return(
    <>


    <main>
      <div className="bag-page">
        <div className="bag-items-container">
            <GenerateItem/>
        </div>
      <BagSummery/>
      </div>
    </main>
    </>
  )
}
export default Bag;