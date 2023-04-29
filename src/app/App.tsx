import { Route, Routes } from "react-router-dom";
import Start from "../components/page/Start/Start";
import Final from "../components/page/Final/Final";
import NotFound from "../components/page/404/NotFound";
import Game from "../components/page/Games/Game/Game";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/game" element={<Game />} />
      <Route path="/final" element={<Final />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
