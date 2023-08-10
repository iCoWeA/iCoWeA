import React, {
  forwardRef,
  useContext,
  type BaseHTMLAttributes,
  type MutableRefObject,
  type InputHTMLAttributes,
  type ReactNode
} from 'react';
import { twMerge } from 'tailwind-merge';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/styleHelper';

export interface CheckboxDefaultProps {
  valid?: boolean;
  invalid?: boolean;
  color?: Colors;
  uncheckedIcon?: ReactNode;
  checkedIcon?: ReactNode;
  containerProps?: BaseHTMLAttributes<HTMLDivElement>;
  uncheckedIconProps?: BaseHTMLAttributes<HTMLDivElement>;
  checkedIconProps?: BaseHTMLAttributes<HTMLDivElement>;
}

export interface CheckboxProps
  extends CheckboxDefaultProps,
  InputHTMLAttributes<HTMLInputElement> {
  inputRef?: MutableRefObject<HTMLInputElement | undefined>;
}

const Checkbox = forwardRef<HTMLDivElement, CheckboxProps>(
  (
    {
      valid,
      invalid,
      color,
      uncheckedIcon,
      checkedIcon,
      checked,
      disabled,
      type = 'checkbox',
      className: inputClassNames,
      containerProps: rootProps,
      uncheckedIconProps,
      checkedIconProps,
      inputRef,
      ...restInputProps
    },
    rootRef
  ) => {
    const { theme, config } = useContext(themeContext);
    const { defaultProps, styles } = config.checkbox;
    const containerClasses = styles.root;
    const inputClasses = styles.input;

    let uncheckedIconNode: ReactNode;
    let checkedIconNode: ReactNode;

    valid = valid ?? defaultProps.valid;
    invalid = invalid ?? defaultProps.invalid;
    color = color ?? defaultProps.color;
    uncheckedIcon = uncheckedIcon ?? defaultProps.uncheckedIcon;
    checkedIcon = checkedIcon ?? defaultProps.checkedIcon;
    rootProps = rootProps ?? defaultProps.containerProps;

    /* Set container props */
    const { className: containerClassNames, ...restContainerProps } = rootProps;

    const containerClassName = twMerge(
      mergeClasses(containerClasses.base, containerClassNames)
    );

    /* Set input props */
    const inputClassName = twMerge(
      mergeClasses(
        inputClasses.base,
        inputClasses.before,
        !invalid && !valid && inputClasses.colors[theme][color],
        valid && inputClasses.colors[theme].success,
        invalid && inputClasses.colors[theme].error,
        inputClassNames
      )
    );

    const setInputRef: (element: HTMLInputElement) => void = (element) => {
      if (inputRef !== undefined) {
        inputRef.current = element;
      }
    };

    /* Set unchecked icon props */
    if (uncheckedIcon !== null) {
      uncheckedIconProps =
        uncheckedIconProps ?? defaultProps.uncheckedIconProps;

      const { className: uncheckedIconClassNames, ...restUncheckedIconProps } =
        uncheckedIconProps;

      const uncheckedIconClasses = styles.uncheckedIcon;
      const uncheckedIconClassName = twMerge(
        mergeClasses(
          uncheckedIconClasses.base,
          !invalid && !valid && uncheckedIconClasses.colors[theme][color],
          valid && uncheckedIconClasses.colors[theme].error,
          invalid && uncheckedIconClasses.colors[theme].success,
          uncheckedIconClassNames
        )
      );

      uncheckedIconNode = (
        <span
          className={uncheckedIconClassName}
          {...restUncheckedIconProps}
        >
          {uncheckedIcon}
        </span>
      );
    }

    /* Set checked icon props */
    if (checkedIcon !== null) {
      checkedIconProps = checkedIconProps ?? defaultProps.checkedIconProps;

      const { className: checkedIconClassNames, ...restCheckedIconProps } =
        checkedIconProps;

      const checkedIconClasses = styles.checkedIcon;
      const checkedIconClassName = twMerge(
        mergeClasses(
          checkedIconClasses.base,
          !invalid && !valid && checkedIconClasses.colors[theme][color],
          valid && checkedIconClasses.colors[theme].error,
          invalid && checkedIconClasses.colors[theme].success,
          checkedIconClassNames
        )
      );

      checkedIconNode = (
        <span
          className={checkedIconClassName}
          {...restCheckedIconProps}
        >
          {checkedIcon}
        </span>
      );
    }

    return (
      <div
        className={containerClassName}
        ref={rootRef}
        {...restContainerProps}
      >
        <input
          disabled={disabled}
          checked={checked}
          type={type}
          className={inputClassName}
          ref={setInputRef}
          {...restInputProps}
        />
        {uncheckedIconNode}
        {checkedIconNode}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
