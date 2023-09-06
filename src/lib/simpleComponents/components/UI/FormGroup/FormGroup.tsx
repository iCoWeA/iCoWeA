import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import formGroupConfig from '../../../configs/formGroupConfig';
import { mergeClasses } from '../../../utils/propsHelper';

export interface FormGroupProps extends BaseHTMLAttributes<HTMLDivElement> {
  row?: boolean;
}

const FormGroup = forwardRef<HTMLDivElement, FormGroupProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = formGroupConfig.styles;
  const { row, className, ...restProps } = { ...formGroupConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, row && styles.row, className);

  return (
    <div
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

FormGroup.displayName = 'FormGroup';

export default FormGroup;
