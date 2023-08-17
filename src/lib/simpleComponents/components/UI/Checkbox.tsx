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
import { type CheckboxColors } from '../../configs/checkboxConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses, setDefaultProps } from '../../utils/propsHelper';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  color?: CheckboxColors;
  valid?: boolean;
  invalid?: boolean;
  icon?: ReactNode;
  rootProps?: BaseHTMLAttributes<HTMLDivElement>;
  iconProps?: SVGAttributes<SVGSVGElement>;
  inputRef?: MutableRefObject<HTMLInputElement> | null;
  checked?: boolean;
  disabled?: boolean;
  type?: HTMLInputTypeAttribute;
  className?: string;
  children?: ReactNode;
}

const Checkbox = forwardRef<HTMLDivElement, CheckboxProps>((inputProps, rootRef) => {
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.checkbox;
  const {
    color,
    valid,
    invalid,
    icon,
    rootProps,
    iconProps,
    inputRef,
    checked: inputChecked,
    disabled: inputDisabled,
    type: inputType,
    className: inputClassNames,
    children: inputChildren,
    ...restInputProps
  } = setDefaultProps(inputProps, defaultProps);
  let iconNode: ReactNode;

  /* Set root props */
  const rootStyles = styles.root;
  const { className: rootClassName, ...restRootProps } = rootProps;

  const mergedRootClassName = mergeClasses(rootStyles.base, rootClassName);

  /* Set input props */
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

  /* Set icon props */
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
      className={mergedRootClassName}
      ref={rootRef}
      {...restRootProps}
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
