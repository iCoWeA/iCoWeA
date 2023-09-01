import React, { type BaseHTMLAttributes, forwardRef, useContext, type ReactNode, type ButtonHTMLAttributes } from 'react';
import chipConfig, { type ChipVariants } from '../../../configs/chipConfig';
import Icon, { type IconProps } from '../Icon/Icon';
import themeContext from '../../../contexts/theme';
import ChipBodyContainer from './ChipBodyContainer';
import ChipButton from './ChipButton';
import ChipButtonContainer from './ChipButtonContainer';
import { mergeClasses } from '../../../utils/propsHelper';

export interface ChipProps extends BaseHTMLAttributes<HTMLDivElement> {
  onClose?: () => void;
  variant?: ChipVariants;
  size?: Sizes;
  color?: Colors;
  invisible?: boolean;
  button?: ReactNode;
  buttonIcon?: ReactNode;
  bodyContainerProps?: BaseHTMLAttributes<HTMLDivElement>;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  buttonIconProps?: IconProps;
  buttonContainerProps?: BaseHTMLAttributes<HTMLDivElement>;
}

const Chip = forwardRef<HTMLDivElement, ChipProps>((props, ref) => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set default props --- */
  const styles = chipConfig.styles.container;
  const {
    onClose,
    variant,
    size,
    color,
    invisible,
    button,
    buttonIcon,
    bodyContainerProps,
    buttonProps,
    buttonIconProps,
    buttonContainerProps,
    className,
    children,
    ...restProps
  } = { ...chipConfig.defaultProps, ...props };

  /* --- Set container props --- */
  const mergedClassName = mergeClasses(styles.base, styles.variants[variant][theme][color], styles.sizes[size], invisible && styles.invisible, className);

  /* --- Set button icon props --- */
  let buttonIconNode = buttonIcon;

  if (button === undefined && onClose !== undefined && buttonIconNode === undefined) {
    buttonIconNode = (
      <Icon {...buttonIconProps}>
        <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
      </Icon>
    );
  }

  /* --- Set button props --- */
  let buttonNode: ReactNode;

  if (button === undefined && onClose !== undefined) {
    buttonNode = (
      <ChipButton
        onClose={onClose}
        variant={variant}
        color={color}
        {...buttonProps}
      >
        {buttonIconNode}
      </ChipButton>
    );
  }

  /* --- Set button container props --- */
  let buttonContainerNode: ReactNode;

  if (buttonNode !== undefined) {
    buttonContainerNode = <ChipButtonContainer {...buttonContainerProps}>{buttonNode}</ChipButtonContainer>;
  }

  return (
    <div
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      <ChipBodyContainer {...bodyContainerProps}>{children}</ChipBodyContainer>
      {buttonContainerNode}
    </div>
  );
});

Chip.displayName = 'Chip';

export default Chip;
