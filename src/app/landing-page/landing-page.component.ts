import { Component } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ResumeServiceService } from '../resume-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing-page',
  imports: [ReactiveFormsModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  myForm : any = FormGroup;
  constructor(private fb : FormBuilder, private service : ResumeServiceService, private router: Router){
    this.myForm = this.fb.group({
      description: ['']
    });
  }
generateResume(){
  const userDescription = this.myForm.value.description;
  console.log("generated : " + userDescription);
  this.service.generateResume(userDescription).subscribe({
    next:(response) => {
      console.log("resume response:" + response);
       this.router.navigate(['/resume'], {state:{data:response}});
    },
    error:(err)=>{
      console.error('error : ' + err);
    }
  })

  
}

scrollToForm() {
    const form = document.getElementById('description');
    if (form) {
      form.focus();
      form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}
