import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemAction } from "../store/itemSlice";
import { fatchingAction } from "../store/fetchSyatem";

const FetchItem = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch=useDispatch();


  useEffect(() => {
    if(fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;

dispatch(fatchingAction.markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({items}) => {
        dispatch(fatchingAction.markFetchDone());
        dispatch(fatchingAction.markFetchingEnd());
        dispatch(itemAction.addInitialItem(items[0])) ;
      });
    

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return (
    <>
    
    </>
  );
};

export default FetchItem;
