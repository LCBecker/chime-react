import React, { Component, useEffect } from 'react'
import Chart from "chart.js";
//import classes from "./LineGraph.module.css";

const LineGraph = () => {
    const chartRef = React.createRef();
    
    useEffect(() => {
        const myChartRef = chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: ["Jan", "Feb", "March"],
                datasets: [
                    {
                        label: "Susceptible, Infected, and Recovered",
                        data: [86, 67, 91],
                    }
                ]
            },
            options: {
                //Customize chart options
                scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true
                      }
                  }]
                }
            }
        });
    });

        return (
            <div>
                <canvas
                    id="myChart"
                    ref={chartRef}
                />
            </div>
        )
}

export default LineGraph;