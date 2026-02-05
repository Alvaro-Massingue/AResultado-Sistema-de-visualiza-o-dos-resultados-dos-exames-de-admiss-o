import HeaderAdimin from "../components/HeaderAdimin";
import Aside from "../components/Aside";
import OverView from "../components/Overview";

const AdminPanel = () => {
  return (
    <div>
      <HeaderAdimin/>
      <div className="flex mt-15 md:mt-20">
        <Aside />
        <OverView />
      </div>
    </div>
  );
};

export default AdminPanel;
