import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, inject, Input, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { TimelineBaseComponent } from '../shared/components/timeline-wizard/timeline-base.component';
import { Platform } from '../shared/models/ose-instance.model';
import { removeControlsExcept } from '../shared/utils/form.utils';
import { BasicFormGroup, FormControlsFor } from '../shared/types/form';

@Component({
  selector: 'app-configure-platform',
  standalone: true,
  imports: [CommonModule, ClarityModule, ReactiveFormsModule],
  templateUrl: './configure-platform.component.html',
  styleUrls: ['./configure-platform.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ConfigurePlatformComponent extends TimelineBaseComponent implements OnInit {
  private fb = inject(FormBuilder);
  private destroyRef = inject(DestroyRef);

  // data either input earlier (click next step and then previous step) OR from API
  @Input() override data: Platform | null = null;

  // override form: BasicFormGroup<Platform> = this.fb.group<FormControlsFor<Platform>>({
  override form = this.fb.group<FormControlsFor<Platform>>({
    platform: new FormControl<string | null>(null, [Validators.required]), // fill with currentPlatform
  });

  ngOnInit() {
    this.form.controls.platform.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(value => {
      removeControlsExcept(this.form, ['platform']);

      switch (value) {
        case 'CLOUDIAN':
          this.addControlsForCloudian();
          break;
        default:
          // TODO: remove CloudianControls when switching other platforms
          break;
      }
    });
  }

  // ECS doesn't have IAM
  private addControlsForCloudian() {
    // this.form.addControl(
    //   'admin',
    //   this.fb.group({
    //     url: [this.data?.admin?.url, [Validators.required]],
    //     // tlsCertChain: [this.data?.admin?.tlsCertChain, [Validators.required]] , // read only
    //     username: [this.data?.admin?.username, [Validators.required]],
    //     password: [this.data?.admin?.password, [Validators.required]],
    //   }),
    // );
    this.form.addControl(
      's3',
      new FormGroup({
        // df: new FormControl<string | null>(this.data?.s3?.url || '', [Validators.required]),
        url: new FormControl<string | null>(this.data?.s3?.url || '', [Validators.required]),
        tlsCertChain: new FormControl<string | null>(this.data?.s3?.tlsCertChain || '', [Validators.required]),
        tlsSignature: new FormControl<string | null>(''),
      }),
    );
    // this.form.addControl(
    //   'iam',
    //   this.fb.group({
    //     url: [this.data?.iam?.url, [Validators.required]],
    //     tlsCertChain: [this.data?.iam?.url, [Validators.required]],
    //   }),
    // );
    // this.form.addControl(
    //   'console',
    //   this.fb.group({
    //     url: [this.data?.console?.url, [Validators.required]],
    //     tlsCertChain: [this.data?.console?.url, [Validators.required]],
    //   }),
    // );
  }
}
