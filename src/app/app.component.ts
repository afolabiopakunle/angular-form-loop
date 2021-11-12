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
      fullName: this.fb.control(null, [Validators.required]),
      email: this.fb.control(null, [Validators.required]),
      skillSummary: this.fb.control(null),
      skills: this.fb.group({
        skillLevel: this.fb.control(null),
        department: this.fb.control(null)
      })
    });
  }

  check() {
    console.log(this.form.value);
  }
}
