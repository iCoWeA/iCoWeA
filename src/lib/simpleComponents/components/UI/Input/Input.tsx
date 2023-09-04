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
  useReducer,
  useCallback,
  useEffect,
  type FocusEvent
} from 'react';
import inputConfig from '../../../configs/inputConfig';
import { deepClone, mergeClasses } from '../../../utils/propsHelper';
import themeContext from '../../../contexts/theme';
import useOutsideClick from '../../../hooks/useOutsideClick';
import InputContainer from './InputContainer';
import InputAdornmentContainer from './InputAdornmentContainer';
import InputFieldset from './InputFieldset';
import InputLabel from './InputLabel';
import InputLegend from './InputLegend';

interface State {
  isShifted: boolean;
  isFocused: boolean;
}

interface Action {
  payload: {
    isShifted?: boolean;
    isFocused?: boolean;
  };
}

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

const reducer = (prevState: State, { payload: { isShifted, isFocused } }: Action): State => {
  const state = deepClone(prevState);

  state.isShifted = isShifted ?? state.isShifted;
  state.isFocused = isFocused ?? state.isFocused;

  return state;
};

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
  const initialState = {
    isShifted: value !== '' || (!disabled && autoFocus),
    isFocused: !disabled && autoFocus
  };
  const [{ isShifted, isFocused }, dispatch] = useReducer(reducer, initialState);

  /* --- Set outside click action --- */
  const outsideClickHandler = useCallback(
    (event: MouseEvent) => {
      const isClickedInside = componentsRef.current.container?.contains(event.target as Node) ?? false;

      if (isClickedInside) {
        componentsRef.current.input?.focus();
      }

      if (!isClickedInside && value === '' && (isShifted || isFocused)) {
        dispatch({ payload: { isShifted: false, isFocused: false } });
      }

      if (!isClickedInside && value !== '' && isFocused) {
        dispatch({ payload: { isFocused: false } });
      }
    },
    [value, isShifted, isFocused]
  );

  useOutsideClick(outsideClickHandler, !disabled);

  /* -- Set autofocus state --- */
  useEffect(() => {
    if (autoFocus && !disabled) {
      dispatch({ payload: { isShifted: true, isFocused: true } });
    }
  }, [autoFocus, disabled]);

  /* -- Set disabled state --- */
  useEffect(() => {
    if (disabled && value === '' && (isShifted || isFocused)) {
      dispatch({ payload: { isShifted: false, isFocused: false } });
    }

    if (disabled && value !== '' && isFocused) {
      dispatch({ payload: { isFocused: false } });
    }
  }, [disabled, value, isShifted, isFocused]);

  /* -- Set value state --- */
  useEffect(() => {
    if (value === '' && isShifted && !isFocused) {
      dispatch({ payload: { isShifted: false } });
    }

    if (value !== '' && !isShifted) {
      dispatch({ payload: { isShifted: true } });
    }
  }, [value, isShifted, isFocused]);

  /* --- Set container props --- */
  const setContainerRef = (element: HTMLDivElement): void => {
    componentsRef.current.container = element;
  };

  /* --- Set props --- */
  const focusHandler = (event: FocusEvent<HTMLInputElement>): void => {
    if (!isShifted || !isFocused) {
      dispatch({ payload: { isShifted: true, isFocused: true } });
    }

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
      shifted={isShifted}
      focused={isFocused}
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
