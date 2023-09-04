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
  useMemo,
  useState
} from 'react';
import Popover, { type PopoverProps } from '../Popover/Popover';
import Dropdown, { type DropdownProps } from '../Dropdown/Dropdown';
import { type IconProps } from '../Icon/Icon';
import selectConfig from '../../../configs/selectConfig';
import { type TransitionConfig } from '../../../hooks/useTransition';
import { mergeClasses } from '../../../utils/propsHelper';
import themeContext from '../../../contexts/theme';
import selectContext, { type SelectContext } from '../../../contexts/select';
import usePrevious from '../../../hooks/usePrevious';
import useOutsideClick from '../../../hooks/useOutsideClick';
import SelectContainer from './SelectContainer';
import SelectAdornmentContainer from './SelectAdornmentContainer';
import SelectFieldset from './SelectFieldset';
import SelectArrow from './SelectArrow';
import SelectLabel from './SelectLabel';
import SelectLegend from './SelectLegend';

export interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
  onSelectChange?: (value: string) => void;
  variant?: InputVariants;
  color?: Colors;
  valid?: boolean;
  invalid?: boolean;
  arrow?: boolean;
  open?: boolean;
  position?: Positions;
  lockScroll?: boolean;
  overlayRef?: Element | null;
  transitionConfig?: TransitionConfig;
  label?: ReactNode;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  popoverProps?: PopoverProps;
  dropdownProps?: DropdownProps;
  containerProps?: BaseHTMLAttributes<HTMLDivElement>;
  startAdornmentContainerProps?: BaseHTMLAttributes<HTMLDivElement>;
  fieldsetProps?: FieldsetHTMLAttributes<HTMLFieldSetElement>;
  endAdornmentContainerProps?: BaseHTMLAttributes<HTMLDivElement>;
  arrowProps?: IconProps;
  legendProps?: BaseHTMLAttributes<HTMLLegendElement>;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  inputRef?: MutableRefObject<HTMLInputElement> | null;
}

interface SelectRefs {
  container: HTMLDivElement | null;
  input: HTMLInputElement | null;
  popover: HTMLDivElement | null;
}

const Select = forwardRef<HTMLDivElement, SelectProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = selectConfig.styles.input;
  const {
    onSelectChange,
    variant,
    color,
    valid,
    invalid,
    arrow,
    open,
    position,
    lockScroll,
    overlayRef,
    transitionConfig,
    label,
    startAdornment,
    endAdornment,
    popoverProps,
    dropdownProps,
    containerProps,
    startAdornmentContainerProps,
    fieldsetProps,
    endAdornmentContainerProps,
    arrowProps,
    legendProps,
    labelProps,
    inputRef,
    autoFocus,
    disabled,
    readonly,
    value,
    className,
    children,
    ...restProps
  } = { ...selectConfig.defaultProps, ...props };
  const mergedTransitionConfig = { ...selectConfig.defaultProps.transitionConfig, ...transitionConfig };

  /* --- Set refs --- */
  const componentsRef = useRef<SelectRefs>({ container: null, input: null, popover: null });

  /* --- Set imperative handler --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => componentsRef.current.container, []);

  /* --- Set states --- */
  const [isFocused, setIsFocused] = useState(open === true || (!disabled && autoFocus));

  /* --- Set context --- */
  const context: SelectContext = useMemo(
    () => ({
      onClose: (value: string) => {
        if (open === undefined) {
          setIsFocused(false);
        }

        if (onSelectChange !== undefined) {
          onSelectChange(value);
        }
      }
    }),
    [open]
  );

  /* --- Set previous values  --- */
  const prevOpen = usePrevious(open);

  useEffect(() => {
    if (prevOpen !== undefined && open === undefined) {
      setIsFocused(prevOpen);
    }
  }, [open]);

  /* --- Set outside click action --- */
  const outsideClickHandler = useCallback((event: MouseEvent) => {
    const isInputClicked = componentsRef.current.container?.contains(event.target as Node) ?? false;
    const isPopoverClicked = componentsRef.current.popover?.contains(event.target as Node) ?? false;

    if (!isInputClicked && !isPopoverClicked) {
      setIsFocused(false);
    }

    if (isInputClicked) {
      setIsFocused(true);
    }
  }, []);

  useOutsideClick(outsideClickHandler, open === undefined && !disabled && !(popoverProps.backdrop === true));

  /* -- Set autofocus state --- */
  useEffect(() => {
    if (open === undefined && autoFocus && !disabled) {
      setIsFocused(true);
    }
  }, [open, autoFocus, disabled]);

  /* -- Set disabled state --- */
  useEffect(() => {
    if (open === undefined && disabled) {
      setIsFocused(false);
    }
  }, [open, disabled]);

  /* --- Set popover props --- */
  const setPopoverRef = (element: HTMLDivElement): void => {
    componentsRef.current.popover = element;
  };

  /* --- Set container props --- */
  const setContainerRef = (element: HTMLDivElement): void => {
    componentsRef.current.container = element;
  };

  /* --- Set props --- */
  const setSelectRef = (element: HTMLInputElement): void => {
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

  /* --- Set arrow props --- */
  let arrowNode = endAdornment;

  if (endAdornment === undefined && arrow) {
    arrowNode = (
      <SelectArrow
        open={open ?? isFocused}
        transitionConfig={mergedTransitionConfig}
        {...arrowProps}
      />
    );
  }

  /* --- Set label props --- */
  let labelNode = label;

  if (labelNode !== undefined) {
    labelNode = (
      <SelectLabel
        variant={variant}
        color={color}
        valid={valid}
        invalid={invalid}
        {...labelProps}
      >
        {label}
      </SelectLabel>
    );
  }

  /* --- Set legend props --- */
  let legendNode: ReactNode;

  if (labelNode !== undefined && variant === 'outlined') {
    legendNode = <SelectLegend {...legendProps}>{label}</SelectLegend>;
  }

  return (
    <Popover
      open={open ?? isFocused}
      position={position}
      lockScroll={lockScroll}
      overlayRef={overlayRef}
      transitionConfig={mergedTransitionConfig}
      handler={
        <SelectContainer
          open={open ?? isFocused}
          value={value}
          ref={setContainerRef}
          {...containerProps}
        >
          <SelectAdornmentContainer
            open={open ?? isFocused}
            position="start"
            variant={variant}
            color={color}
            valid={valid}
            invalid={invalid}
            transitionConfig={mergedTransitionConfig}
            {...startAdornmentContainerProps}
          >
            {startAdornment}
          </SelectAdornmentContainer>
          <SelectFieldset
            open={open ?? isFocused}
            variant={variant}
            color={color}
            valid={valid}
            invalid={invalid}
            disabled={disabled}
            transitionConfig={mergedTransitionConfig}
            {...fieldsetProps}
          >
            <input
              autoFocus={autoFocus}
              disabled={disabled}
              readOnly={readonly}
              value={value}
              className={mergedClassName}
              ref={setSelectRef}
              {...restProps}
            />
            {labelNode}
            {legendNode}
          </SelectFieldset>
          <SelectAdornmentContainer
            open={open ?? isFocused}
            position="end"
            variant={variant}
            color={color}
            valid={valid}
            invalid={invalid}
            transitionConfig={mergedTransitionConfig}
            {...startAdornmentContainerProps}
          >
            {arrowNode}
          </SelectAdornmentContainer>
        </SelectContainer>
      }
      ref={setPopoverRef}
      {...popoverProps}
    >
      <selectContext.Provider value={context}>
        <Dropdown
          elevated
          {...dropdownProps}
        >
          {children}
        </Dropdown>
      </selectContext.Provider>
    </Popover>
  );
});

Select.displayName = 'Select';

export default Select;
