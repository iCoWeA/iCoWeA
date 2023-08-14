import React, {
  forwardRef,
  type BaseHTMLAttributes,
  useContext,
  useMemo
} from 'react';
import accordionContext, {
  type AccordionContext
} from '../../contexts/accordion';
import themeContext from '../../contexts/theme';
import useTransition, {
  type Config as TransitionConfig
} from '../../hooks/useTransition';
import { twMerge } from 'tailwind-merge';
import { mergeClasses } from '../../utils/styleHelper';

export interface AccordionTransitionProps extends TransitionConfig {
  unmountOnExit?: boolean;
  enterTransition?: string;
}

export interface AccordionProps extends BaseHTMLAttributes<HTMLDivElement> {
  open?: boolean;
  disabled?: boolean;
  transitionProps?: AccordionTransitionProps;
}

const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (
    { open, disabled, transitionProps, className, children, ...restProps },
    ref
  ) => {
    const { config } = useContext(themeContext);
    const { defaultProps, styles } = config.accordion;
    const {
      unmountOnExit = defaultProps.transitionProps.unmountOnExit,
      enterTransition = defaultProps.transitionProps.enterTransition,
      enterDuration = defaultProps.transitionProps.enterDuration,
      exitDuration = defaultProps.transitionProps.exitDuration
    } = transitionProps ?? {};

    disabled = disabled ?? defaultProps.disabled;

    const { state, enterState, exitState, enter, exit } = useTransition({
      ...defaultProps.transitionProps,
      ...transitionProps
    });

    if (exitState && open === true) {
      enter();
    }

    if (enterState && open === false) {
      exit();
    }

    const context: AccordionContext = useMemo(
      () => ({
        state,
        duration: enterState ? enterDuration : exitDuration,
        unmountOnExit,
        enterTransition,
        isDisabled: disabled ?? defaultProps.disabled,
        onClick: () => {
          if (exitState && open === undefined) {
            enter();
          }

          if (enterState && open === undefined) {
            exit();
          }
        },
        onTransitionEnd: () => {
          if (enterState) {
            enter(true);
          } else {
            exit(true);
          }
        }
      }),
      [
        state,
        enterState,
        exitState,
        enterDuration,
        exitDuration,
        unmountOnExit,
        enterTransition,
        disabled,
        open
      ]
    );

    const mergedClassName = twMerge(
      mergeClasses(styles.base, disabled && styles.disabled, className)
    );

    return (
      <accordionContext.Provider value={context}>
        <div
          className={mergedClassName}
          ref={ref}
          {...restProps}
        >
          {children}
        </div>
      </accordionContext.Provider>
    );
  }
);

Accordion.displayName = 'Accordion';

export default Accordion;
