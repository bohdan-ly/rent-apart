import React from 'react';
import { useDispatch } from 'react-redux';
import LoadingBar from 'react-top-loading-bar';
import { fetchRealties } from 'store/realty/slice';
import { fetchUser } from 'store/user/slice';

// import { Category } from 'store/categories/types';
// import { Product } from 'store/fridge/types';
// import { getUser } from "~selectors/userSelectors";
// import useEventListener from "~shared/hooks/useEvents";
// import { AppActions } from "./actions/appActions";

export const ConnectAPI = ({ children }) => {
  const [progress, _setProgress] = React.useState(0);
  const [networkRequestThread, setNetworkRequestThread] = React.useState('');

  // const user = useSelector((state) => getUser(state));
  const user = JSON.parse(window.localStorage.getItem('user') || 'null');

  const setProgress = (val) => {
    if (!user) _setProgress(0);
    else _setProgress(val);
  };

  const dispatch = useDispatch();

  // const { syncKanbanBoardsData } = AppActions(dispatch);

  // useEventListener("user.logout", () => {
  //   window.clearTimeout(networkRequestThread);
  // });

  React.useEffect(() => {
    console.log('Init api...');

    if (!user) {
      setProgress(0);
      window.clearTimeout(networkRequestThread);
      return;
    }

    const _networkRequestThread = setTimeout(() => {
      fetchNecessaryData();
    }, 10);
    setNetworkRequestThread(_networkRequestThread);

    return () => {
      window.clearTimeout(networkRequestThread);
    };
  }, []);

  const fetchNecessaryData = async () => {
    console.log('Fetching necessary data...');

    setProgress(25);

    await dispatch(fetchRealties({}));

    setProgress(50);

    // const { payload: fridgeProducts } = await dispatch(fetchFridgeProducts({}));

    setProgress(100);
  };

  window.fetchNecessaryData = fetchNecessaryData;

  return (
    <>
      <LoadingBar
        progress={progress}
        height={progress === 0 ? 0 : 3}
        color="#FE753F"
        onLoaderFinished={() => {
          setProgress(0);
        }}
      />
      {children}
    </>
  );
};
