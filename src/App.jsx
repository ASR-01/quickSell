import React from "react";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";
const MainBoard = lazy(() => import("./main/MainBoard"));

const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <MainBoard />
      </Suspense>
    </>
  );
};

export default App;
