import React, {
  type TextareaHTMLAttributes,
  type ReactNode,
  type MutableRefObject,
  forwardRef,
  useRef,
  useState,
  useImperativeHandle
} from 'react';

import useTheme from '../../../../iCoWeAUI/hooks/useTheme';
import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useAddEventListener from '../../../hooks/useAddEventListener';
import useConfig from '../../../hooks/useConfig';
import useMergeRefs from '../../../hooks/useMergeRefs';
import TextareaClearance, { type TextareaClearanceProps } from './TextareaClearance';
import TextareaContainer, { type TextareaContainerProps } from './TextareaContainer';
import TextareaDecorator, { type TextareaDecoratorProps } from './TextareaDecorator';
import TextareaFieldset, { type TextareaFieldsetProps } from './TextareaFieldset';
import TextareaLabel, { type TextareaLabelProps } from './TextareaLabel';
import textareaConfig from './textareaConfig';

export type TextareaDefaultProps = {
  variant?: InputVariants;
  color?: Colors;
  block?: boolean;
  valid?: boolean;
  invalid?: boolean;
};

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> &
TextareaDefaultProps & {
  label?: ReactNode;
  leftDecoration?: ReactNode;
  rightDecoration?: ReactNode;
  containerProps?: TextareaContainerProps;
  fieldsetProps?: TextareaFieldsetProps;
  leftDecoratorProps?: TextareaDecoratorProps;
  rightDecoratorProps?: TextareaDecoratorProps;
  labelProps?: TextareaLabelProps;
  clearanceProps?: TextareaClearanceProps;
  textareaRef?: MutableRefObject<HTMLTextAreaElement> | null;
};

const Textarea = forwardRef<HTMLDivElement, TextareaProps>((props, forwardedRef) => {
  const {
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
    textareaRef,
    placeholder,
    id,
    disabled,
    value,
    defaultClassName,
    className,
    ...restProps
  } = useConfig('textarea', textareaConfig.defaultProps, props);
  const theme = useTheme();

  const ref = useRef<HTMLTextAreaElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mergedRefs = useMergeRefs(ref, textareaRef);

  const [isFocused, setIsFocused] = useState(false);

  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(
    forwardedRef,
    () => containerRef.current,
    []
  );

  /* --- Set event handlers --- */
  const focusHandler = (event: FocusEvent): void => {
    if (ref.current === event.target) {
      setIsFocused(true);
    }
  };

  const blurHandler = (event: FocusEvent): void => {
    if (event.relatedTarget === null || event.relatedTarget !== containerRef.current) {
      setIsFocused(false);
    }
  };

  useAddEventListener(ref, 'focus', focusHandler);

  useAddEventListener(ref, 'blur', blurHandler);

  /* --- Set classes --- */
  const styles = textareaConfig.styles.textarea;

  const mergedClassName = mergeClasses(styles.base, styles.colors[theme], className);

  return (
    <TextareaContainer
      block={block}
      isFocused={isFocused}
      disabled={disabled}
      textareaRef={ref}
      defaultClassName={defaultClassName}
      ref={containerRef}
      {...containerProps}
    >
      <TextareaDecorator
        position="left"
        variant={variant}
        theme={theme}
        color={color}
        valid={valid}
        invalid={invalid}
        disabled={disabled}
        {...leftDecoratorProps}
      >
        {leftDecoration}
      </TextareaDecorator>
      <TextareaFieldset
        variant={variant}
        theme={theme}
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
            variant={variant}
            theme={theme}
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
          placeholder={isFocused ? placeholder : undefined}
          id={id}
          disabled={disabled}
          value={value}
          className={mergedClassName}
          ref={mergedRefs}
          {...restProps}
        />
      </TextareaFieldset>
      <TextareaDecorator
        position="right"
        variant={variant}
        theme={theme}
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
