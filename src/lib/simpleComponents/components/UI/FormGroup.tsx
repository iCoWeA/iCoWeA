import React, { forwardRef, useContext, type BaseHTMLAttributes } from 'react';
import { type FormGroupProps } from '../../configs/formGroup';
import themeContext from '../../contexts/theme';
import { mergeClasses, setDefaultProps } from '../../utils/propsHelper';

const FormGroup = forwardRef<HTMLDivElement, FormGroupProps & BaseHTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { config } = useContext(themeContext);
  const { defaultProps, styles } = config.formGroup;
  const { row, className, ...restProps } = setDefaultProps(defaultProps, props);

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
