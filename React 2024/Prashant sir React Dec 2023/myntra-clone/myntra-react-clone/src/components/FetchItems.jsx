import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStatusAction } from "../store/fetchStatusSlice";
import { itemAction } from "../store/ItemSlice";
import axios from "axios";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/items");
      const data = await response.json();

      dispatch(fetchStatusAction.modifyFetchDone());
      dispatch(fetchStatusAction.currentlyFetchingFinished());
      dispatch(itemAction.addInitialItems(data.items));
    } catch (err) {
      throw err;
    }
  };

  //HomeItem.jsx need to check inCart? logic

  useEffect(() => {
    const fetchDataAxios = async () => {
      try {
        const response = await axios.get("http://localhost:8080/items");
        const data = response.data;
        dispatch(fetchStatusAction.modifyFetchDone());
        dispatch(fetchStatusAction.currentlyFetchingFinished());
        dispatch(itemAction.addInitialItems(data.items));
      } catch (err) {
        throw err;
      }
    };

    if (fetchStatus.fetchDone) return;
    dispatch(fetchStatusAction.currentlyFetchingStarted());
    fetchDataAxios().catch((err) => {
      console.log("Hi there is error in connections ");
    });

    //clean up function
    return () => {};
  }, [fetchStatus]);
  return <></>;
};

export default FetchItems;
