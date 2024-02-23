import { Outlet } from "react-router-dom";
const MainLayout: React.FC = () => {
  return (
    <>
      <div>header</div>
      <div>
        <Outlet></Outlet>
      </div>
      <div>footer</div>
    </>
  );
};

export { MainLayout };
