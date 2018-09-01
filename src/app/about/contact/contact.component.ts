import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { ReCaptchaComponent } from 'angular2-recaptcha';
import { finalize, take } from 'rxjs/operators';

@Component({
  templateUrl: './contact.component.html',
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  constructor(
    private httpClient: HttpClient,
    private cd: ChangeDetectorRef
  ) {}

  public contactForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
    recaptcha: new FormControl(null, Validators.required),
  });
  public isSubmitting: boolean = false;
  public isSubmitted: boolean = false;
  public isSubmittedSuccesfully = true;

  @ViewChild('captchaRef')
  public recaptchRef: ReCaptchaComponent;

  public onSubmit(): void {
    this.isSubmitting = true;
    this.isSubmitted = false;
    this.isSubmittedSuccesfully = true;

    const contactDetails = this.contactForm.value;

    this.httpClient.post('/api/contact', contactDetails)
      .pipe(
        take(1),
        finalize(() => {
          this.isSubmitting = false;

          this.contactForm.reset();
          this.recaptchRef.reset();

          this.cd.detectChanges();
        })
      )
      .subscribe(() => {
        this.isSubmitted = true;
      }, () => {
        this.isSubmittedSuccesfully = false;
      });
  }

  public handleCorrectCaptcha(response) {
    this.contactForm.controls['recaptcha'].setValue(response);
  }
}
