import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Homepage } from './Homepage';
import { Sealed } from './sealed/Sealed';
import { SetCode } from './common/model/SorceryCard';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sealed" element={<Sealed set={SetCode.Beta} />} />
      </Routes>
    </BrowserRouter>
  );
}
