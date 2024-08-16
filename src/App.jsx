import { useState } from "react";
import "./app.scss";



import data from "./constants/data.json";
function Card(props) {
  const [toggle, setToggle] = useState(props.toggle);

  return (
    <div className="continer">
      <div className="box">
        <div className="title">
          <div class="wrapper">
            <img src={props.profile} class="image--cover"  alt="no image"/>
          </div>
          <div className="typo_group">
            <h2>{props.name}</h2>
            <div className="date_group">
              <h4>{props.date}</h4>
              <h4>&#8901; {props.time}</h4>
            </div>
          </div>
          <div className="price">
            <div className={toggle ? "pro green" : "pro red"}>
             
              {toggle ? "+": "-"}
              <span className={toggle ? "pro green" : "pro red"}>
                {props.amount}
              </span>
            </div>
            <div className="price_group">
              <p>{toggle ? "Received" : "Outgoing"} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function App() {
  return (
    <>
      <div className="main_continer">
        <div className="title">
          <h3>Last Transaction </h3>
          <h4>See All</h4>
        </div>
        {data.map((item, index) => (
          <Card
            key={item.index}
            toggle={item.toggle}
            name={item.name}
            date={item.date}
            time={item.time}
            amount={item.amount}
            profile={item.profile}
          />
        ))}
        {/* <Card /> */}
      </div>
    </>
  );
}

export default App;
