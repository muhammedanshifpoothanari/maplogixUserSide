import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { setTab } from '@/components/utils/redux/profileTabReducer/tab'; // Update the import path

const useTabState = () => {
  // const tabData = useSelector((state:any) => state.tab);
  // const dispatch = useDispatch();
  const [tabState, setTabState] = useState('analytics');

  useEffect(() => {
    console.log(tabState, 'gtrggfgbgfgbgggggrg');
    // dispatch(setTab(tabState)); // Dispatch the setTab action with tabState
  }, [tabState, ]);

  useEffect(() =>{ 
    console.log(tabState,'3454353453534345')
  },[tabState])

  return {
    tabState,
    setTabState,
  };
};

export default useTabState;
