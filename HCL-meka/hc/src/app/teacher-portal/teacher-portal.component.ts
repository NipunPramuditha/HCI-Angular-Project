import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Router} from "@angular/router";
import * as CanvasJS from '../../assets/canvasjs.min'
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-teacher-portal',
  templateUrl: './teacher-portal.component.html',
  styleUrls: ['./teacher-portal.component.css']
})
export class TeacherPortalComponent implements OnInit {

  
  selectFormControl = new FormControl('', Validators.required);
  nostudent: boolean = false;
  
  constructor(private router:Router) { }

  tdashbord(){
    this.router.navigate(['/tdashbord'])    
  }

  attendence(){
    this.router.navigate(['/attendence'])    
  }

  searchvalue = '';
  students = [
    {
      fname: 'bandara',
      lname: 'kumara',
      address: '2131,perera mtw,ambara',
      NIC: '95245566V',
      course: 'web ',
      mobile: '0773557838',
      salary: '25000.00',
      paymnets: [
        {
          month: 'January',
          amount: ''
        },
        {
          month: 'Febuary',
          amount: ''
        },
        {
          month: 'March',
          amount: ''
        },
        {
          month: 'May',
          amount: ''
        },
        {
          month: 'June',
          amount: ''
        },
        {
          month: 'July',
          amount: ''
        },
        {
          month: 'August',
          amount: ''
        },
        {
          month: 'September',
          amount: ''
        },
        {
          month: 'October',
          amount: ''
        },
        {
          month: 'November',
          amount: ''
        },
        {
          month: 'December',
          amount: ''
        }


      ]
    },
    {
      fname: 'hikka',
      lname: 'kusal',
      address: '2,bomulla mtw,ragama',
      NIC: '95263736V',
      course: 'data entry',
      mobile: '077245533',
      salary: '5000.00',
      paymnets: [
        {
          month: 'January',
          amount: ''
        },
        {
          month: 'Febuary',
          amount: ''
        },
        {
          month: 'March',
          amount: ''
        },
        {
          month: 'May',
          amount: ''
        },
        {
          month: 'June',
          amount: ''
        },
        {
          month: 'July',
          amount: ''
        },
        {
          month: 'August',
          amount: ''
        },
        {
          month: 'September',
          amount: ''
        },
        {
          month: 'October',
          amount: ''
        },
        {
          month: 'November',
          amount: ''
        },
        {
          month: 'December',
          amount: ''
        }

      ]
    },
    {
      fname: 'nikka',
      lname: 'ranasignhe',
      address: '53,kumara rodaya mtw,balangoda',
      NIC: '7234566V',
      course: 'beatuty ',
      mobile: '076552288',
      salary: '45000.00',
      paymnets: [
        {
          month: 'January',
          amount: '11'
        },
        {
          month: 'Febuary',
          amount: '4445'
        },
        {
          month: 'March',
          amount: ''
        },
        {
          month: 'May',
          amount: ''
        },
        {
          month: 'June',
          amount: ''
        },
        {
          month: 'July',
          amount: ''
        },
        {
          month: 'August',
          amount: ''
        },
        {
          month: 'September',
          amount: ''
        },
        {
          month: 'October',
          amount: ''
        },
        {
          month: 'November',
          amount: ''
        },
        {
          month: 'December',
          amount: ''
        },

      ]
    },
  ]
  selectedStudent;


  ngOnInit() {
    this.resetstudent();
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
          { y: 7, label: "Java" },
          { y: 5, label: "Android" },
          { y: 6, label: "C#" },
          { y: 5, label: "Python" },
          { y: 7, label: "ASP.NET" },
          { y: 4, label: "React" },
        ]
      }]
    });

    chart.render();
  }
  selectstudent(student) {
    this.selectedStudent = student;
    console.log(this.selectedStudent)
  }
  search() {
    let st = this.students.filter(x => {
      return x.NIC === this.searchvalue
    })
    if (st.length > 0) {
      this.selectedStudent = st[0]
    }
    else {
      this.nostudent = true;
      this.resetstudent();
    }

  }
  save() {
    this.resetstudent();
  }
  clear() {
    this.nostudent = false;
    this.resetstudent();
  }
  resetstudent() {
    this.selectedStudent = {
      fname: '',
      lname: '',
      address: '',
      NIC: '',
      course: ' ',
      mobile: '',
      salary: '',
      paymnets: [
        {
          month: 'January',
          amount: '2500'
        },
        {
          month: 'Febuary',
          amount: ''
        },
        {
          month: 'March',
          amount: ''
        },
        {
          month: 'May',
          amount: ''
        },
        {
          month: 'June',
          amount: ''
        },
        {
          month: 'July',
          amount: ''
        },
        {
          month: 'August',
          amount: ''
        },
        {
          month: 'September',
          amount: ''
        },
        {
          month: 'October',
          amount: ''
        },
        {
          month: 'November',
          amount: ''
        },
        {
          month: 'December',
          amount: ''
        }

      ]
    }
  }


}

export class SelectValueBindingExample {
  selected = 'option2';
}

export class ButtonTypesExample {}

export class TabGroupBasicExample {}

