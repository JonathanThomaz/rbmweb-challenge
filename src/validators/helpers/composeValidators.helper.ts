/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
export const composeValidators =
  (...validators: any[]) =>
    (value: any) =>
      validators.reduce((error, validator) => error || validator(value), undefined);
