export const isRequired = (value: string | number | undefined) =>
  value ? undefined : 'Este campo deve ser preenchido';
