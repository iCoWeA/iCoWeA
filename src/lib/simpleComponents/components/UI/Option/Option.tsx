import React, { type OptionHTMLAttributes, type LiHTMLAttributes, type MutableRefObject, forwardRef, useContext, type MouseEvent } from 'react';
import optionConfig, { type OptionVariant } from '../../../configs/optionConfig';
import selectContext from '../../../contexts/select';
import themeContext from '../../../contexts/theme';
import { mergeClasses } from '../../../utils/propsHelper';
import OptionContainer from './OptionContainer';

export interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {
  value: string;
  variant?: OptionVariant;
  size?: Sizes;
  color?: Colors;
  fullwidth?: boolean;
  selected?: boolean;
  itemProps?: LiHTMLAttributes<HTMLLIElement>;
  optionRef?: MutableRefObject<HTMLOptionElement> | null;
}

const Option = forwardRef<HTMLLIElement, OptionProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;
  const onClose = useContext(selectContext).onClose;

  /* --- Set default props --- */
  const styles = optionConfig.styles.button;
  const { value, variant, size, color, fullwidth, selected, itemProps, optionRef, onClick, className, ...restProps } = {
    ...optionConfig.defaultProps,
    ...props
  };

  /* --- Set props --- */
  const clickHandler = (event: MouseEvent<HTMLOptionElement>): void => {
    onClose(value);

    if (onClick !== undefined) {
      onClick(event);
    }
  };

  const mergedClassName = mergeClasses(
    styles.base,
    styles.sizes[size],
    fullwidth && styles.fullwidth,
    !selected && styles.variants[variant][theme][color],
    selected && styles.selected[variant][theme][color],
    className
  );

  return (
    <OptionContainer
      {...itemProps}
      ref={ref}
    >
      <option
        onClick={clickHandler}
        className={mergedClassName}
        ref={optionRef}
        {...restProps}
      />
    </OptionContainer>
  );
});

Option.displayName = 'Option';

export default Option;
