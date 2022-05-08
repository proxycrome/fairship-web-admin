// import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../components/FeaturedInfo";
// import "./home.css";
import { userData } from "../dummyData";
import WidgetSm from "../components/WidgetSm";
import WidgetLg from "../components/WidgetLg";
import Sidebar from "../components/Sidebar";
import Chart from "../components/Chart";

export default function Home() {
  return (
    <>
      <div className="containerSide">
        <Sidebar />
        <div className="home">
          <FeaturedInfo />
          <Chart
            data={userData}
            title="User Activities"
            grid
            dataKey="Active User"
          />
          <div className="homeWidgets">
            <WidgetSm />
            <WidgetLg />
          </div>
        </div>
      </div>
    </>
  );
}
