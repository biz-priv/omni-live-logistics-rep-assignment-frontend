import React from "react";
import { Table, Header, ToggleSwitch, PopOver } from "../../components";
import "./dashboard.css";
import cancellation from "../../assets/icons/cancellation.svg";
import checkmark from "../../assets/icons/checkmark.svg";

function Dashboard() {
  const products = [
    {
      isEligible: 1,
      user: "gh0",
      tracking: "86.8%",
      on_time: "86.8%",
      in_office: 1,
    },
    {
      isEligible: 1,
      user: "gh0",
      tracking: "86.8%",
      on_time: "86.8%",
      in_office: 0,
    },
    {
      isEligible: 1,
      user: "gh0",
      tracking: "86.8%",
      on_time: "86.8%",
      in_office: 0,
    },
  ];

  const columns = [
    {
      dataField: "isEligible",
      text: (
        <div>
          Eligibility
          <span style={{ cursor: "pointer", marginLeft: "5px" }}>
            <span variant="success">
              <PopOver
                header="A user is eligible for assignment if all of the following are true:"
                body={
                  <p>
                    <p>Tracking rate is ≥ 80% </p>
                    <p>On Time rate is ≥ 90%</p>
                    <p>User is in office</p>
                  </p>
                }
                element={<span>ℹ️</span>}
              />
            </span>
          </span>
        </div>
      ),
      formatter: (cell) => (
        <div id="column-eligibilty">
          {cell ? <img src={cancellation} alt="" /> : <img src={checkmark} />}
        </div>
      ),
    },
    {
      dataField: "user",
      text: "User",
    },
    {
      dataField: "tracking",
      text: "Tracking %",
    },
    {
      dataField: "on_time",
      text: "On Time %",
    },
    {
      dataField: "in_office",
      text: "In Office",
      formatter: (cell) => (
        <div id="column-in-office">
          <ToggleSwitch checked={!!cell} />
        </div>
      ),
    },
  ];

  return (
    <>
      <Header />
      <div className="dashoard-component">
        <div className="dashboard-component-inner">
          <Table id="id" columns={columns} data={products} />
        </div>
      </div>
    </>
  );
}
export default Dashboard;
