import React, {
  type BaseHTMLAttributes,
  type FieldsetHTMLAttributes,
  type InputHTMLAttributes,
  type LabelHTMLAttributes,
  type MutableRefObject,
  type ReactNode,
  forwardRef,
  useContext,
  useRef,
  useImperativeHandle,
  useCallback,
  useEffect,
  type FocusEvent,
  useState
} from 'react';
import inputConfig from '../../../configs/inputConfig';
import { mergeClasses } from '../../../utils/propsHelper';
import themeContext from '../../../contexts/theme';
import useOutsideClick from '../../../hooks/useOutsideClick';
import InputContainer from './InputContainer';
import InputAdornmentContainer from './InputAdornmentContainer';
import InputFieldset from './InputFieldset';
import InputLabel from './InputLabel';
import InputLegend from './InputLegend';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariants;
  color?: Colors;
  valid?: boolean;
  invalid?: boolean;
  label?: ReactNode;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  containerProps?: BaseHTMLAttributes<HTMLDivElement>;
  startAdornmentContainerProps?: BaseHTMLAttributes<HTMLDivElement>;
  fieldsetProps?: FieldsetHTMLAttributes<HTMLFieldSetElement>;
  endAdornmentContainerProps?: BaseHTMLAttributes<HTMLDivElement>;
  legendProps?: BaseHTMLAttributes<HTMLLegendElement>;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  inputRef?: MutableRefObject<HTMLInputElement> | null;
}

interface InputRefs {
  container: HTMLDivElement | null;
  input: HTMLInputElement | null;
}

const Input = forwardRef<HTMLDivElement, InputProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = inputConfig.styles.input;
  const {
    variant,
    color,
    valid,
    invalid,
    label,
    startAdornment,
    endAdornment,
    containerProps,
    startAdornmentContainerProps,
    fieldsetProps,
    endAdornmentContainerProps,
    legendProps,
    labelProps,
    inputRef,
    onFocus,
    autoFocus,
    disabled,
    value,
    className,
    ...restProps
  } = { ...inputConfig.defaultProps, ...props };

  /* --- Set refs --- */
  const componentsRef = useRef<InputRefs>({ container: null, input: null });

  /* --- Set imperative handler --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => componentsRef.current.container, []);

  /* --- Set states --- */
  const [isFocused, setIsFocused] = useState(!disabled && autoFocus);

  /* --- Set outside click action --- */
  const outsideClickHandler = useCallback((event: MouseEvent) => {
    const isClickedInside = componentsRef.current.container?.contains(event.target as Node) ?? false;

    setIsFocused(isClickedInside);
  }, []);

  useOutsideClick(outsideClickHandler, !disabled);

  /* -- Set autofocus state --- */
  useEffect(() => {
    if (autoFocus && !disabled) {
      setIsFocused(true);
    }
  }, [autoFocus, disabled]);

  /* -- Set disabled state --- */
  useEffect(() => {
    if (disabled) {
      setIsFocused(false);
    }
  }, [disabled]);

  /* --- Set container props --- */
  const setContainerRef = (element: HTMLDivElement): void => {
    componentsRef.current.container = element;
  };

  /* --- Set props --- */
  const focusHandler = (event: FocusEvent<HTMLInputElement>): void => {
    setIsFocused(true);

    if (onFocus !== undefined) {
      onFocus(event);
    }
  };

  const setInputRef = (element: HTMLInputElement): void => {
    componentsRef.current.input = element;

    if (inputRef !== undefined && inputRef !== null) {
      inputRef.current = element;
    }
  };

  const mergedClassName = mergeClasses(
    styles.base,
    !valid && !invalid && styles.colors[theme][color],
    valid && styles.valid[theme],
    invalid && styles.invalid[theme],
    className
  );

  /* --- Set label props --- */
  let labelNode = label;

  if (labelNode !== undefined) {
    labelNode = (
      <InputLabel
        variant={variant}
        color={color}
        valid={valid}
        invalid={invalid}
        {...labelProps}
      >
        {label}
      </InputLabel>
    );
  }

  /* --- Set legend props --- */
  let legendNode: ReactNode;

  if (labelNode !== undefined && variant === 'outlined') {
    legendNode = <InputLegend {...legendProps}>{label}</InputLegend>;
  }

  return (
    <InputContainer
      open={isFocused}
      value={value}
      ref={setContainerRef}
      {...containerProps}
    >
      <InputAdornmentContainer
        position="start"
        variant={variant}
        color={color}
        valid={valid}
        invalid={invalid}
        {...startAdornmentContainerProps}
      >
        {startAdornment}
      </InputAdornmentContainer>
      <InputFieldset
        variant={variant}
        color={color}
        valid={valid}
        invalid={invalid}
        disabled={disabled}
        {...fieldsetProps}
      >
        <input
          onFocus={focusHandler}
          autoFocus={autoFocus}
          disabled={disabled}
          value={value}
          className={mergedClassName}
          ref={setInputRef}
          {...restProps}
        />
        {labelNode}
        {legendNode}
      </InputFieldset>
      <InputAdornmentContainer
        position="end"
        variant={variant}
        color={color}
        valid={valid}
        invalid={invalid}
        {...startAdornmentContainerProps}
      >
        {endAdornment}
      </InputAdornmentContainer>
    </InputContainer>
  );
});

Input.displayName = 'Input';

export default Input;
