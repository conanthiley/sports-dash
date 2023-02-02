import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import RootLayout from "./RootLayout";
import Players from "./pages/Players";
import PlayerDetail from "./pages/PlayerDetails";
import Teams from "./pages/Teams";
import TeamDetial from "./pages/TeamDetial";
import Calender from "./pages/Calender";
import CalenderDetails from "./pages/CalenderDetails";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} />

      <Route path="players">
        <Route index element={<Players />} />
        <Route path="/players/:id" element={<PlayerDetail />} />
      </Route>

      <Route path="teams">
        <Route index element={<Teams />} />
        <Route path="/teams/t" element={<TeamDetial />} />
      </Route>

      <Route path="calender">
        <Route index element={<Calender />} />
        <Route path="/calender/t" element={<CalenderDetails />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
