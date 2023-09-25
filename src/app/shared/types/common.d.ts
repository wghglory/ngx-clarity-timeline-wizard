import { FormArray, FormControl, FormGroup } from '@angular/forms';

/**
 * filter object keys which are string type
 * interface Test { 0: 100, hello: 'hello', [Symbol('id')]: 123 }, only to filter hello
 */
export type StringKeys<T extends object> = {
  [K in keyof T]: K extends string ? K : never;
}[keyof T];

export type OptionalKeys<T> = {
  [K in keyof T]-?: undefined extends T[K] ? K : never;
}[keyof T];
export type RequiredKeys<T> = Exclude<keyof T, OptionalKeys<T>>;

/**
 * filter object values which are string type
 * interface Test { 0: 100, hello: 'hello', [Symbol('id')]: 123, world: 'world' }, only to filter hello, world
 */
export type StringValues<T extends object> = {
  [K in keyof T]: T[K] extends string ? K : never;
}[keyof T];
