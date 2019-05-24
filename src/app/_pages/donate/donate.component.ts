import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {environment} from '../../../environments/environment';
import {StripeService} from '../../_services/stripe/stripe.service';

declare var Stripe: any;

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {
  public donateForm: FormGroup;
  public stripe;
  public card;
  private style = {
    base: {
      color: '#495057',
      fontFamily: 'inherit',
      fontSmoothing: 'antialiased',
      fontSize: '17px',
      '::placeholder': {
        color: '#495057'
      }
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a'
    }
  };
  public submitted: boolean;
  private chargeError: string;
  private customerError: string;
  public formStatus: string;

  constructor(
    private formBuilder: FormBuilder,
    private stripeService: StripeService
  ) {
    this.stripe = Stripe(environment.stripe.publishableKey);
  }

  ngOnInit() {
    this.createDonateForm();
    this.createCardInstance();
  }

  createDonateForm() {
    this.donateForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      amount: ['', Validators.required],
      token: ['']
    });
  }

  createCardInstance() {
    const elements = this.stripe.elements();

    this.card = elements.create('card', {style: this.style});

    this.card.mount('#card-element');

    const that = this;

    this.card.addEventListener('change', function (event) {
      const displayError = document.getElementById('card-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }

      that.submitted = false;
    });
  }

  donate() {
    this.submitted = true;

    if (this.donateForm.invalid) {
      return;
    }

    const that = this;

    this.stripe.createToken(this.card).then(function (result) {
      if (result.error) {
        const errorElement = document.getElementById('card-errors');
        errorElement.textContent = result.error.message;
      } else {
        that.donateForm.controls.token.setValue(result.token);

        that.submitForm();
      }
    });
  }

  submitForm() {
    // Create Customer
    this.stripeService.createCustomer({
      name: `${this.donateForm.controls.firstName.value} ${this.donateForm.controls.firstName.value}`,
      email: this.donateForm.controls.email.value,
      phone: this.donateForm.controls.phone.value,
      source: this.donateForm.controls.token.value.id,
      description: 'Donor to theMillsKorner',
    }).subscribe(customer => {
      this.stripeService.createCharge({
        amount: this.donateForm.controls.amount.value,
        customer: customer.id,
        source: customer.sources.data[0].id, // Use their first card
        description: 'Donation to theMillsKorner',
        customerEmail: customer.email
      }).subscribe(() => {
        this.card.clear();
        this.donateForm.reset();
        this.submitted = false;
        this.chargeError = undefined;
        this.customerError = undefined;
        this.formStatus = 'Thank you for your donation';
      }, err => {
        this.chargeError = err.error.error.message;
        this.submitted = false;
      });
    }, err => {
      this.customerError = err.error.error.message;
      this.submitted = false;
    });
  }
}
