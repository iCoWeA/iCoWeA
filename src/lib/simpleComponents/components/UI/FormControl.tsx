import React, { type BaseHTMLAttributes, type FC, type ReactNode, forwardRef } from 'react';
import formControlConfig from '../../configs/formControlConfig';
import { mergeClasses } from '../../utils/propsHelper';

/********************************************************************************
 *
 *   Label container
 *
 */
interface HelperTextContainerProps extends BaseHTMLAttributes<HTMLSpanElement> {}

const HelperTextContainer: FC<HelperTextContainerProps> = ({ className, ...restProps }) => {
  /* --- Set default props --- */
  const styles = formControlConfig.styles.helperTextContainer;

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <span
      className={mergedClassName}
      {...restProps}
    />
  );
};

/********************************************************************************
 *
 *   Form Control
 *
 */
export interface FormControlProps extends BaseHTMLAttributes<HTMLDivElement> {
  helperText?: ReactNode;
}

const FormControl = forwardRef<HTMLDivElement, FormControlProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = formControlConfig.styles.container;
  const { helperText, className, children, ...restProps } = { ...props };

  /* --- Set helper text props --- */
  let helperTextContainerNode: ReactNode;

  if (helperText !== undefined) {
    helperTextContainerNode = <HelperTextContainer>{helperText}</HelperTextContainer>;
  }

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <div
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      {children}
      {helperTextContainerNode}
    </div>
  );
});

FormControl.displayName = 'FormControl';

export default FormControl;
