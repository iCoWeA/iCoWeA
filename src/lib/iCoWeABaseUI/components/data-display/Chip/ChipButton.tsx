import React, { type FC } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import Button, { type ButtonProps } from '../../inputs/Button/Button';
import Icon, { type IconProps } from '../Icon/Icon';
import chipConfig from './chipConfig';

export type ChipButtonDefaultProps = ButtonProps;

export type ChipButtonProps = ChipButtonDefaultProps & {
  position: SidePositions;
  variant: Variants;
  color: Colors;
  iconProps?: IconProps;
};

const ChipButton: FC<ChipButtonProps> = ({
  position,
  iconProps,
  className,
  children,
  ...restProps
}) => {
  /* --- Set classes --- */
  const styles = chipConfig.styles.button;

  const mergedClassName = mergeClasses(styles.base, className);

  return (
    <Button
      size="md"
      icon
      border={false}
      block={false}
      shadow={false}
      loading={false}
      noRipple={false}
      className={mergedClassName}
      {...restProps}
    >
      {children ?? (
        <Icon
          variant="text"
          color="inherit"
          size="sm"
          spacing={false}
          border={false}
          {...iconProps}
        >
          <svg
            focusable="false"
            viewBox="0 0 24 24"
          >
            <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </svg>
        </Icon>
      )}
    </Button>
  );
};

export default ChipButton;
