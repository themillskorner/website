import {Component, OnInit, ViewChild} from '@angular/core';
import {EventsService} from '../../_services/events/events.service';
import {IEvent} from '../../_interfaces/event';
import {ActivatedRoute} from '@angular/router';
import {UnslugifyPipe} from '../../_pipes/unslugify.pipe';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StripeService} from '../../_services/stripe/stripe.service';
import {environment} from '../../../environments/environment';

declare var Stripe: any;

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
  providers: [UnslugifyPipe]
})
export class EventDetailComponent implements OnInit {
  event: IEvent;
  stripe;
  card;
  paidFor: boolean;
  submitted: boolean;
  chargeError: string;
  customerError: string;
  eventForm: FormGroup;
  slug: string;
  style = {
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
  images;

  @ViewChild('#exampleModal') paymentModal;

  constructor(
    private eventsService: EventsService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private stripeService: StripeService,
    private unslugifyPipe: UnslugifyPipe
  ) {
    this.stripe = Stripe(environment.stripe.publishableKey);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.slug = params.get('slug');
    });

    this.eventsService.get(this.unslugifyPipe.transform(this.slug)).subscribe(event => this.event = event);

    this.createEventForm();
    this.createCardInstance();
  }

  createEventForm() {
    this.eventForm = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
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

  f() {
    return this.eventForm.controls;
  }

  joinEvent() {
    this.submitted = true;

    if (this.eventForm.invalid) {
      return;
    }

    const that = this;

    this.stripe.createToken(this.card).then(function (result) {
      if (result.error) {
        const errorElement = document.getElementById('card-errors');
        errorElement.textContent = result.error.message;
      } else {
        that.f().token.setValue(result.token);

        that.submitForm();
      }
    });
  }

  submitForm() {
    // Create Customer
    this.stripeService.createCustomer({
      name: `${this.f().fname.value} ${this.f().lname.value}`,
      email: this.f().email.value,
      phone: this.f().phone.value,
      source: this.f().token.value.id,
      description: this.event.title,
    }).subscribe(customer => {
      this.stripeService.createCharge({
        amount: this.event.price,
        customer: customer.id,
        source: customer.sources.data[0].id, // Use their first card
        description: this.event.title
      }).subscribe(() => {
        this.card.clear();
        this.eventForm.reset();
        this.submitted = false;
        this.paidFor = true;
        this.chargeError = undefined;
        this.customerError = undefined;
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
