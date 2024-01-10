import React, { forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import Stack, { type StackProps } from '../../layouts/Stack/Stack';
import formControlConfig from './formControlConfig';
import { mergeClasses } from '../../../utils/utils';

export type FormControlDefauProps = {
  align?: AlignItems;
  gap?: Gaps;
};

export type FormControlProps = StackProps & FormControlDefauProps;

const FormControl = forwardRef<HTMLDivElement, FormControlProps>((props, ref) => {
  const { defaultClassName, className, ...restProps } = useConfig(
    'formControl',
    formControlConfig.defaultProps,
    props
  );

  /* --- Set props --- */
  const styles = formControlConfig.styles;

  const mergedClassName = mergeClasses(styles.base, defaultClassName, className);

  return (
    <Stack
      justify="start"
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

FormControl.displayName = 'FormControl';

export default FormControl;
