import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'taking_input_from_user';
  myform:FormGroup | any;
username: any;
user:any
// template driven form
onSubmit(contactForm:any){
  console.log(contactForm.value)
}


// reactiveform
constructor(private formBuilder: FormBuilder) {}
  ngOnInit(): void {
   this.myform = this.formBuilder.group({
    username1:['']
   })
  }

submitform(){
  console.log(this.myform.value)
}

// event binding

onInputChange(value:any){
  console.log(value.target.value)
  this.user = value.target.value
}
submit3(){
console.log(this.user)
}

//twoway binding

usern:string='';

}
