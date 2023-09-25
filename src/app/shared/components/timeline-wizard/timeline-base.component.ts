/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';

/**
 * A base class that every step component should extend.
 *
 * An example:
 * export class ConfigureDatabaseFormComponent extends TimelineBaseComponent implements AfterViewInit {
  override form = new FormGroup({
    database: new FormControl('', {
      validators: [Validators.required],
      asyncValidators: [validateDatabaseNameAvailability(inject(HttpClient))],
    }),
  });

  // if clicking next button triggers a POST request.
  override next$ = inject(HttpClient).postAPI(`https://randomuser.me/api/`);

  ngAfterViewInit() {
    // For async validators' controls, run below because moving between steps need to update status.
    this.form.controls.database.updateValueAndValidity();
  }
}

// Create an async validator function
function validateDatabaseNameAvailability(http: HttpClient): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const databaseName = control.value;

    // Return null if the input is empty (no validation needed)
    if (!databaseName) {
      return of(null);
    }

    return control.valueChanges.pipe(
      debounceTime(300), // Adjust the debounce time as needed
      first(),
      switchMap((databaseName) => {
        return http.get(`https://randomuser.me/api?q=${databaseName}`).pipe(
          map((isAvailable) => isAvailable ? null : { databaseNameTaken: true }),
          catchError(() => of({ databaseNameTaken: true })),
        );
      }),
    );
  };
}
 */
@Component({ selector: '', template: '' })
export abstract class TimelineBaseComponent {
  form: FormGroup<any> | null = null; // review component's form = null
  next$: Observable<true | unknown> = of(true); // default emit a synchronous observable
  @Input() data: unknown = null;
}
