import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AbstractControl, FormBuilder, FormControl, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { TimelineBaseComponent } from '../shared/components/timeline-wizard/timeline-base.component';

@Component({
  selector: 'app-configure-service-form',
  standalone: true,
  imports: [CommonModule, ClarityModule, ReactiveFormsModule],
  templateUrl: './configure-service-form.component.html',
  styleUrls: ['./configure-service-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigureServiceFormComponent extends TimelineBaseComponent implements OnInit {
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);

  override form = this.fb.group({
    s3Endpoint: this.fb.group({
      url: ['', [Validators.required]],
      region: ['', [Validators.required]],
    }),

    resources: this.fb.group({
      limits: this.fb.group({
        cpu: [1, [Validators.required]],
        memory: ['200', [Validators.required]], // 200Mi
      }),
    }),

    s3Replicas: [1, [Validators.required]],

    // import needs to pass tlsCertChain and tlsPrivateKey
    tls: this.fb.group<{
      tlsSource: FormControl<'SELFSIGNED' | 'IMPORT' | 'ISSUER' | null>;
      tlsCertChain?: FormControl<string | null>;
    }>({
      // tlsCertChain: ['', [Validators.required]],
      tlsSource: new FormControl<'SELFSIGNED' | 'IMPORT' | 'ISSUER' | null>(null, [Validators.required]),
    }),
  });

  ngOnInit() {
    this.registerTlsSourceChange();
  }

  private registerTlsSourceChange() {
    this.form.controls.tls.controls.tlsSource.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(value => {
      if (value === 'IMPORT') {
        this.form.controls.tls.addControl('tlsCertChain', new FormControl('', [Validators.required]));
      } else {
        this.form.controls.tls.removeControl('tlsCertChain');
      }
    });
  }
}
