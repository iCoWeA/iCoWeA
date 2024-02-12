import React, { type ReactNode, type FC } from 'react';

import FormControl, {
  type FormControlProps
} from '../../lib/iCoWeABaseUI/components/inputs/FormControl/FormControl';
import Label, { type LabelProps } from '../../lib/iCoWeABaseUI/components/inputs/Label/Label';
import { upperCaseFirstLetter } from '../../lib/iCoWeAUtilsUI/utils/utils';

type TextfieldProps = FormControlProps & {
  indexId?: string;
  errorText?: ReactNode;
  labelProps?: LabelProps;
};

const Textfield: FC<TextfieldProps> = ({
  indexId,
  errorText,
  labelProps,
  children,
  ...restProps
}) => (
  <FormControl
    color="error"
    {...restProps}
  >
    {indexId && (
      <Label
        htmlFor={indexId}
        {...labelProps}
      >{`${upperCaseFirstLetter(indexId).replace('-', ' ')}`}</Label>
    )}
    {children}
    {errorText}
  </FormControl>
);

export default Textfield;
