import React, { forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import Stack, { type StackProps } from '../../layouts/Stack/Stack';
import formControlConfig from './formControlConfig';

export type FormControlDefauProps = {
  align?: AlignItems;
  gap?: Gaps;
};

export type FormControlProps = StackProps & FormControlDefauProps;

const FormControl = forwardRef<HTMLDivElement, FormControlProps>((props, ref) => {
  const { ...restProps } = useConfig('formControl', formControlConfig.defaultProps, props);

  return (
    <Stack
      justify="start"
      ref={ref}
      {...restProps}
    />
  );
});

FormControl.displayName = 'FormControl';

export default FormControl;
