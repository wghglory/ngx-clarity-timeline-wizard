import {
  AbstractControl,
  FormControl,
  FormGroup,
  UntypedFormArray,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { forEach, isEmpty } from 'lodash-es';
import { OptionalKeys } from '../types/common';
import { BasicFormGroup } from '../types/form';

export function removeControlsExcept<T extends Record<string, any>>(form: BasicFormGroup<T>, controlKeys: (keyof T & string)[]) {
  const formControlKeys: (keyof T & string)[] = Object.keys(form.controls);
  formControlKeys.forEach(key => {
    if (!controlKeys.includes(key)) {
      form.removeControl(key as OptionalKeys<T> & string);
    }
  });
}

export function removeControls<T extends Record<string, any>>(form: BasicFormGroup<T>, controlKeys: (OptionalKeys<T> & string)[]) {
  for (let key of controlKeys) {
    if (form.contains(key)) {
      form.removeControl(key);
    }
  }
}

function checkControl(c: UntypedFormControl, control: AbstractControl, field: string) {
  if (control instanceof UntypedFormGroup) {
    return control.controls[field] !== c;
  }
  if (control instanceof UntypedFormControl) {
    return control !== c;
  }
  return true;
}

export function notUnique(formArray: UntypedFormArray, field = 'key', caseIgnored = false, withEmptyCheck = true) {
  return (c: UntypedFormControl) => {
    const hasDuplicated = Array.from(formArray.controls)
      .filter(control => checkControl(c, control, field))
      .some(control => {
        const fieldValue = (control.value[field] || '').trim();
        const cValue = (c.value || '').trim();
        if (caseIgnored) {
          return fieldValue.toLowerCase().trim() === cValue.toLowerCase().trim();
        } else {
          // no need to check empty value unique
          if (!withEmptyCheck) {
            return !isEmpty(fieldValue) && fieldValue === cValue;
          }
          return fieldValue === cValue;
        }
      });

    if (hasDuplicated === true) {
      return { notUnique: hasDuplicated };
    }

    return null;
  };
}

export function formClassInvalid(field: string, form: UntypedFormGroup) {
  const { invalid, dirty, touched } = form.controls[field];

  return invalid && (dirty || touched);
}

export function isInvalid(field: UntypedFormControl) {
  const { invalid, dirty, touched } = field;

  return invalid && (dirty || touched);
}

export function positiveNumberValidation() {
  return [Validators.required, Validators.min(1), Validators.pattern(/^\d+$/)];
}

// validate asterisk count and return custom error type
// default allow 1 asterisk, if invalid return asteriskError
export function allowedAsteriskCount(allowedAsterisk = 1, errorField = 'asteriskError') {
  return (c: AbstractControl) => {
    const values = c.value as string[];
    if (isEmpty(values)) {
      return null;
    }
    const inValid = values.some((v: string) => v.split('*').length > allowedAsterisk + 1);
    if (inValid) {
      const res: Record<string, boolean> = {};
      res[errorField] = true;
      return res;
    }

    return null;
  };
}

export const urlFormat = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

export function checkLabelsPattern(errorField = 'invalidLabel') {
  return (c: AbstractControl) => {
    const values = c.value as string[];
    if (isEmpty(values)) {
      return null;
    }
    const invalid = values.some((v: string) => !/([^\s]\|)+([a-zA-Z\s\d*@+-=._:/]){1,}$/.test(v));
    if (invalid) {
      const res: Record<string, boolean> = {};
      res[errorField] = true;
      return res;
    }

    return null;
  };
}

export function constructLabels(labels: string[]) {
  if (isEmpty(labels)) {
    return {};
  }

  const label: Record<string, string> = {};

  labels.forEach(p => {
    const arr = p.split('|');
    const key = arr[0];
    const value = arr[1];
    label[key] = value;
  });

  return label;
}

export function destructLabels(labels: object) {
  if (!labels) {
    return [];
  }

  const results: string[] = [];

  forEach(labels, (v, k) => {
    results.push(`${k}|${v}`);
  });

  return results;
}
