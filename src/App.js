import React, { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Loader } from 'components';
import Layout from 'layout/Layout';
import GlobalStyles from 'styles/GlobalStyles';

const Home = lazy(() => import('./pages/Home/Home'));
const Tweets = lazy(() => import('./pages/Tweets/Tweets'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="tweets"
            element={
              <Suspense fallback={<Loader />}>
                <Tweets />
              </Suspense>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/404.html" />} />
      </Routes>
    </Suspense>
  );
}

export default App;
