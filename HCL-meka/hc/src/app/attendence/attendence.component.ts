import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../assets/canvasjs.min'

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.css']
})
export class AttendenceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let div = document.getElementById("chartContainer")
    let chart = new CanvasJS.Chart(div, {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Allocate Teachers for Courses"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 34, label: "Jan" },
          { y: 33, label: "Feb" },
          { y: 32, label: "Mar" },
          { y: 35, label: "Apr" },
          { y: 32, label: "May" },
          { y: 34, label: "Jun" },
          { y: 33, label: "Jul" },
          { y: 31, label: "Aug" },
          { y: 34, label: "Spe" },
          { y: 32, label: "Oct" },
          { y: 35, label: "Nov" },
          { y: 31, label: "Dec" },
        ]
      }]
    });

    chart.render();
  }

}
