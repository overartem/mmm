import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Start = lazy(() => import ("../components/page/Start/Start"));
const Final = lazy(() => import ("../components/page/Final/Final"));
const NotFound = lazy(() => import ("../components/page/404/NotFound"));
const Game = lazy(() => import ("../components/page/Games/Game/Game"));
function App() {
  return (
    <Suspense fallback={<h1>Loading..</h1>}>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/game" element={<Game />} />
        <Route path="/final" element={<Final />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
