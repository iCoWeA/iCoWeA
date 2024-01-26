import { type AvatarDefaultProps } from './components/data-display/Avatar/Avatar';
import { type AvatarGroupDefaultProps } from './components/data-display/AvatarGroup/AvatarGroup';
import { type BadgeDefaultProps } from './components/data-display/Badge/Badge';
import { type ChipDefaultProps } from './components/data-display/Chip/Chip';
import { type DividerDefaultProps } from './components/data-display/Divider/Divider';
import { type IconDefaultProps } from './components/data-display/Icon/Icon';
import { type ImageDefaultProps } from './components/data-display/Image/Image';
import { type ListDefaultProps } from './components/data-display/List/List';
import { type ListButtonDefaultProps } from './components/data-display/ListButton/ListButton';
import { type ListItemDefaultProps } from './components/data-display/ListItem/ListItem';
import { type ListNavlinkDefaultProps } from './components/data-display/ListNavlink/ListNavlink';
import { type MarkDefaultProps } from './components/data-display/Mark/Mark';
import { type TextDefaultProps } from './components/data-display/Text/Text';
import { type TitleDefaultProps } from './components/data-display/Title/Title';
import { type TooltipDefaultProps } from './components/data-display/Tooltip/Tooltip';
import { type AlerDefaultProps } from './components/feedback/Alert/Alert';
import { type BackdropDefaultProps } from './components/feedback/Backdrop/Backdrop';
import { type CircularProgressDefaultProps } from './components/feedback/CircularProgress/CircularProgress';
import { type ExpandIconDefaultProps } from './components/feedback/ExpandIcon/ExpandIcon';
import { type LinearProgressDefaultProps } from './components/feedback/LinearProgress/LinearProgress';
import { type SnackbarDefaultProps } from './components/feedback/Snackbar/Snackbar';
import { type SpinnerDefaultProps } from './components/feedback/Spinner/Spinner';
import { type ButtonDefaultProps } from './components/inputs/Button/Button';
import { type ButtonGroupDefaultProps } from './components/inputs/ButtonGroup/ButtonGroup';
import { type CheckboxDefaultProps } from './components/inputs/Checkbox/Checkbox';
import { type CloseButtonDefaultProps } from './components/inputs/CloseButton/CloseButton';
import { type FabDefaultProps } from './components/inputs/Fab/Fab';
import { type FormControlDefauProps } from './components/inputs/FormControl/FormControl';
import { type InputDefaultProps } from './components/inputs/Input/Input';
import { type LabelDefauProps } from './components/inputs/Label/Label';
import { type RadioDefaultProps } from './components/inputs/Radio/Radio';
import { type SwitchDefaultProps } from './components/inputs/Switch/Switch';
import { type TextareaDefaultProps } from './components/inputs/Textarea/Textarea';
import { type ToggleButtonDefaultProps } from './components/inputs/ToggleButton/ToggleButton';
import { type ToggleButtonGroupDefaultProps } from './components/inputs/ToggleButtonGroup/ToggleButtonGroup';
import { type BoxDefaultProps } from './components/layouts/Box/Box';
import { type FlexDefaultProps } from './components/layouts/Flex/Flex';
import { type GridDefaultProps } from './components/layouts/Grid/Grid';
import { type HeaderDefaultProps } from './components/layouts/Header/Header';
import { type LayoutDefaultProps } from './components/layouts/Layout/Layout';
import { type StackDefaultProps } from './components/layouts/Stack/Stack';
import { type BreadcrumbsDefaultProps } from './components/navigation/Breadcrumbs/Breadcrumbs';
import { type DrawerDefaultProps } from './components/navigation/Drawer/Drawer';
import { type LinkDefaultProps } from './components/navigation/Link/Link';
import { type NavlinkDefaultProps } from './components/navigation/Navlink/Navlink';
import { type AccordionDefaultProps } from './components/surfaces/Accordion/Accordion';
import { type CardDefaultProps } from './components/surfaces/Card/Card';
import { type ContainerDefaultProps } from './components/surfaces/Container/Container';
import { type CollapseDefaultProps } from './components/utils/Collapse/Collapse';
import { type PopoverDefaultProps } from './components/utils/Popover/Popover';
import { type PopperDefaultProps } from './components/utils/Popper/Popper';
import { type RippleDefaultProps } from './components/utils/Ripple/Ripple';
import { type TransitionDefaultProps } from './components/utils/Transition/Transition';

export {};

declare global {
  export type Sizes = 'sm' | 'md' | 'lg';
  export type Wraps = 'nowrap' | 'wrap' | 'wrap-reverse';
  export type Themes = 'light';
  export type Colors = 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  export type TextColors = 'inherit' | 'neutral' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  export type JustifyContent = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch';
  export type AlignContent = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch' | 'baseline';
  export type JustifyItems = 'stretch' | 'start' | 'end' | 'center';
  export type AlignItems = 'stretch' | 'start' | 'end' | 'center' | 'baseline';
  export type Aligns = 'left' | 'right' | 'center' | 'justify';
  export type Gaps = 'none' | 'base' | 'sm' | 'md' | 'lg';
  export type Spacing = 'none' | 'sm' | 'md' | 'lg';
  export type Borders = 'none' | 'all' | 'x' | 'y' | 'top' | 'bottom' | 'left' | 'right' | boolean;
  export type Underlines = 'none' | 'hover' | 'always';
  export type Transitions = 'fade' | 'grow-x' | 'grow-y' | 'grow' | 'slide-top' | 'slide-bottom' | 'slide-left' | 'slide-right';
  export type Layouts = 'root' | 'default' | 'standard' | 'dashboard' | 'fullbleed';
  export type ContainerLayouts = 'default' | 'header' | 'footer' | 'body';
  export type Directions = 'row' | 'col' | 'row-reverse' | 'col-reverse';
  export type Flows = 'row' | 'col' | 'dense' | 'row-dense' | 'col-dense';
  export type Orientations = 'vertical' | 'horizontal';
  export type Closable = 'none' | 'left' | 'right';
  export type Positions = 'top' | 'left' | 'right' | 'bottom';
  export type SidePositions = 'left' | 'right';
  export type ContainerPositions = 'left' | 'middle' | 'right';
  export type InnerPositions = 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right' | 'left' | 'right';
  export type OuterPositions = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';
  export type CornerPositions = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  export type BorderPositions = 'none' | 'left' | 'right' | 'both';
  export type Variants = 'default' | 'plain' | 'soft' | 'solid';
  export type InputVariants = 'default' | 'outlined' | 'soft';
  export type SizeVariants = 'container' | 'panel' | 'in-container' | 'in-panel';
  export type TitleVariants =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6';
  export type Config = {
    accordion: {
      styles?: string;
      defaultProps?: AccordionDefaultProps;
    },
    alert: {
      styles?: string;
      defaultProps?: AlerDefaultProps;
    },
    avatar: {
      styles?: string;
      defaultProps?: AvatarDefaultProps;
    },
    avatarGroup: {
      styles?: string;
      defaultProps?: AvatarGroupDefaultProps;
    },
    backdrop: {
      styles?: string;
      defaultProps?: BackdropDefaultProps;
    },
    badge: {
      styles?: string;
      defaultProps?: BadgeDefaultProps;
    },
    box: {
      styles?: string;
      defaultProps?: BoxDefaultProps;
    },
    breadcrumbs: {
      styles?: string;
      defaultProps?: BreadcrumbsDefaultProps;
    }
    button: {
      styles?: string;
      defaultProps?: ButtonDefaultProps;
    },
    buttonGroup: {
      styles?: string;
      defaultProps?: ButtonGroupDefaultProps;
    },
    card: {
      styles?: string;
      defaultProps?: CardDefaultProps;
    },
    checkbox: {
      styles?: string;
      defaultProps?: CheckboxDefaultProps;
    },
    chip: {
      styles?: string;
      defaultProps?: ChipDefaultProps;
    },
    circularProgress: {
      styles?: string;
      defaultProps?: CircularProgressDefaultProps;
    },
    closeButton: {
      styles?: string;
      defaultProps?: CloseButtonDefaultProps;
    },
    collapse: {
      styles?: string;
      defaultProps?: CollapseDefaultProps;
    },
    container: {
      styles?: string;
      defaultProps?: ContainerDefaultProps;
    },
    divider: {
      styles?: string;
      defaultProps?: DividerDefaultProps;
    },
    drawer: {
      styles?: string;
      defaultProps?: DrawerDefaultProps;
    },
    expandIcon: {
      styles?: string;
      defaultProps?: ExpandIconDefaultProps;
    },
    fab: {
      styles?: string;
      defaultProps?: FabDefaultProps;
    },
    flex: {
      styles?: string;
      defaultProps?: FlexDefaultProps;
    },
    footer: {
      styles?: string;
      defaultProps?;
    },
    formControl: {
      styles?: string;
      defaultProps?: FormControlDefauProps;
    },
    grid: {
      styles?: string;
      defaultProps?: GridDefaultProps;
    }
    header: {
      styles?: string;
      defaultProps?: HeaderDefaultProps;
    },
    icon: {
      styles?: string;
      defaultProps?: IconDefaultProps;
    },
    image: {
      styles?: string;
      defaultProps?: ImageDefaultProps;
    },
    input: {
      styles?: string;
      defaultProps?: InputDefaultProps;
    },
    label: {
      styles?: string;
      defaultProps?: LabelDefauProps;
    }
    layout: {
      styles?: string;
      defaultProps?: LayoutDefaultProps;
    },
    linearProgress: {
      styles?: string;
      defaultProps?: LinearProgressDefaultProps;
    },
    link: {
      styles?: string;
      defaultProps?: LinkDefaultProps;
    },
    list: {
      styles?: string;
      defaultProps?: ListDefaultProps;
    },
    listButton: {
      styles?: string;
      defaultProps?: ListButtonDefaultProps;
    },
    listItem: {
      styles?: string;
      defaultProps?: ListItemDefaultProps;
    },
    listNavlink: {
      styles?: string;
      defaultProps?: ListNavlinkDefaultProps;
    },
    main: {
      styles?: string;
      defaultProps?;
    },
    mark: {
      styles?: string;
      defaultProps?: MarkDefaultProps;
    },
    navlink: {
      styles?: string;
      defaultProps?: NavlinkDefaultProps;
    },
    popover: {
      styles?: string;
      defaultProps?: PopoverDefaultProps;
    }
    popper: {
      styles?: string;
      defaultProps?: PopperDefaultProps;
    },
    radio: {
      styles?: string;
      defaultProps?: RadioDefaultProps;
    },
    ripple: {
      styles?: string;
      defaultProps?: RippleDefaultProps;
    },
    section: {
      styles?: string;
      defaultProps?;
    },
    sidebar: {
      styles?: string;
      defaultProps?;
    },
    snackbar: {
      styles?: string;
      defaultProps?: SnackbarDefaultProps;
    },
    spinner: {
      styles?: string;
      defaultProps?: SpinnerDefaultProps;
    },
    stack: {
      styles?: string;
      defaultProps?: StackDefaultProps;
    },
    switch: {
      styles?: string;
      defaultProps?: SwitchDefaultProps;
    },
    text: {
      styles?: string;
      defaultProps?: TextDefaultProps;
    },
    textarea: {
      styles?: string;
      defaultProps?: TextareaDefaultProps;
    },
    title: {
      styles?: string;
      defaultProps?: TitleDefaultProps;
    },
    toggleButton: {
      styles?: string;
      defaultProps?: ToggleButtonDefaultProps;
    },
    toggleButtonGroup: {
      styles?: string;
      defaultProps?: ToggleButtonGroupDefaultProps;
    },
    tooltip: {
      styles?: string;
      defaultProps?: TooltipDefaultProps;
    }
    transition: {
      styles?: string;
      defaultProps?: TransitionDefaultProps;
    }
  };
};
