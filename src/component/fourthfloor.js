import ReactDOM from 'react-dom';
import React,{ useEffect, useState } from "react";
import styles from '../App.module.css';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import faker from 'faker';
import Modal from '../Modal';

ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data2 = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

export const data1 = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

function Fourthfloor() {
    const [openModal, setOpenModal] = useState(false);
    
    return (
        <body style={{backgroundImage: `url('/bg.png')`, height: '100%'}}>
          {/* <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>SITBEMS</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" />
          <link rel="stylesheet" href="..\src\index.css" /> */}
          
          <main>
            <div className={styles.home}>
              <div className={styles.container} style={{display: 'flex'}}>
                <div style={{width: '65%'}}>
                  <img src="/4floor.png" className={styles.res1} />  
                  <div className={styles.constraint} style={{marginTop: '-45%', marginLeft: '30%'}}>
                    <button className={styles.roundButton} id="myBtn" onClick={() => setOpenModal(true)}>
                      <div className={styles.roundButtonCircle}>
                        <span className={styles.roundButton} />
                      </div>
                    </button>
                    <div id="myModal" className={styles.modal}></div>
                    <Modal 
      open={openModal} 
      onClose={() => setOpenModal(false)} />
                  </div>
                  <div className={styles.constraint} style={{marginTop: '-9%', marginLeft: '46%'}}>
                    <button className={styles.roundButton}>
                      <div className={styles.roundButtonCircle}>
                        <span className={styles.roundButton} />
                      </div>
                    </button>
                  </div>
                  <div className={styles.constraint} style={{marginTop: '-9%', marginLeft: '85%'}}>
                    <button className={styles.roundButton}>
                      <div className={styles.roundButtonCircle}>
                        <span className={styles.roundButton} />
                      </div>
                    </button>
                  </div>
                  <div className={styles.constraint} style={{marginTop: '20%', marginLeft: '30%'}}>
                    <button className={styles.roundButton}>
                      <div className={styles.roundButtonCircle}>
                        <span className={styles.roundButton} />
                      </div>
                    </button>
                  </div>
                  <div className={styles.constraint} style={{marginTop: '-19%', marginLeft: '62%'}}>
                    <button className={styles.roundButton}>
                      <div className={styles.roundButtonCircle}>
                        <span className={styles.roundButton} />
                      </div>
                    </button>
                  </div>
                  <div className={styles.constraint} style={{marginTop: '16%', marginLeft: '46%'}}>
                    <button className={styles.roundButton}>
                      <div className={styles.roundButtonCircle}>
                        <span className={styles.roundButton} />
                      </div>
                    </button>
                  </div>
              
                </div>
                <div style={{flexGrow: 1}}>
                  <div className={styles.infobox}>
                    <div style={{display: 'flex', height: '60px'}}>
                      <div style={{width: '20%', padding: '3%', background: 'white'}}>
                        <p style={{fontFamily: 'Arial, Helvetica, sans-serif', marginTop: '-3%', fontWeight: 'bold'}}><span id="datetime1" /></p>
                      </div>
                      <div style={{flexGrow: 1, padding: '3%', marginLeft: '-2%', background: 'white', textAlign: 'center'}}><p style={{fontFamily: 'Arial, Helvetica, sans-serif', marginTop: '-2%', fontWeight: 100, fontSize: 'large'}}>School of Information Technology Floor 1</p>
                      </div>          
                    </div>
                    <div style={{display: 'flex', height: '40px'}}>
                      <div style={{borderColor: 'white', width: '25%', padding: '3%', background: 'rgba(63, 105, 214, 1)'}}>
                        <p style={{fontFamily: 'Arial, Helvetica, sans-serif', marginTop: '3%', fontWeight: 'bold', color: 'white'}}><span id="time" /></p>
                      </div>
                      <div style={{flexGrow: 1, padding: '3%', borderWidth: 2, marginLeft: '-2%', borderColor: 'white', background: 'rgba(63, 105, 214, 1)', textAlign: 'center'}}><p style={{fontFamily: 'Arial, Helvetica, sans-serif', marginTop: '-1%', fontWeight: 300, fontSize: 'x-large', color: 'white'}}>Amount of electricity used</p>
                      </div>        
                    </div>
                    <div className={styles.doughnutChartContainer}>
                        <Doughnut data={data1} />;
                    </div>
                    <div style={{height: '5%', background: 'white', width: '100%', textAlign: 'center', marginTop: '5%'}}><p style={{fontFamily: 'Arial, Helvetica, sans-serif', marginTop: '5%', fontWeight: 300, fontSize: 'x-large', color: 'black'}}> Daily Consumed Energy Accumulation</p></div>
                        <Line options={options} data={data2} />;
                  </div>   
                </div>
              </div>
            </div></main>
        </body>
      );
}


export default Fourthfloor;