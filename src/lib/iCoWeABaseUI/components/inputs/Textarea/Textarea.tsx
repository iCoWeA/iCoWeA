import React, {
  type FocusEvent,
  type MutableRefObject,
  type ReactNode,
  type TextareaHTMLAttributes,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from 'react';

import useTheme from '../../../../iCoWeAUI/hooks/useTheme';
import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import useMergeRefs from '../../../hooks/useMergeRefs';
import TextareaClearance, { type TextareaClearanceDefaultProps } from './TextareaClearance';
import TextareaContainer, { type TextareaContainerDefaultProps } from './TextareaContainer';
import TextareaDecorator, { type TextareaDecoratorDefaultProps } from './TextareaDecorator';
import TextareaFieldset, { type TextareaFieldsetDefaultProps } from './TextareaFieldset';
import TextareaLabel, { type TextareaLabelDefaultProps } from './TextareaLabel';
import textareaConfig from './textareaConfig';

export type TextareaDefaultProps = {
  variant?: InputVariants;
  color?: DefaultTextColors;
  block?: boolean;
};

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
TextareaDefaultProps & {
  valid?: boolean;
  invalid?: boolean;
  label?: ReactNode;
  leftDecoration?: ReactNode;
  rightDecoration?: ReactNode;
  containerProps?: TextareaContainerDefaultProps;
  fieldsetProps?: TextareaFieldsetDefaultProps;
  leftDecoratorProps?: TextareaDecoratorDefaultProps;
  rightDecoratorProps?: TextareaDecoratorDefaultProps;
  labelProps?: TextareaLabelDefaultProps;
  clearanceProps?: TextareaClearanceDefaultProps;
  inputRef?: MutableRefObject<HTMLTextAreaElement> | null;
};

const Textarea = forwardRef<HTMLDivElement, TextareaProps>((props, forwardedRef) => {
  const {
    onFocus,
    onBlur,
    variant,
    color,
    block,
    valid,
    invalid,
    label,
    leftDecoration,
    rightDecoration,
    containerProps,
    fieldsetProps,
    leftDecoratorProps,
    rightDecoratorProps,
    labelProps,
    clearanceProps,
    inputRef,
    defaultClassName,
    className,
    disabled,
    id,
    placeholder,
    value,
    ...restProps
  } = useConfig('textarea', textareaConfig.defaultProps, props);

  const theme = useTheme();

  const ref = useRef<HTMLTextAreaElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mergedRefs = useMergeRefs(ref, inputRef);

  const [isFocused, setIsFocused] = useState(false);

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
    forwardedRef,
    () => containerRef.current,
    []
  );

  /* --- Set event handlers --- */
  const focusHandler = useCallback((event: FocusEvent<HTMLTextAreaElement>): void => {
    setIsFocused(true);

    if (onFocus) {
      onFocus(event);
    }
  }, []);

  const blurHandler = useCallback(
    (event: FocusEvent<HTMLTextAreaElement>): void => {
      if (event.relatedTarget === null || event.relatedTarget !== containerRef.current) {
        setIsFocused(false);
      }

      if (onBlur) {
        onBlur(event);
      }
    },
    [onBlur]
  );

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = textareaConfig.styles.textarea;

    return mergeClasses(styles.base, styles.colors[theme][color], defaultClassName, className);
  }, [color, theme, defaultClassName, className]);

  return (
    <TextareaContainer
      block={block}
      isFocused={isFocused}
      inputRef={ref}
      disabled={disabled}
      value={value}
      ref={containerRef}
      {...containerProps}
    >
      <TextareaDecorator
        placement="left"
        theme={theme}
        inputVariant={variant}
        color={color}
        valid={valid}
        invalid={invalid}
        disabled={disabled}
        {...leftDecoratorProps}
      >
        {leftDecoration}
      </TextareaDecorator>
      <TextareaFieldset
        theme={theme}
        inputVariant={variant}
        color={color}
        valid={valid}
        invalid={invalid}
        disabled={disabled}
        {...fieldsetProps}
      >
        {label && variant === 'outlined' && (
          <TextareaClearance {...clearanceProps}>{label}</TextareaClearance>
        )}
        {label && (
          <TextareaLabel
            theme={theme}
            variant={variant}
            color={color}
            valid={valid}
            invalid={invalid}
            htmlFor={id}
            disabled={disabled}
            {...labelProps}
          >
            {label}
          </TextareaLabel>
        )}
        <textarea
          onFocus={focusHandler}
          onBlur={blurHandler}
          className={mergedClassName}
          disabled={disabled}
          id={id}
          placeholder={isFocused ? placeholder : undefined}
          value={value}
          ref={mergedRefs}
          {...restProps}
        />
      </TextareaFieldset>
      <TextareaDecorator
        placement="right"
        theme={theme}
        inputVariant={variant}
        color={color}
        valid={valid}
        invalid={invalid}
        disabled={disabled}
        {...rightDecoratorProps}
      >
        {rightDecoration}
      </TextareaDecorator>
    </TextareaContainer>
  );
});

Textarea.displayName = 'Textarea';

export default Textarea;
