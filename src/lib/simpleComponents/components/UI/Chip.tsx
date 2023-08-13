import React, {
  type BaseHTMLAttributes,
  forwardRef,
  useContext,
  type ReactNode,
  type ButtonHTMLAttributes,
  type MouseEvent
} from 'react';
import {
  type ChipSizes,
  type ChipColors,
  type ChipVariants
} from '../../configs/chipConfig';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';

interface ChipProps extends BaseHTMLAttributes<HTMLDivElement> {
  variant?: ChipVariants;
  size?: ChipSizes;
  color?: ChipColors;
  invisible?: boolean;
  action?: ReactNode;
  onClose?: () => void;
  componentsProps?: {
    button?: ButtonHTMLAttributes<HTMLButtonElement>;
  };
}

const Chip = forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      variant,
      size,
      color,
      invisible,
      action,
      onClose,
      componentsProps,
      className: rootClassName,
      children: rootChildren,
      ...restRootProps
    },
    rootRef
  ) => {
    const { theme, config } = useContext(themeContext);
    const { defaultProps, styles } = config.chip;
    const rootStyles = styles.root;
    let buttonNode: ReactNode;

    variant = variant ?? defaultProps.variant;
    size = size ?? defaultProps.size;
    color = color ?? defaultProps.color;
    invisible = invisible ?? defaultProps.invisible;
    action = action ?? defaultProps.action;

    /* Set root props */
    const mergedRootClassName = twMerge(
      mergeClasses(
        rootStyles.base,
        rootStyles.variants[variant][theme][color],
        rootStyles.sizes[size],
        invisible && rootStyles.invisible,
        (action !== null || onClose !== undefined) &&
          rootStyles.actionSpace[size],
        rootClassName
      )
    );

    /* Set button props */
    if (action === null && onClose !== undefined) {
      const buttonStyles = styles.button;
      const {
        className: buttonClassName,
        onClick: onButtonClick,
        ...restButtonProps
      } = componentsProps?.button ?? defaultProps.componentsProps.button;

      const clickButtonHandler = (
        event: MouseEvent<HTMLButtonElement>
      ): void => {
        onClose();

        if (onButtonClick !== undefined) {
          onButtonClick(event);
        }
      };

      const mergedButtonClassName = twMerge(
        mergeClasses(
          buttonStyles.base,
          buttonStyles.variants[variant][theme][color],
          buttonStyles.sizes[size],
          buttonClassName
        )
      );

      buttonNode = (
        <button
          onClick={clickButtonHandler}
          className={mergedButtonClassName}
          {...restButtonProps}
        >
          <svg viewBox="0 0 24 24">
            <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </button>
      );
    }

    return (
      <div
        className={mergedRootClassName}
        ref={rootRef}
        {...restRootProps}
      >
        {rootChildren}
        {buttonNode}
      </div>
    );
  }
);

Chip.displayName = 'Chip';

export default Chip;
