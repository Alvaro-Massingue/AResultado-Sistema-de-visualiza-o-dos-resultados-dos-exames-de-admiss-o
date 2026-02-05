import Header from "../components/Header";
import Aside from "../components/Aside";
import OverView from "../components/Overview";

const AdminPanel = () => {
  return (
    <div>
      <Header isAuthenticated={true} />
      <div className="flex mt-15 md:mt-20">
        <Aside />
        <OverView />
      </div>
    </div>
  );
};

export default AdminPanel;
