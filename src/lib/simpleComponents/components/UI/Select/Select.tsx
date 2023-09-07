import React, {
  type InputHTMLAttributes,
  type ReactNode,
  type BaseHTMLAttributes,
  type FieldsetHTMLAttributes,
  type LabelHTMLAttributes,
  forwardRef,
  useContext,
  useRef,
  useImperativeHandle,
  useState,
  useCallback,
  useMemo,
  type MutableRefObject
} from 'react';
import selectConfig from '../../../configs/selectConfig';
import selectContext, { type SelectContext } from '../../../contexts/select';
import themeContext from '../../../contexts/theme';
import useFocusin from '../../../hooks/useFocusin';
import useOutsideClick from '../../../hooks/useOutsideClick';
import { mergeClasses } from '../../../utils/propsHelper';
import { type IconProps } from '../Icon/Icon';
import { type MenuProps } from '../Menu/Menu';
import SelectAdornmentContainer from './SelectAdornmentContainer';
import SelectArrow from './SelectArrow';
import SelectContainer from './SelectContainer';
import SelectFieldset from './SelectFieldset';
import SelectLabel from './SelectLabel';
import SelectLegend from './SelectLegend';
import SelectMenu from './SelectMenu';

export interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
  onSelectChange?: (value: string) => void;
  variant?: InputVariants;
  color?: Colors;
  valid?: boolean;
  invalid?: boolean;
  arrow?: boolean;
  position?: Positions;
  lockScroll?: boolean;
  overlayRef?: Element | null;
  label?: ReactNode;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  menuProps?: MenuProps;
  containerProps?: BaseHTMLAttributes<HTMLDivElement>;
  startAdornmentContainerProps?: BaseHTMLAttributes<HTMLDivElement>;
  fieldsetProps?: FieldsetHTMLAttributes<HTMLFieldSetElement>;
  endAdornmentContainerProps?: BaseHTMLAttributes<HTMLDivElement>;
  arrowProps?: IconProps;
  legendProps?: BaseHTMLAttributes<HTMLLegendElement>;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
  inputRef?: MutableRefObject<HTMLInputElement> | null;
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
    position,
    lockScroll,
    overlayRef,
    label,
    startAdornment,
    endAdornment,
    menuProps,
    containerProps,
    startAdornmentContainerProps,
    fieldsetProps,
    endAdornmentContainerProps,
    arrowProps,
    legendProps,
    labelProps,
    disabled,
    readonly,
    value,
    className,
    children,
    ...restProps
  } = { ...selectConfig.defaultProps, ...props };

  /* --- Set refs --- */
  const menuRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const selectRef = useRef<HTMLInputElement | null>(null);

  /* --- Set imperative handler --- */
  useImperativeHandle<HTMLDivElement | null, HTMLDivElement | null>(ref, () => menuRef.current, []);

  /* --- Set state --- */
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  /* --- Set outside click action --- */
  const outsideClickHandler = useCallback((event: MouseEvent) => {
    const isMenuClicked = menuRef.current?.contains(event.target as Node) ?? false;
    const isContainerClicked = containerRef.current?.contains(event.target as Node) ?? false;

    if (isContainerClicked) {
      setIsOpen((isOpen) => !isOpen);
      setIsFocused(true);
      selectRef.current?.focus();
    }

    if (!isMenuClicked && !isContainerClicked) {
      setIsOpen(false);
      setIsFocused(false);
    }
  }, []);

  useOutsideClick(outsideClickHandler);

  /* --- Set focusin action --- */
  const focusinHandler = useCallback((event: FocusEvent) => {
    const isMenuFocused = menuRef.current?.contains(event.target as Node) ?? false;
    const isContainerFocused = containerRef.current?.contains(event.target as Node) ?? false;

    if (isMenuFocused || isContainerFocused) {
      setIsFocused(true);
    } else {
      setIsFocused(false);
      setIsOpen(false);
    }
  }, []);

  useFocusin(focusinHandler);

  /* --- Set context --- */
  const context: SelectContext = useMemo(
    () => ({
      onClose: (value: string) => {
        setIsOpen(false);

        if (onSelectChange !== undefined) {
          onSelectChange(value);
        }
      }
    }),
    [document.activeElement]
  );

  /* --- Set props --- */
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
        open={isMenuOpen}
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
    <SelectMenu
      setIsMenuOpen={setIsMenuOpen}
      open={isOpen}
      position={position}
      lockScroll={lockScroll}
      overlayRef={overlayRef}
      handler={
        <SelectContainer
          focused={isFocused}
          variant={variant}
          selectRef={selectRef}
          disabled={disabled}
          ref={containerRef}
          {...containerProps}
        >
          <SelectAdornmentContainer
            position="start"
            variant={variant}
            color={color}
            valid={valid}
            invalid={invalid}
            {...startAdornmentContainerProps}
          ></SelectAdornmentContainer>
          <SelectFieldset
            variant={variant}
            color={color}
            valid={valid}
            invalid={invalid}
            disabled={disabled}
            {...fieldsetProps}
          >
            <input
              readOnly={readonly}
              disabled={disabled}
              value={value}
              className={mergedClassName}
              {...restProps}
            />
            {labelNode}
            {legendNode}
          </SelectFieldset>
          <SelectAdornmentContainer
            position="end"
            variant={variant}
            color={color}
            valid={valid}
            invalid={invalid}
            {...startAdornmentContainerProps}
          >
            {arrowNode}
          </SelectAdornmentContainer>
        </SelectContainer>
      }
      ref={menuRef}
      {...menuProps}
    >
      <selectContext.Provider value={context}>{children}</selectContext.Provider>
    </SelectMenu>
  );
});

Select.displayName = 'Select';

export default Select;
