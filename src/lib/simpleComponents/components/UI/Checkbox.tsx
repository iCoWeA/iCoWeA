import React, {
  forwardRef,
  useContext,
  type BaseHTMLAttributes,
  type MutableRefObject,
  type InputHTMLAttributes,
  type ReactNode
} from 'react';
import { type CheckboxColors } from '../../configs/checkboxConfig';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';

export interface CheckboxDefaultProps {
  color?: CheckboxColors;
  valid?: boolean;
  invalid?: boolean;
  icon?: ReactNode;
  rootProps?: BaseHTMLAttributes<HTMLDivElement>;
}

export interface CheckboxProps
  extends CheckboxDefaultProps,
  InputHTMLAttributes<HTMLInputElement> {
  inputRef?: MutableRefObject<HTMLInputElement | undefined>;
}

const Checkbox = forwardRef<HTMLDivElement, CheckboxProps>(
  (
    {
      color,
      valid,
      invalid,
      icon,
      rootProps,
      checked: isInputChecked,
      disabled: isInputDisabled,
      type: inputType = 'checkbox',
      className: inputClassNames,
      children: inputChildren,
      inputRef,
      ...restInputProps
    },
    rootRef
  ) => {
    const { theme, config } = useContext(themeContext);
    const { defaultProps, styles } = config.checkbox;
    const rootStyles = styles.root;
    const inputStyles = styles.input;
    let iconNode: ReactNode;

    color = color ?? defaultProps.color;
    valid = valid ?? defaultProps.valid;
    invalid = invalid ?? defaultProps.invalid;
    icon = icon ?? defaultProps.icon;
    rootProps = rootProps ?? defaultProps.rootProps;

    /* Set root props */
    const { className: rootClassName, ...restRootProps } = rootProps;

    const mergedRootClassName = twMerge(
      mergeClasses(rootStyles.base, rootClassName)
    );

    /* Set input props */
    const mergedInputClassName = twMerge(
      mergeClasses(
        inputStyles.base,
        inputStyles.after,
        !invalid && !valid && inputStyles.colors[theme][color],
        valid && inputStyles.valid[theme],
        invalid && inputStyles.invalid[theme],
        inputClassNames
      )
    );

    const setInputRef: (element: HTMLInputElement) => void = (element) => {
      if (inputRef !== undefined) {
        inputRef.current = element;
      }
    };

    /* Set icon props */
    if (icon === null) {
      const iconStyles = styles.icon;

      const mergedIconClassName = twMerge(
        mergeClasses(iconStyles.base, iconStyles.colors[theme][color])
      );

      iconNode = (
        <svg
          className={mergedIconClassName}
          viewBox="0 0 24 24"
        >
          <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
        </svg>
      );
    }

    return (
      <div
        className={mergedRootClassName}
        ref={rootRef}
        {...restRootProps}
      >
        <input
          disabled={isInputDisabled}
          checked={isInputChecked}
          type={inputType}
          className={mergedInputClassName}
          ref={setInputRef}
          {...restInputProps}
        />
        {iconNode}
        {inputChildren}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
