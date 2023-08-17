import React, { forwardRef, useContext } from 'react';
import { Form as BaseForm, type FormProps as BaseFormProps } from 'react-router-dom';
import themeContext from '../../contexts/theme';
import { mergeClasses, setDefaultProps } from '../../utils/propsHelper';

export interface FormProps extends BaseFormProps {
  columns?: boolean;
  className?: string;
}

const Form = forwardRef<HTMLFormElement, FormProps>((props, ref) => {
  const { config } = useContext(themeContext);
  const { defaultProps, styles } = config.form;
  const { columns, className, ...restProps } = setDefaultProps(props, defaultProps);

  /* Set props */
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
