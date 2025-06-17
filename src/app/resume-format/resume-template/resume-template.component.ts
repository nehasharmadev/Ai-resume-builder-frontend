import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-resume-template',
  imports: [ CommonModule],
  templateUrl: './resume-template.component.html',
  styleUrl: './resume-template.component.css'
})
export class ResumeTemplateComponent {
  resumeData:any;
 ngOnInit() {
  this.resumeData = history.state.data;
}
downloadResume() {
  window.print();
  
}
}



