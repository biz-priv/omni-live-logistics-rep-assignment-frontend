import React, { useEffect, useState } from "react";
import { Table, Header, ToggleSwitch, PopOver, Loader } from "../../components";
import "./dashboard.css";
import cancellation from "../../assets/icons/cancellation.svg";
import checkmark from "../../assets/icons/checkmark.svg";
import { DashboardSearchRequest, ToggleSelect } from "../../Helper/api";

function Dashboard() {
  const [dashboardData, setDashboardData] = useState([]);
  const [loader, setLoader] = useState(false);

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
      formatter: (cell, row) => (
        <div id="column-eligibilty">
          {row.inOffice === "yes" && row.qualified === "true" ? (
            <img src={checkmark} />
          ) : (
            <img src={cancellation} alt="" />
          )}
        </div>
      ),
    },
    {
      dataField: "user_id",
      text: "User",
    },
    {
      dataField: "track_counter",
      text: "Tracking %",
    },
    {
      dataField: "ontime_counter",
      text: "On Time %",
    },
    {
      dataField: "inOffice",
      text: "In Office",
      formatter: (cell, row) => (
        <div id="column-in-office">
          <ToggleSwitch
            checked={cell === "yes"}
            onChange={(e) => handlechange(row.user_id, e.target.checked)}
          />
        </div>
      ),
    },
  ];

  const fetchData = async () => {
    setLoader(true)
    const data = await DashboardSearchRequest();
    console.info("recieved data",data);
    setDashboardData(data.data);
    setLoader(false)
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlechange = async (id, value) => {
    setLoader(true)
    const params = {
      user_id: id,
      toggle: value ? "yes" : "NO",
    };
    await ToggleSelect(params)
    fetchData()
  };

  return (
    <>
      <Header />
      <div className="dashoard-component">
        <div className="dashboard-component-inner">
          <Table id="id" columns={columns} data={dashboardData} />
        </div>
        <Loader show={loader} />
      </div>
    </>
  );
}
export default Dashboard;
