import React, { forwardRef } from 'react';
import { Form as BaseForm, type FormProps as BaseFormProps } from 'react-router-dom';
import formConfig from '../../../configs/formConfig';
import { mergeClasses } from '../../../utils/propsHelper';

export interface FormProps extends BaseFormProps {
  columns?: boolean;
  className?: string;
}

const Form = forwardRef<HTMLFormElement, FormProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = formConfig.styles;
  const { columns, className, ...restProps } = { ...formConfig.defaultProps, ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, columns && styles.columns, className);

  return (
    <BaseForm
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Form.displayName = 'Form';

export default Form;