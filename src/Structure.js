import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const Structure = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default Structure;
