import React, { type FC } from 'react';

import FormControl, {
  type FormControlProps
} from '../../lib/iCoWeABaseUI/components/inputs/FormControl/FormControl';
import Input, { type InputProps } from '../../lib/iCoWeABaseUI/components/inputs/Input/Input';
import Label, { type LabelProps } from '../../lib/iCoWeABaseUI/components/inputs/Label/Label';
import { upperCaseFirstLetter } from '../../lib/iCoWeAUtilsUI/utils/utils';

type TextfieldProps = InputProps & {
  labelVariant?: 'floating' | 'text' | 'none';
  indexId?: string;
  containerProps?: FormControlProps;
  labelProps?: LabelProps;
};

const Textfield: FC<TextfieldProps> = ({
  labelVariant = 'floating',
  invalid,
  indexId,
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
          >{`${upperCaseFirstLetter(indexId).replace('-', ' ')}`}</Label>
        )}
        <Input
          block
          label={
            labelVariant === 'floating' &&
            indexId &&
            `${upperCaseFirstLetter(indexId).replace('-', ' ')}`
          }
          id={indexId}
          name={indexId}
          {...restProps}
        />
        {invalid && indexId && `Invalid ${indexId.replace('-', ' ')}`}
      </>
    )}
  </FormControl>
);

export default Textfield;
