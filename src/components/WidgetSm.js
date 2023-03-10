import { useEffect, useState } from "react";
import { Visibility } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getAllAgent } from "../redux/agents/agentActions";
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function WidgetSm() {
  const dispatch = useDispatch();
  const [itemsToShow, setItemToShow] = useState(4);

  //useSelector
  const agentList = useSelector((state) => state.agents);
  const agent = agentList?.allAgent;
  // const agentLength = agent.length;

  const showMore = () => {
    setItemToShow(agent.length);
  };
  const showLess = () => {
    setItemToShow(4);
  };

  useEffect(() => {
    dispatch(getAllAgent());
  }, [dispatch]);

  const allAgent =
    agent &&
    agent.slice(0, itemsToShow).map((item) => {
      return (
        <div key={item.id}>
          <ul className="widgetSmList">
            <li className="widgetSmListItem" key={item.id}>
              {/* <img src={item.profilePhoto} alt="" className="widgetSmImg" /> */}
              <div className="widgetSmUser">
                <span className="widgetSmUsername">{`${item.firstName} ${item.lastName}`}</span>
                <span className="widgetSmUserTitle">{item.phone}</span>
              </div>
              {/* <button className="widgetSmButton">
                <Link to={`/agent/${item.email}`}>
                  <Visibility className="widgetSmIcon" />
                  Display
                </Link>
              </button> */}
            </li>
          </ul>
        </div>
      );
    });

  // console.log(allAgent, '8888')

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">AGENTS</span>
      {!allAgent ? <CircularProgress /> : allAgent && allAgent}
      {itemsToShow === 4 ? (
        <button className="widgetSmButton" onClick={showMore}>
          Show more
        </button>
      ) : (
        <button className="widgetSmButton" onClick={showLess}>
          Show Less
        </button>
      )}
    </div>
  );
}
