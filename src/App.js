import React, { useEffect, useState } from "react";
import "./Style.css";

const App = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    const res = await fetch("https://api.covid19india.org/data.json");
    const covidData = await res.json();
    // console.log(covidData.statewise);
    setData(covidData.statewise);
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <div className="main-heading">
        <h1>India Covid-19 Data</h1>
      </div>
      <div className="container-fluid mt-5">
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th>State</th>
                <th>Confirmed</th>
                <th>Recoverd</th>
                <th>Deaths</th>
                <th>Active</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {data.map((curElm, index) => {
                return (
                  <tr key={index}>
                    <td>{curElm.state}</td>
                    <td>{curElm.confirmed}</td>
                    <td>{curElm.recovered}</td>
                    <td>{curElm.deaths}</td>
                    <td>{curElm.active}</td>
                    <td>{curElm.lastupdatedtime}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default App;
