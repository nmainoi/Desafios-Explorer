import {Routes, Route} from 'react-router-dom';

import { ExplorerHub } from '../apps/explorer-hub';
import { RocketSect } from '../apps/1RocketSect';
import { RocketForms } from '../apps/2RocketForms';
import { SpaceCream } from '../apps/3SpaceCream';
import { TimeFocus } from '../apps/4TimeFocus';
export function PagesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ExplorerHub />} />
      <Route path="/rocketsect" element={<RocketSect />} />
      <Route path="/rocketforms" element={<RocketForms />} />
      <Route path="/spacecream" element={<SpaceCream />} />
      <Route path="/timefocus" element={<TimeFocus />} />
    </Routes>
  );
}


