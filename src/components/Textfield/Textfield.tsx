import React, { type FC } from 'react';

import FormControl, {
  type FormControlProps
} from '../../lib/iCoWeaUI/components/inputs/FormControl/FormControl';
import Input, { type InputProps } from '../../lib/iCoWeaUI/components/inputs/Input/Input';
import Label, { type LabelProps } from '../../lib/iCoWeaUI/components/inputs/Label/Label';

type TextfieldProps = InputProps & {
  indexId?: string;
  labelVariant?: 'floating' | 'text' | 'none';
  containerProps?: FormControlProps;
  labelProps?: LabelProps;
};

const Textfield: FC<TextfieldProps> = ({
  indexId,
  labelVariant = 'floating',
  invalid,
  containerProps,
  labelProps,
  children,
  ...restProps
}) => (
  <FormControl
    color="error"
    {...containerProps}
  >
    {children ?? (
      <>
        {labelVariant === 'text' && indexId && (
          <Label
            htmlFor={indexId}
            {...labelProps}
          >{`${indexId[0].toUpperCase() + indexId.slice(1)}`}</Label>
        )}
        <Input
          block
          label={
            labelVariant === 'floating' &&
            indexId &&
            `${indexId[0].toUpperCase() + indexId.slice(1)}`
          }
          id={indexId}
          name={indexId}
          {...restProps}
        />
        {invalid && indexId && `Invalid ${indexId}`}
      </>
    )}
  </FormControl>
);

export default Textfield;
