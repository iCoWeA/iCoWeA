import { type AccordionVariant } from '../components/UI/Accordion';

export interface AccordionConfig {
  defaultProps: {
    variant: AccordionVariant;
    color: Colors;
    defaultOpen: boolean;
    disabled: boolean;
  };
  styles: {
    base: Record<string, string>;
  }
}

const accordionConfig: AccordionConfig = {
  defaultProps: {
    variant: 'plain',
    color: 'default',
    defaultOpen: false,
    disabled: false
  },
  styles: {
    base: {
      display: 'flex',
      flexDirection: 'flex-col',
      width: 'w-full'
    }
  }
};

export default accordionConfig;
