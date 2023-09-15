import React, { type BaseHTMLAttributes, forwardRef } from 'react';
import dropdownBodyConfig from '../../configs/dropdownBodyConfig';
import { mergeClasses } from '../../utils/propsHelper';

export interface DropdownBodyProps extends BaseHTMLAttributes<HTMLUListElement> {}

const DropdownBody = forwardRef<HTMLUListElement, DropdownBodyProps>((props, ref) => {
  /* --- Set default props --- */
  const styles = dropdownBodyConfig.styles;
  const { className, ...restProps } = { ...props };

  /* --- Set props --- */
  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <ul
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

DropdownBody.displayName = 'DropdownBody';

export default DropdownBody;
