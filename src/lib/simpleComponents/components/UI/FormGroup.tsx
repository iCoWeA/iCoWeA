import React, { forwardRef, useContext, type BaseHTMLAttributes } from 'react';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';

export interface FormGroupDefaultProps {
  row?: boolean;
}

export interface FormGroupProps
  extends FormGroupDefaultProps,
  BaseHTMLAttributes<HTMLDivElement> {}

const FormGroup = forwardRef<HTMLDivElement, FormGroupProps>(
  ({ row, className, ...restProps }, ref) => {
    const { config } = useContext(themeContext);
    const { defaultProps, styles } = config.formGroup;

    row = row ?? defaultProps.row;

    const mergedClassName = twMerge(
      mergeClasses(styles.base, row && styles.row, className)
    );

    return (
      <div
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }
);

FormGroup.displayName = 'FormGroup';

export default FormGroup;
