import {
  Navigate,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Login from "./pages/Login";
import Layout from "./pages/Layout";
import UserSelect from "./pages/UserSelect";
import Protected from "./pages/Protected";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route >
        <Route path="/" element={<UserSelect />} />
        <Route path="user-select" element={<UserSelect />} />
        <Route path="login" element={<Login />} />
        <Route path="protected" element={<Protected />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </>
  ),

  { basename: "/" }
);

export default router;
