import React, { type FC } from 'react';

import FormControl, {
  type FormControlProps
} from '../../lib/iCoWeaUI/components/inputs/FormControl/FormControl';
import Input, { type InputProps } from '../../lib/iCoWeaUI/components/inputs/Input/Input';

type TextfieldProps = InputProps & {
  indexId?: string;
  containerProps?: FormControlProps;
};

const Textfield: FC<TextfieldProps> = ({
  indexId,
  invalid,
  containerProps,
  children,
  ...restProps
}) => (
  <FormControl
    color="error"
    {...containerProps}
  >
    {children ?? (
      <Input
        block
        label={indexId && `${indexId[0].toUpperCase() + indexId.slice(1)}`}
        id={indexId}
        name={indexId}
        {...restProps}
      />
    )}
    {invalid && indexId && `Invalid ${indexId}`}
  </FormControl>
);

export default Textfield;
