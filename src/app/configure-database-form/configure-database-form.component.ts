import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { TimelineBaseComponent } from '../shared/components/timeline-wizard/timeline-base.component';
import { Database, InstanceSpec } from '../shared/models/ose-instance.model';
import { BasicFormGroup, FormControlsFor } from '../shared/types/form';

@Component({
  selector: 'app-configure-database-form',
  standalone: true,
  imports: [CommonModule, ClarityModule, ReactiveFormsModule],
  templateUrl: './configure-database-form.component.html',
  styleUrls: ['./configure-database-form.component.scss'],
})
export class ConfigureDatabaseFormComponent extends TimelineBaseComponent {
  // override form: FormGroup<FormControlsFor<Pick<InstanceSpec, 'database'>>> = new FormGroup({
  override form = new FormGroup({
    database: new FormGroup({
      // DSE should read DSE RDE
      configType: new FormControl<'CONNECTION' | 'DSE' | null>(null, [Validators.required]),
      hostname: new FormControl('', [Validators.required]), // CONNECTION has it
      port: new FormControl<number | null>(null, [Validators.required]), // CONNECTION has it
      dbName: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      tlsCACert: new FormControl('', [Validators.required]),
    }),
  });
}
