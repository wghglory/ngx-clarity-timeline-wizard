import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject, Input, signal, WritableSignal } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClarityModule } from '@clr/angular';

import { catchError, tap } from 'rxjs';
import { AlertComponent } from '../shared/components/alert/alert.component';
import { TimelineBaseComponent } from '../shared/components/timeline-wizard/timeline-base.component';
import { startWithTap } from '../shared/operators/start-with-tap.operator';

@Component({
  selector: 'app-configure-review',
  standalone: true,
  imports: [CommonModule, ClarityModule, AlertComponent],
  templateUrl: './configure-review.component.html',
  styleUrls: ['./configure-review.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigureReviewComponent extends TimelineBaseComponent {
  @Input() override data: unknown[] = [];
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  error: WritableSignal<HttpErrorResponse | undefined> = signal(undefined);

  override next$ = inject(HttpClient)
    .get(`https://randomuser.me/api/`, {})
    .pipe(
      startWithTap(() => {
        // console.log(this.data, 'step data');
        this.error.set(undefined);
      }),
      tap(() => {
        this.router.navigate(['/setup/deployments']);
        // this.router.navigate(['../'], {
        //   relativeTo: this.route,
        // });
      }),
      catchError((err: HttpErrorResponse) => {
        this.error.set(err);
        throw err;
      }),
    );
}
