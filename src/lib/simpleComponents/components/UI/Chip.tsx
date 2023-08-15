import React, { type BaseHTMLAttributes, forwardRef, useContext, type ReactNode, type MouseEvent } from 'react';
import { type ChipDefaultProps } from '../../configs/chipConfig';
import themeContext from '../../contexts/theme';
import { mergeClasses, setDefaultProps } from '../../utils/propsHelper';

interface ChipProps extends ChipDefaultProps, BaseHTMLAttributes<HTMLDivElement> {
  action?: ReactNode;
  onClose?: () => void;
}

const Chip = forwardRef<HTMLDivElement, ChipProps>((rootProps, rootRef) => {
  const { theme, config } = useContext(themeContext);
  const { defaultProps, styles } = config.chip;
  const {
    action,
    onClose,
    variant,
    size,
    color,
    invisible,
    bodyProps,
    buttonContainerProps,
    buttonProps,
    className: rootClassName,
    children: rootChildren,
    ...restRootProps
  } = setDefaultProps(rootProps, defaultProps);
  let buttonContainerNode: ReactNode;
  let buttonNode: ReactNode;

  /* Set root props */
  const rootStyles = styles.root;
  const mergedRootClassName = mergeClasses(
    rootStyles.base,
    rootStyles.variants[variant][theme][color],
    rootStyles.sizes[size],
    invisible && rootStyles.invisible,
    rootClassName
  );

  /* Set body props */
  const bodyStyles = styles.body;
  const { className: bodyClassName, ...restBodyProps } = bodyProps;

  const mergedBodyClassName = mergeClasses(bodyStyles.base, bodyClassName);

  /* Set button props */
  if (action === undefined && onClose !== undefined) {
    const buttonStyles = styles.button;
    const { onClick: onButtonClick, className: buttonClassName, ...restButtonProps } = buttonProps;

    const clickButtonHandler = (event: MouseEvent<HTMLButtonElement>): void => {
      onClose();

      if (onButtonClick !== undefined) {
        onButtonClick(event);
      }
    };

    const mergedButtonClassName = mergeClasses(buttonStyles.base, buttonStyles.variants[variant][theme][color], buttonClassName);

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

  /* Set button container props */
  if (action !== undefined || onClose !== undefined) {
    const buttonContainerStyles = styles.buttonContainer;
    const { className: buttonContainerClassName, ...restButtonContainerProps } = buttonContainerProps;

    const mergedButtonContainerClassName = mergeClasses(buttonContainerStyles.base, buttonContainerClassName);

    buttonContainerNode = (
      <div
        className={mergedButtonContainerClassName}
        {...restButtonContainerProps}
      >
        {buttonNode}
      </div>
    );
  }

  return (
    <div
      className={mergedRootClassName}
      ref={rootRef}
      {...restRootProps}
    >
      <div
        className={mergedBodyClassName}
        {...restBodyProps}
      >
        {rootChildren}
      </div>
      {buttonContainerNode}
    </div>
  );
});

Chip.displayName = 'Chip';

export default Chip;
