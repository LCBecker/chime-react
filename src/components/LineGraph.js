import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Chart from "chart.js";
let lineGraph;

const LineGraph = (props) => {  
    const graphRef = React.createRef();
    const intrinsicGrowthRate = props.doublingTime > 0.0 ? (2.0 ** (1.0 / props.doublingTime) - 1.0) : 0.0;
    const gamma = 1.0 / 14;
    const beta = (intrinsicGrowthRate + gamma) / props.regionalPopulation * (1.0 - (props.socialDistancing / 100));
    const initInfected = props.currentPatients / (props.hospitalMarket * 0.01) / 0.025;
    const nDays = 100;

    const sir = (s, i, r, n) => {
      let s_n = ((beta * -1) * s * i) + s;
      let i_n = ((beta * s * i) - (gamma * i)) + i;
      let r_n = (gamma * i) + r;
      if (s_n < 0.0) {
        s_n = 0.0;
      }
      if (i_n < 0.0) {
        i_n = 0.0;
      }   
      if (r_n < 0.0) {
        r_n = 0.0;
      }
      const scale = n / (s_n + i_n + r_n)
      const finalSin = [s_n * scale, i_n * scale, r_n * scale];
      return finalSin;
    }

    const generateSirData = (initSusceptible, initInfected, initRecovered) => {
      let currentSusceptible = initSusceptible;
      let currentInfected = initInfected;
      let currentRecovered = initRecovered;
      let susceptibleData = [];
      let infectedData = [];
      let recoveredData = [];
      const n = currentSusceptible + currentInfected + currentRecovered;
      for (var i = 0; i < nDays + 1; i++) {
        susceptibleData.push(currentSusceptible);
        infectedData.push(currentInfected);
        recoveredData.push(currentRecovered);
        var nextDayData = sir(currentSusceptible, currentInfected, currentRecovered, n);
        currentSusceptible = nextDayData[0];
        currentInfected = nextDayData[1];
        currentRecovered = nextDayData[2];
      }
      return {
        susceptible: susceptibleData,
        infected: infectedData,
        recovered: recoveredData
      }
    }

    useEffect(() => {
      buildGraph();
    });
    

    const buildGraph = () => {
        const myGraphRef = graphRef.current.getContext("2d");
        if (typeof lineGraph !== "undefined") lineGraph.destroy();

        let labels = [];
        for (var i = 0; i < nDays +1; i++) {
          labels.push("Day " + i);
        }
        
        const data = generateSirData(props.regionalPopulation, initInfected, 0.0);
        
        lineGraph = new Chart(myGraphRef, {
            type: "line",
            data: {
                xLabels: labels,
                //Bring in data
                datasets: [
                    {
                        label: "Susceptible",
                        data: data.susceptible,
                        borderColor: "#3f51b5",
                        fill: false
                    },
                    {
                      label: "Infected",
                      data: data.infected,
                      borderColor: "#653bb5",
                      fill: false
                    },
                    {
                      label: "Recovered",
                      data: data.recovered,
                      borderColor: "#3087a8",
                      fill: false
                    }
                ]
            },
            options: {
                //Customize chart options
                // scales: {
                //   xAxes: [{
                //     ticks: {
                //       beginAtZero: true
                //     }
                //   }],
                //   yAxes: [{
                //       ticks: {
                //           beginAtZero: true
                //       }
                //   }]
                // }
            }
        });
    }

    return (
        <div>
            <canvas
                id="lineGraph"
                ref={graphRef}
            />
        </div>
    )
}

const mapStateToProps = state => {
  return {
    regionalPopulation: state.regionalPopulation,
    hospitalMarket: state.hospitalMarket,
    currentPatients: state.currentPatients,
    doublingTime: state.doublingTime,
    socialDistancing: state.socialDistancing
  }
}

export default connect(mapStateToProps)(LineGraph);