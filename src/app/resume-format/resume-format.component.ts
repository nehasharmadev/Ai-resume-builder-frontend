import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-resume-format',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './resume-format.component.html',
  styleUrl: './resume-format.component.css'
})
export class ResumeFormatComponent {
ngOnInit(): void {
  const response = history.state.data;
  console.log('Received:', response);
  this.patchForm(response);
}
patchForm(data : any){
  if(!data) return;
  this.resumeForm.get('personalInformation')?.patchValue(data.personalInformation || {});
  this.resumeForm.get('summary')?.patchValue(data.personalInformation?.summary || '');
  const skillsArray: FormArray<FormGroup> = this.fb.array<FormGroup>([]);
  if (data.skills) {
    data.skills.forEach((skill: any) => {
      skillsArray.push(this.fb.group({
        title: skill.title,
        level: skill.level
      }));
    });

     this.resumeForm.setControl('skills', skillsArray);
  }
 

   const expArray : FormArray<FormGroup> = this.fb.array<FormGroup>([]);
  if (data.experience) {
    data.experience.forEach((exp: any) => {
      expArray.push(this.fb.group({
        jobTitle: [exp.jobTitle],
        company: [exp.company],
        location: [exp.location],
        duration: [exp.duration],
        responsibility: [exp.responsibility]
      }));
    });

     this.resumeForm.setControl('experience', expArray);
  }
 

  const eduArray : FormArray<FormGroup> = this.fb.array<FormGroup>([]);
  if (data.education) {
    data.education.forEach((edu: any) => {
      eduArray.push(this.fb.group({
        degree: [edu.degree],
        university: [edu.university],
        location: [edu.location],
        graduationYear: [edu.graduationYear]
      }));
    });

      this.resumeForm.setControl('education', eduArray);
  }


  const certArray : FormArray<FormGroup> = this.fb.array<FormGroup>([]);
  if (data.certifications) {
    data.certifications.forEach((cert: any) => {
      certArray.push(this.fb.group({
        title: [cert.title],
        issuingOrganization: [cert.issuingOrganization],
        year: [cert.year]
      }));
    });

     this.resumeForm.setControl('certifications', certArray);
  }
 


  const projArray : FormArray<FormGroup> = this.fb.array<FormGroup>([]);
  if (data.projects) {
    data.projects.forEach((proj: any) => {
      projArray.push(this.fb.group({
        title: [proj.title],
        description: [proj.description],
        technologiesUsed: [proj.technologiesUsed?.join(', ')],
        githubLink: [proj.githubLink]
      }));
    });

      this.resumeForm.setControl('projects', projArray);
  }


   const achArray : FormArray<FormGroup> = this.fb.array<FormGroup>([]);
  if (data.achievements) {
    data.achievements.forEach((ach: any) => {
      achArray.push(this.fb.group({
        title: [ach.title],
        year: [ach.year],
        extraInformation: [ach.extraInformation]
      }));
    });
      this.resumeForm.setControl('achievements', achArray);
  }


  const langArray: FormArray<FormGroup> = this.fb.array<FormGroup>([]);
  if (data.languages) {
    data.languages.forEach((lang: any) => {
      langArray.push(this.fb.group({
        id: [lang.id],
        name: [lang.name]
      }));
    });
     this.resumeForm.setControl('languages', langArray);
  }
 

  const intArray: FormArray<FormGroup> = this.fb.array<FormGroup>([]);
  if (data.interests) {
    data.interests.forEach((int: any) => {
      intArray.push(this.fb.group({
        id: [int.id],
        name: [int.name]
      }));
    });
     this.resumeForm.setControl('interests', intArray);
  }
 

}
   resumeForm: FormGroup;
  constructor(private fb: FormBuilder, private router : Router) {
    this.resumeForm = this.fb.group({
      personalInformation: this.fb.group({
        fullName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: ['', Validators.required],
        location: ['', Validators.required],
        linkedIn: [''],
        gitHub: [''],
        portfolio: ['']
      }),
        summary: [''],
      skills: this.fb.array([]),
      experience: this.fb.array([]),
      education: this.fb.array([]),
      certifications: this.fb.array([]),
      projects: this.fb.array([]),
      achievements: this.fb.array([]),
      languages: this.fb.array([]),
      interests: this.fb.array([])
    });
  }
  get skills() {
    return this.resumeForm.get('skills') as FormArray;
  }
  get experience() {
    return this.resumeForm.get('experience') as FormArray;
  }
  get education() {
    return this.resumeForm.get('education') as FormArray;
  }
  get certifications() {
    return this.resumeForm.get('certifications') as FormArray;
  }
  get projects() {
    return this.resumeForm.get('projects') as FormArray;
  }
  get achievements() {
    return this.resumeForm.get('achievements') as FormArray;
  }
  get languages() {
    return this.resumeForm.get('languages') as FormArray;
  }
  get interests() {
    return this.resumeForm.get('interests') as FormArray;
  }
  addSkill() {
    this.skills.push(this.fb.group({
      title: ['', Validators.required],
      level: ['', Validators.required]
    }));
  }
  removeSkill(index: number) {
    this.skills.removeAt(index);
  }
  addExperience() {
    this.experience.push(this.fb.group({
      jobTitle: ['', Validators.required],
      company: ['', Validators.required],
      location: ['', Validators.required],
      duration: ['', Validators.required],
      responsibility: ['', Validators.required]
    }));
  }
  removeExperience(index: number) {
    this.experience.removeAt(index);
  }
   addEducation() {
    this.education.push(this.fb.group({
      degree: ['', Validators.required],
      university: ['', Validators.required],
      location: ['', Validators.required],
      graduationYear: ['', Validators.required]
    }));
  }
  removeEducation(index: number) {
    this.education.removeAt(index);
  }
  addCertification() {
    this.certifications.push(this.fb.group({
      title: ['', Validators.required],
      issuingOrganization: ['', Validators.required],
      year: ['', Validators.required]
    }));
  }
   removeCertification(index: number) {
    this.certifications.removeAt(index);
  }
  addProject() {
    this.projects.push(this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      technologiesUsed: ['', Validators.required],
      githubLink: ['']
    }));
  }
  removeProject(index: number) {
    this.projects.removeAt(index);
  }
  addAchievement() {
    this.achievements.push(this.fb.group({
      title: ['', Validators.required],
      year: ['', Validators.required],
      extraInformation: ['', Validators.required]
    }));
  }
  removeAchievement(index: number) {
    this.achievements.removeAt(index);
  }
  addLanguage() {
    this.languages.push(this.fb.group({
      name: ['', Validators.required]
    }));
  }
  removeLanguage(index: number) {
    this.languages.removeAt(index);
  }
  addInterest() {
    this.interests.push(this.fb.group({
      name: ['', Validators.required]
    }));
  }
   removeInterest(index: number) {
    this.interests.removeAt(index);
  }
  onSubmit() {
    if (this.resumeForm.valid) {
      console.log('Form submitted:', this.resumeForm.value);
       this.router.navigate(['/resume-template'], {state:{data:this.resumeForm.value}});
      this.resumeForm.reset();
     
      
    }
  }

  generateAgain(){
     this.router.navigate(['/']);
  }

}
