import { FormControl } from '@angular/forms';

export type Auth = {
  email: FormControl<string>;
  password: FormControl<string>;
};
