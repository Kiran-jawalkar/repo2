import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { Data } from 'src/app/services/data..service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  edituser : boolean = false;
  UniqueIdForEditUser:any;

  locations: Array<any> = [
    { name: 'Bangalore', value: 'Bangalore' },
    { name: 'Mumbai', value: 'Mumbai' },
    { name: 'Delhi', value: 'Delhi' },
  ];

  
  constructor(private route: ActivatedRoute,private formBuilder: FormBuilder,private dataService:Data,private router:Router) {
    
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],      
      phone: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      gender: ['', Validators.required],
      locations: this.formBuilder.array([], [Validators.required])
     });

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.edituser = true;       
        let userObj = this.router.getCurrentNavigation().extras.state.editUser;
        this.UniqueIdForEditUser = userObj.uniqueId;
        this.registerForm.controls["fullName"].setValue(userObj.fullName);
        this.registerForm.controls["phone"].setValue(userObj.phone);
        this.registerForm.controls["email"].setValue(userObj.email);
        this.registerForm.controls["gender"].setValue(userObj.gender);
        
       /* const checkArray: FormArray = this.registerForm.get('locations') as FormArray;
        for(let i=0;i<userObj.locations.length;i++){
          checkArray.push(new FormControl(userObj.locations[i]));
          let index = this.locations.findIndex(x => x.value ==userObj.locations[i]);
          this.locations[index].selected = true;
        }*/
      }
    });

  }

  ngOnInit() {
    
     
  }

  get fval() {
    return this.registerForm.controls;
  }

  register(){
    this.submitted = true;
    if (this.registerForm.invalid) {
    return;
    }
    if(this.edituser == false){
      this.dataService.setUserData(this.registerForm.value);
      alert("data added successfully!!");
    }
    else{
      this.dataService.editUserData(this.registerForm.value,this.UniqueIdForEditUser);
      alert("data updates successfully!!");
    }
   
    this.router.navigateByUrl('/DisplayGridComponent');
  }

  onCheckboxChange(e) {
    const checkArray: FormArray = this.registerForm.get('locations') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  showGrid(){
    this.router.navigateByUrl('/DisplayGridComponent');
  }

}
