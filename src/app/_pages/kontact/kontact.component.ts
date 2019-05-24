import {Component, OnInit} from '@angular/core';
import {KontactService} from '../../kontact.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-kontact',
  templateUrl: './kontact.component.html',
  styleUrls: ['./kontact.component.css']
})
export class KontactComponent implements OnInit {
  private contactForm: FormGroup;
  public submitted: boolean;
  public formStatus: string;

  constructor(
    private kontactService: KontactService,
    private formBuilder: FormBuilder
  ) {
    this.submitted = false;
  }

  ngOnInit() {
    this.createContactForm();
  }

  kontact() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    this.kontactService.sendMail(
      this.contactForm.controls.email.value,
      environment.mailgun.email,
      `${this.contactForm.controls.name.value} has a question via theMillsKorner.org`,
      this.contactForm.controls.message.value
    )
      .subscribe(
        () => {
          this.submitted = false;
          this.contactForm.reset();
          this.formStatus = 'Thank you for kontacting us. We will respond shortly';
        },
        () => {
          this.formStatus = 'There was an error submitting form.';
        }
      );
  }

  createContactForm() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }
}
