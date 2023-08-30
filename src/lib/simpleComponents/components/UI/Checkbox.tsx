import React, {
  forwardRef,
  useContext,
  type InputHTMLAttributes,
  type ReactNode,
  type BaseHTMLAttributes,
  type HTMLInputTypeAttribute,
  type MutableRefObject,
  type SVGAttributes
} from 'react';
import themeContext from '../../contexts/theme';
import { mergeClasses, mergeProps } from '../../utils/propsHelper';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  color?: Colors;
  valid?: boolean;
  invalid?: boolean;
  icon?: ReactNode;
  containerProps?: BaseHTMLAttributes<HTMLDivElement>;
  iconProps?: SVGAttributes<SVGSVGElement>;
  inputRef?: MutableRefObject<HTMLInputElement> | null;
  checked?: boolean;
  disabled?: boolean;
  type?: HTMLInputTypeAttribute;
  className?: string;
  children?: ReactNode;
}

const Checkbox = forwardRef<HTMLDivElement, CheckboxProps>((inputProps, containerRef) => {
  /* --- Set default props --- */
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.checkbox;
  const {
    color,
    valid,
    invalid,
    icon,
    containerProps,
    iconProps,
    inputRef,
    checked: inputChecked,
    disabled: inputDisabled,
    type: inputType,
    className: inputClassNames,
    children: inputChildren,
    ...restInputProps
  } = mergeProps(defaultProps, inputProps);

  /* --- Set container props --- */
  const containerStyles = styles.container;
  const { className: containerClassName, ...restContainerProps } = containerProps;

  const mergedContainerClassName = mergeClasses(containerStyles.base, containerClassName);

  /* --- Set input props --- */
  const inputStyles = styles.input;
  const mergedInputClassName = mergeClasses(
    inputStyles.base,
    inputStyles.after,
    !valid && !invalid && inputStyles.colors[theme][color],
    valid && inputStyles.valid[theme],
    invalid && inputStyles.invalid[theme],
    inputClassNames
  );

  const setInputRef = (element: HTMLInputElement): void => {
    if (inputRef !== undefined && inputRef !== null) {
      inputRef.current = element;
    }
  };

  /* --- Set icon props --- */
  let iconNode: ReactNode;

  if (icon === undefined) {
    const iconStyles = styles.icon;
    const { className: iconClassName, ...restIconProps } = iconProps;

    const mergedIconClassName = mergeClasses(iconStyles.base, iconStyles.colors[theme][color], iconClassName);

    iconNode = (
      <svg
        className={mergedIconClassName}
        viewBox="0 0 24 24"
        {...restIconProps}
      >
        <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
      </svg>
    );
  }

  return (
    <div
      className={mergedContainerClassName}
      ref={containerRef}
      {...restContainerProps}
    >
      <input
        checked={inputChecked}
        disabled={inputDisabled}
        type={inputType}
        className={mergedInputClassName}
        ref={setInputRef}
        {...restInputProps}
      />
      {iconNode}
      {inputChildren}
    </div>
  );
});

Checkbox.displayName = 'Checkbox';

export default Checkbox;
