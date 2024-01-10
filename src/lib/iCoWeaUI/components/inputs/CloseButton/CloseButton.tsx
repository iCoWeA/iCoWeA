import React, { forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import { mergeClasses } from '../../../utils/utils';
import Icon from '../../data-display/Icon/Icon';
import Button, { type ButtonProps } from '../Button/Button';
import closeButtonConfig from './closeButtonConfig';

export type CloseButtonDefaultProps = {
  position?: PanelPositions;
  variant?: Variants;
  color?: Colors;
  size?: Sizes;
  inner?: boolean;
  bordered?: boolean;
  noRipple?: boolean;
};

export type CloseButtonProps = ButtonProps & CloseButtonDefaultProps;

const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>((props, ref) => {
  const { position, size, inner, defaultClassName, className, children, ...restProps } = useConfig(
    'closeButton',
    closeButtonConfig.defaultProps,
    props
  );

  /* --- Set classes --- */
  const styles = closeButtonConfig.styles;

  const mergedClassName = mergeClasses(
    styles.base,
    !inner && styles.positions[position][size],
    inner && styles.innerPositions[position][size],
    defaultClassName,
    className
  );

  return (
    <Button
      size={size}
      inner={inner}
      icon
      block={false}
      shadow={false}
      className={mergedClassName}
      ref={ref}
      {...restProps}
    >
      {children ?? (
        <Icon size={inner ? 'sm' : 'md'}>
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
});

CloseButton.displayName = 'CloseButton';

export default CloseButton;
