import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayGridComponent } from './display-grid.component';
import { Data } from 'src/app/services/data..service';
import { AgGridModule } from 'ag-grid-angular';
import { RouterTestingModule } from '@angular/router/testing';


fdescribe('DisplayGridComponent', () => {
  let component: DisplayGridComponent;
  let fixture: ComponentFixture<DisplayGridComponent>;
  //let spy: jasmine.Spy;
 // let dataService: Data;
  let userObj =[{ 
    fullName:'Kiran',
    phone:'1234567896',
    email: 'xyz@abc.com',
    gender: 'female',
    locations:['Bangalore']
  }]

  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayGridComponent ],
      imports: [
            AgGridModule.withComponents([]),
            RouterTestingModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayGridComponent);
    component = fixture.componentInstance;
   // dataService = fixture.debugElement.injector.get(dataService);
   // spy = spyOn(dataService, 'getUserData').and.returnValue(userObj);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('edit User',()=>{
    expect(component.editUser).toBeDefined();
  })

  it('delete User',()=>{
    expect(component.deleteUser).toBeDefined();
  })

  it('add User',()=>{
    expect(component.addUser).toBeDefined();
  })

});
