import { Suspense } from 'react';

import { ConnectAPI } from 'app/providers/with-api';
// import { UserHeader } from 'components/header';
// import { ProjectPopup } from 'components/project';
import { Routes } from 'pages';
import { Loading } from 'shared/loading';

export const App = () => {
  const isReady = true;

  return (
    <ConnectAPI>
      {/* <UserHeader />
      <ProjectPopup /> */}
      <Suspense
        fallback={
          <div className="flex h-full items-center justify-center w-full py-10">
            <Loading className="flex flex-col items-center" />
          </div>
        }
      >
        {(isReady && <Routes />) || <Loading />}
      </Suspense>
    </ConnectAPI>
  );
};
