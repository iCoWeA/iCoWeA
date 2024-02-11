import React, { forwardRef, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import Stack, { type StackProps } from '../../layouts/Stack/Stack';
import formControlConfig from './formControlConfig';

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
  const mergedClassName = useMemo(() => {
    const styles = formControlConfig.styles;

    return mergeClasses(styles.base, defaultClassName, className);
  }, [defaultClassName, className]);

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
