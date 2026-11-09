
import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  private fb = inject(FormBuilder);

  // Add your deployed Google Apps Script URL here.
  private readonly SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzLLDT87ySFlYs55JCHYDVmUIyX0VwcKtu3aY1t-eegxoy8cvHubotA5fttCEr7g4P59g/exec';

  isSubmitting = signal(false);
  submitStatus = signal<'idle' | 'success' | 'error' | 'config'>('idle');

  contactForm = this.fb.nonNullable.group({
    name: ['', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(80)
    ]],
    email: ['', [
      Validators.required,
      Validators.email,
      Validators.maxLength(120)
    ]],
    message: ['', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(3000)
    ]],
    website: [''] // Honeypot field for basic bot detection.
  });

  get f() {
    return this.contactForm.controls;
  }

  async sendDispatch(): Promise<void> {
    if (this.contactForm.invalid || this.isSubmitting()) {
      this.contactForm.markAllAsTouched();
      return;
    }

    console.log('Contact form submission started');

    console.log(
      'Honeypot value:',
      JSON.stringify(this.f.website.value)
    );

    if (this.f.website.value.trim()) {
      console.warn('Submission blocked by honeypot!');
      this.contactForm.reset();
      this.submitStatus.set('success');
      return;
    }

    console.log('Sending request to Google Apps Script...');

    this.isSubmitting.set(true);
    this.submitStatus.set('idle');

    try {
      const payload = new URLSearchParams({
        name: this.f.name.value.trim(),
        email: this.f.email.value.trim(),
        message: this.f.message.value.trim()
      });

      const response = await fetch(this.SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: payload
      });

      console.log('Fetch completed:', response.type);

      this.submitStatus.set('success');
      this.contactForm.reset();

    } catch (error) {
      console.error('Contact submission failed:', error);
      this.submitStatus.set('error');

    } finally {
      this.isSubmitting.set(false);
    }
  }
}
