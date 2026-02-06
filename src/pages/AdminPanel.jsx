import Header from "../components/Header";
import Aside from "../components/Aside";
import OverView from "../components/Overview";
import ManageResults from "../components/ManageResults"
import AddResults from "../components/AddResults"
import { useEffect, useState } from "react";

const AdminPanel = () => {
  const [focusView, setFocusView] = useState(false);
  const [focusManage, setFocusManage] = useState(false);
  const [focusAdd, setFocusAdd] = useState(false);

  useEffect(() => {
    setFocusView(true);
  }, []);

  return (
    <div>
      <Header isAuthenticated={true} />
      <div className="flex mt-15 md:mt-20">
        <Aside
          focusView={focusView}
          setFocusView={setFocusView}
          focusManage={focusManage}
          setFocusManage={setFocusManage}
          focusAdd={focusAdd}
          setFocusAdd={setFocusAdd}
        />
        {focusView?<OverView/>:""}
        {focusManage?<ManageResults/>:""}
        {focusAdd?<AddResults/>:""}
        
      </div>
    </div>
  );
};

export default AdminPanel;
