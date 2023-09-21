import React, { forwardRef } from 'react';
import chipButtonConfig from '../../configs/chipButtonConfig';
import { type ChipVariants } from './Chip';
import Icon, { type IconProps } from './Icon';
import IconButton, { type IconButtonProps } from './IconButton';

export interface ChipButtonProps extends IconButtonProps {
  chipVariant?: ChipVariants;
  iconProps?: IconProps;
}

const ChipButton = forwardRef<HTMLButtonElement, ChipButtonProps>((props, ref) => {
  /* --- Set default props --- */
  const { chipVariant, iconProps, children, ...restProps } = { ...chipButtonConfig.defaultProps, ...props };

  /* --- Set props --- */
  const childrenNode =
    children === undefined ? <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /> : children;

  return (
    <IconButton
      variant={chipVariant === 'filled' ? 'plain' : 'text'}
      size="xs"
      ref={ref}
      {...restProps}
    >
      <Icon {...iconProps}>{childrenNode}</Icon>
    </IconButton>
  );
});

ChipButton.displayName = 'ChipButton';

export default ChipButton;
