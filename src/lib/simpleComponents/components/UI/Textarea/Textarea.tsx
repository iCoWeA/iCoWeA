import React, {
  type BaseHTMLAttributes,
  type FieldsetHTMLAttributes,
  type TextareaHTMLAttributes,
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
import textareaConfig from '../../../configs/textareaConfig';
import { deepClone, mergeClasses } from '../../../utils/propsHelper';
import themeContext from '../../../contexts/theme';
import useOutsideClick from '../../../hooks/useOutsideClick';
import TextareaContainer from './TextareaContainer';
import TextareaAdornmentContainer from './TextareaAdornmentContainer';
import TextareaFieldset from './TextareaFieldset';
import TextareaLabel from './TextareaLabel';
import TextareaLegend from './TextareaLegend';

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

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
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
  textareaRef?: MutableRefObject<HTMLTextAreaElement> | null;
}

interface TextareaRefs {
  container: HTMLDivElement | null;
  textarea: HTMLTextAreaElement | null;
}

const reducer = (prevState: State, { payload: { isShifted, isFocused } }: Action): State => {
  const state = deepClone(prevState);

  state.isShifted = isShifted ?? state.isShifted;
  state.isFocused = isFocused ?? state.isFocused;

  return state;
};

const Textarea = forwardRef<HTMLDivElement, TextareaProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = textareaConfig.styles.textarea;
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
    textareaRef,
    onFocus,
    autoFocus,
    disabled,
    value,
    className,
    ...restProps
  } = { ...textareaConfig.defaultProps, ...props };

  /* --- Set refs --- */
  const componentsRef = useRef<TextareaRefs>({ container: null, textarea: null });

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
        componentsRef.current.textarea?.focus();
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
  const focusHandler = (event: FocusEvent<HTMLTextAreaElement>): void => {
    if (!isShifted || !isFocused) {
      dispatch({ payload: { isShifted: true, isFocused: true } });
    }

    if (onFocus !== undefined) {
      onFocus(event);
    }
  };

  const setTextareaRef = (element: HTMLTextAreaElement): void => {
    componentsRef.current.textarea = element;

    if (textareaRef !== undefined && textareaRef !== null) {
      textareaRef.current = element;
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
      <TextareaLabel
        variant={variant}
        color={color}
        valid={valid}
        invalid={invalid}
        {...labelProps}
      >
        {label}
      </TextareaLabel>
    );
  }

  /* --- Set legend props --- */
  let legendNode: ReactNode;

  if (labelNode !== undefined && variant === 'outlined') {
    legendNode = <TextareaLegend {...legendProps}>{label}</TextareaLegend>;
  }

  return (
    <TextareaContainer
      shifted={isShifted}
      focused={isFocused}
      ref={setContainerRef}
      {...containerProps}
    >
      <TextareaAdornmentContainer
        position="start"
        variant={variant}
        color={color}
        valid={valid}
        invalid={invalid}
        {...startAdornmentContainerProps}
      >
        {startAdornment}
      </TextareaAdornmentContainer>
      <TextareaFieldset
        variant={variant}
        color={color}
        valid={valid}
        invalid={invalid}
        disabled={disabled}
        {...fieldsetProps}
      >
        <textarea
          onFocus={focusHandler}
          autoFocus={autoFocus}
          disabled={disabled}
          value={value}
          className={mergedClassName}
          ref={setTextareaRef}
          {...restProps}
        />
        {labelNode}
        {legendNode}
      </TextareaFieldset>
      <TextareaAdornmentContainer
        position="end"
        variant={variant}
        color={color}
        valid={valid}
        invalid={invalid}
        {...startAdornmentContainerProps}
      >
        {endAdornment}
      </TextareaAdornmentContainer>
    </TextareaContainer>
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;
