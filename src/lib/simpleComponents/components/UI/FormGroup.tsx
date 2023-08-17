import React, { forwardRef, useContext, type BaseHTMLAttributes } from 'react';
import themeContext from '../../contexts/theme';
import { mergeClasses, setDefaultProps } from '../../utils/propsHelper';

export interface FormGroupProps extends BaseHTMLAttributes<HTMLDivElement> {
  row?: boolean;
  className?: string;
}

const FormGroup = forwardRef<HTMLDivElement, FormGroupProps>((props, ref) => {
  const { config } = useContext(themeContext);
  const { defaultProps, styles } = config.formGroup;
  const { row, className, ...restProps } = setDefaultProps(props, defaultProps);

  /* Set props */
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
