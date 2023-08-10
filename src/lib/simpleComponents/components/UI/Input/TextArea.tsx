/* import React, {
  forwardRef,
  useContext,
  type BaseHTMLAttributes,
  type MutableRefObject,
  type TextareaHTMLAttributes,
  type ReactNode,
  type FieldsetHTMLAttributes,
  useState,
  type FocusEventHandler,
  type LabelHTMLAttributes,
  useEffect
} from 'react';
import { type TextareaVariants } from '../../configs/Textarea';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';

type States = 'default' | 'focused' | 'shifted';

export interface TextareaDefaultProps {
  variant?: TextareaVariants;
  valid?: boolean;
  invalid?: boolean;
  color?: Colors;
  label?: ReactNode;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  outerContainerProps?: BaseHTMLAttributes<HTMLDivElement>;
  containerProps?: FieldsetHTMLAttributes<HTMLFieldSetElement>;
  legendProps?: BaseHTMLAttributes<HTMLLegendElement>;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  startAdornmentProps?: BaseHTMLAttributes<HTMLDivElement>;
  endAdornmentProps?: BaseHTMLAttributes<HTMLDivElement>;
}

export interface TextareaProps
  extends TextareaDefaultProps,
  TextareaHTMLAttributes<HTMLTextAreaElement> {
  textareaRef?: MutableRefObject<HTMLTextAreaElement | undefined>;
}

const Textarea = forwardRef<HTMLDivElement, TextareaProps>(
  (
    {
      variant,
      valid,
      invalid,
      color,
      label,
      startAdornment,
      endAdornment,
      onFocus,
      onBlur,
      autoFocus,
      disabled,
      value: textareaValue,
      className: textareaClassNames,
      outerContainerProps: rootProps,
      containerProps,
      legendProps,
      labelProps,
      startAdornmentProps,
      endAdornmentProps,
      textareaRef,
      ...restTextareaProps
    },
    rootRef
  ) => {
    const { theme, config } = useContext(themeContext);
    const { defaultProps, styles } = config.textarea;
    const outerContainerClasses = styles.root;
    const containerClasses = styles.container;
    const textareaClasses = styles.textarea;

    let startAdornmentNode: ReactNode;
    let endAdornmentNode: ReactNode;
    let legendNode: ReactNode;

    variant = variant ?? defaultProps.variant;
    valid = valid ?? defaultProps.valid;
    invalid = invalid ?? defaultProps.invalid;
    color = color ?? defaultProps.color;
    label = label ?? defaultProps.label;
    startAdornment = startAdornment ?? defaultProps.startAdornment;
    endAdornment = endAdornment ?? defaultProps.endAdornment;
    rootProps = rootProps ?? defaultProps.outerContainerProps;
    containerProps = containerProps ?? defaultProps.containerProps;

    let initState: States = 'default';

    if (autoFocus === true) {
      initState = 'focused';
    } else if (textareaValue !== undefined && textareaValue !== '') {
      initState = 'shifted';
    }

    const [state, setState] = useState<States>(initState);

    useEffect(() => {
      if (textareaValue === '') {
        setState('default');
      }
    }, [textareaValue]);

    const { className: outerContainerClassNames, ...restOuterContainerProps } =
      rootProps;

    const outerContainerClassName = twMerge(
      mergeClasses(outerContainerClasses.base, outerContainerClassNames)
    );

    const {
      className: containerClassNames,
      disabled: _,
      ...restContainerProps
    } = containerProps;

    const containerClassName = twMerge(
      mergeClasses(
        containerClasses.base,
        !invalid && !valid && containerClasses.variants[variant][theme][color],
        valid && containerClasses.variants[variant][theme].success,
        invalid && containerClasses.variants[variant][theme].error,
        state === 'focused' && containerClasses.focused,
        (state === 'shifted' || state === 'focused') &&
          containerClasses.shifted,
        containerClassNames
      )
    );

    const focusHandler: FocusEventHandler<HTMLTextAreaElement> = (event) => {
      setState('focused');

      if (onFocus !== undefined) {
        onFocus(event);
      }
    };

    const blurHandler: FocusEventHandler<HTMLTextAreaElement> = (event) => {
      if (event.target.value !== '') {
        setState('shifted');
      } else {
        setState('default');
      }

      if (onBlur !== undefined) {
        onBlur(event);
      }
    };

    const textareaClassName = twMerge(
      mergeClasses(
        textareaClasses.base,
        !invalid && !valid && textareaClasses.variants[variant][theme][color],
        valid && textareaClasses.variants[variant][theme].success,
        invalid && textareaClasses.variants[variant][theme].error,
        startAdornment !== null && textareaClasses.startAdornment,
        endAdornment !== null && textareaClasses.endAdornment,
        textareaClassNames
      )
    );

    const setTextareaRef: (element: HTMLTextAreaElement) => void = (
      element
    ) => {
      if (textareaRef !== undefined) {
        textareaRef.current = element;
      }
    };

    if (label !== null) {

      labelProps = labelProps ?? defaultProps.labelProps;

      const { className: labelClassNames, ...restLabelProps } = labelProps;

      const labelClasses = styles.label;
      const labelClassName = twMerge(
        mergeClasses(
          labelClasses.base,
          !invalid && !valid && labelClasses.colors[theme][color],
          valid && labelClasses.colors[theme].success,
          invalid && labelClasses.colors[theme].error,
          startAdornment !== null && labelClasses.startAdornment,
          labelClassNames
        )
      );

      legendProps = legendProps ?? defaultProps.legendProps;

      const { className: legendClassNames, ...restLegendProps } = legendProps;

      const legendClasses = styles.legend;
      const legendClassName = twMerge(
        mergeClasses(legendClasses.base, legendClassNames)
      );

      legendNode = (
        <>
          <legend
            className={legendClassName}
            {...restLegendProps}
          >
            {label}
          </legend>
          <label
            className={labelClassName}
            {...restLabelProps}
          >
            {label}
          </label>
        </>
      );
    }

    if (startAdornment !== null) {
      startAdornmentProps =
        startAdornmentProps ?? defaultProps.startAdornmentProps;

      const {
        className: startAdornmentClassNames,
        ...restStartAdornmentProps
      } = startAdornmentProps;

      const startAdornmentClasses = styles.startAdornment;
      const startAdornmentClassName = twMerge(
        mergeClasses(
          startAdornmentClasses.base,
          startAdornmentClasses.colors[theme][color],
          startAdornmentClassNames
        )
      );

      startAdornmentNode = (
        <div
          className={startAdornmentClassName}
          {...restStartAdornmentProps}
        >
          {startAdornment}
        </div>
      );
    }

    if (endAdornment !== null) {
      endAdornmentProps = endAdornmentProps ?? defaultProps.endAdornmentProps;

      const { className: endAdornmentClassNames, ...restEndAdornmentProps } =
        endAdornmentProps;

      const endAdornmentClasses = styles.endAdornment;
      const endAdornmentClassName = twMerge(
        mergeClasses(
          endAdornmentClasses.base,
          endAdornmentClasses.colors[theme][color],
          endAdornmentClassNames
        )
      );

      endAdornmentNode = (
        <div
          className={endAdornmentClassName}
          {...restEndAdornmentProps}
        >
          {endAdornment}
        </div>
      );
    }

    return (
      <div
        className={outerContainerClassName}
        ref={rootRef}
        {...restOuterContainerProps}
      >
        <fieldset
          disabled={disabled}
          className={containerClassName}
          {...restContainerProps}
        >
          <textarea
            onFocus={focusHandler}
            onBlur={blurHandler}
            autoFocus={autoFocus}
            disabled={disabled}
            value={textareaValue}
            className={textareaClassName}
            ref={setTextareaRef}
            {...restTextareaProps}
          />
          {legendNode}
        </fieldset>
        {startAdornmentNode}
        {endAdornmentNode}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export default Textarea; */
