import React, { forwardRef, useContext } from 'react';
import { Form as BaseForm, type FormProps as BaseFormProps } from 'react-router-dom';
import { type FormProps } from '../../configs/formConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses, setDefaultProps } from '../../utils/propsHelper';

const Form = forwardRef<HTMLFormElement, FormProps & BaseFormProps>((props, ref) => {
  const { config } = useContext(themeContext);
  const { defaultProps, styles } = config.form;
  const { columns, className, ...restProps } = setDefaultProps(defaultProps, props);

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
