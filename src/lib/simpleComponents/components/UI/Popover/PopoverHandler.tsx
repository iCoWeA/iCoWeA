import { forwardRef, cloneElement, type ReactElement } from 'react';

interface PopoverHandlerProps {
  children: ReactElement;
}

const PopoverHandler = forwardRef<HTMLElement, PopoverHandlerProps>(({ children }, ref) => cloneElement(children, { ref }));

PopoverHandler.displayName = 'PopoverHandler';

export default PopoverHandler;
