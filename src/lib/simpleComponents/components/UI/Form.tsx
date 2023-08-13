import React, { forwardRef, useContext } from 'react';
import {
  Form as BaseForm,
  type FormProps as BaseFormProps
} from 'react-router-dom';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';

interface FormProps extends BaseFormProps {
  columns?: boolean;
}

const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ columns, className, ...restProps }, ref) => {
    const { config } = useContext(themeContext);
    const { defaultProps, styles } = config.form;

    columns = columns ?? defaultProps.columns;

    const mergedClassName = twMerge(
      mergeClasses(styles.base, columns && styles.columns, className)
    );

    return (
      <BaseForm
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }
);

Form.displayName = 'Form';

export default Form;
