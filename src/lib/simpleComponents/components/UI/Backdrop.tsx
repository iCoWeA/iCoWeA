import React, {
  forwardRef,
  type BaseHTMLAttributes,
  useContext,
  type MouseEvent
} from 'react';
import themeContext from '../../contexts/theme';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';

export interface BackdropDefaultProps {
  invisible?: boolean;
}

interface BackdropProps
  extends BackdropDefaultProps,
  BaseHTMLAttributes<HTMLDivElement> {
  onClose: () => void;
}

export const Backdrop = forwardRef<HTMLDivElement, BackdropProps>(
  ({ onClose, invisible, onClick, className, ...restProps }, ref) => {
    const { config } = useContext(themeContext);
    const { defaultProps, styles } = config.backdrop;

    invisible = invisible ?? defaultProps.invisible;

    const clickHandler = (event: MouseEvent<HTMLDivElement>): void => {
      if (onClose !== undefined) {
        onClose();
      }

      if (onClick !== undefined) {
        onClick(event);
      }
    };

    const mergedClassName = twMerge(
      mergeClasses(styles.base, invisible && styles.invisible, className)
    );

    return (
      <div
        onClick={clickHandler}
        className={mergedClassName}
        ref={ref}
        {...restProps}
      />
    );
  }
);

Backdrop.displayName = 'Backdrop';

export default Backdrop;
