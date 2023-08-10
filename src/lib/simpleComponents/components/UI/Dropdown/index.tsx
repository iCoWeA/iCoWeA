/*
import React, {
  useContext,
  forwardRef,
  type BaseHTMLAttributes,
  type MouseEventHandler,
  type MutableRefObject,
  type RefObject
} from 'react';
import themeContext from '../../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../../utils/styleHelper';
import { type DropdownPositions } from './config';

export interface DropdownDefaultProps {
  open?: boolean;
  position?: DropdownPositions;
  color?: Colors;
  closeOnClick?: boolean;
  disableScrolling?: boolean;
  onClose?: () => void;
  backdropProps?: BaseHTMLAttributes<HTMLDivElement>;
}

export interface DropdownProps
  extends DropdownDefaultProps,
  BaseHTMLAttributes<HTMLDivElement> {
  anchor: RefObject<HTMLElement> | MutableRefObject<HTMLElement>;
}

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      anchor,
      open,
      position,
      color,
      closeOnClick,
      disableScrolling,
      onClose,
      onClick,
      className: rootClassNames,
      backdropProps,
      ...restRootProps
    },
    rootRef
  ) => {
    const { theme, config } = useContext(themeContext);
    const { defaultProps, styles } = config.dropdown;

    open = open ?? defaultProps.open;

    if (!open) {
      return;
    }

    const rootClasses = styles.root;

    position = position ?? defaultProps.position;
    color = color ?? defaultProps.color;
    closeOnClick = closeOnClick ?? defaultProps.closeOnClick;
    disableScrolling = disableScrolling ?? defaultProps.disableScrolling;
    onClose = onClose ?? defaultProps.onClose;
    backdropProps = backdropProps ?? defaultProps.backdropProps;

    const clickHandler: MouseEventHandler<HTMLDivElement> = (
      event
    ) => {
      if (onClose !== undefined && closeOnClick === true) {
        onClose();
      }

      if (onClick !== undefined) {
        onClick(event);
      }
    };

    const rootClassName = twMerge(
      mergeClasses(rootClasses.base, rootClasses.positions[position], rootClasses.colors[theme][color], rootClassNames)
    );

    return (
      <div
        onClick={clickHandler}
        className={rootClassName}
        ref={rootRef}
        {...restRootProps}
      />
    );
  }
);

Dropdown.displayName = 'Dropdown';

export default Dropdown;
*/
