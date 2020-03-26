import { Component, OnInit } from '@angular/core';
import { Data } from '../../services/data..service';
import { ButtonRendererComponent } from 'src/app/services/button-renderer.component';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-display-grid',
  templateUrl: './display-grid.component.html',
  styleUrls: ['./display-grid.component.css']
})
export class DisplayGridComponent implements OnInit{

  columnDefs = [
    { headerName: 'uniqueId', field: 'uniqueId', hide:true, suppressToolPanel:true },
    { headerName: 'Name', field: 'fullName', sortable: true, filter: true },
    { headerName: 'Phone Number', field: 'phone', sortable: true, filter: true ,cellRenderer:this.formatPhoneNumber},
    { headerName: 'Email ID', field: 'email', sortable: true, filter: true },
    { headerName: 'Gender', field: 'gender', sortable: true, filter: true },
    { headerName: 'Locations', field: 'locations', sortable: true, filter: true},
    {
      headerName: 'Edit',
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.editUser.bind(this),
        label: 'Edit'
      }
    },
    {
      headerName: 'Delete',
      cellRenderer: 'buttonRenderer',
      cellRendererParams: {
        onClick: this.deleteUser.bind(this),
        label: 'Delete'
      }
    }
  ];
  
  rowData: any;
  frameworkComponents: any;

  
  
  constructor(private dataService:Data, private router:Router){
    this.frameworkComponents = {
      buttonRenderer: ButtonRendererComponent,
    }
  }
  
  ngOnInit(){
    this.rowData = this.dataService.getUserData();
  }

  editUser(obj){
    console.log(obj);
    const navigationExtras: NavigationExtras = {
      state: {
        editUser: obj.rowData
      }
    };
    this.router.navigateByUrl('/addEditUser', navigationExtras);
    
  }
  
  deleteUser(obj){
    this.dataService.deleteUserData(obj.rowData);
    this.rowData = this.dataService.getUserData();
  }
  
  addUser(){
    this.router.navigateByUrl('/addEditUser');
  }

  formatPhoneNumber(params){
    let phoneNo = params.value;
    let formattedPhoneNumber = '+91-'+phoneNo.slice(0,3)+'-'+phoneNo.slice(3,6)+'-'+phoneNo.slice(6,10);
    return params.value= formattedPhoneNumber;
  }
}
