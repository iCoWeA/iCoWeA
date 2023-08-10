import { type FormGroupDefaultProps } from '../components/UI/FormGroup';

export interface FormGroupConfig {
  defaultProps: Required<FormGroupDefaultProps>;
  styles: {
    base: Record<string, string>;
    row: Record<string, string>;
  }
}

const formGroupConfig: FormGroupConfig = {
  defaultProps: {
    row: false
  },
  styles: {
    base: {
      display: 'flex',
      flexDirection: 'flex-col',
      gap: 'gap-4',
      width: 'w-full',
      focus: 'focus:outline-0'
    },
    row: {
      flexDirection: 'flex-row'
    }
  }
};

export default formGroupConfig;
