import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.form = this.fb.group({
      fullName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      skillSummary: [],
      skills: this.fb.group({
        skillLevel:[null],
        department: [null]
      })
    });
  }

  logKeyValuePairs(group: FormGroup) {

    Object.keys(group.controls).forEach(key => {
     const abstractControl = group.get(key);
     if(abstractControl instanceof FormGroup) {
       this.logKeyValuePairs(abstractControl)
     } else {
       console.log(`Key: ${key} - Value: ${abstractControl.value}`)
     }
    })
  }
  check() {
    console.log(this.form.controls);
    let obj = null;
    this.logKeyValuePairs(this.form)
  }

}
