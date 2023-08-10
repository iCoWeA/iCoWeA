import { type Dispatch, type SetStateAction, createContext } from 'react';
import accordionConfig, { type AccordionConfig } from '../../configs/accordionConfig';
import accordionBodyConfig, { type AccordionBodyConfig } from '../../configs/accordionBodyConfig';
import accordionHeaderConfig, { type AccordionHeaderConfig } from '../../configs/accordionHeaderConfig';
import alertConfig, { type AlertConfig } from '../../configs/alertConfig';
import avatarConfig, { type AvatarConfig } from '../../configs/avatarConfig';
import backdropConfig, { type BackdropConfig } from '../../configs/backdropConfig';
import badgeConfig, { type BadgeConfig } from '../../configs/badgeConfig';
import breadcrumbsConfig, { type BreadcrumbsConfig } from '../../configs/breadcrumbsConfig';
import buttonConfig, { type ButtonConfig } from '../../configs/buttonConfig';
import cardConfig, { type CardConfig } from '../../configs/cardConfig';
import cardBodyConfig, { type CardBodyConfig } from '../../configs/cardBodyConfig';
import cardFooterConfig, { type CardFooterConfig } from '../../configs/cardFooterConfig';
import cardHeaderConfig, { type CardHeaderConfig } from '../../configs/cardHeaderConfig';
import checkboxConfig, { type CheckboxConfig } from '../../components/UI/Checkbox/config';
import chipConfig, { type ChipConfig } from '../../configs/chipConfig';
import collapseConfig, { type CollapseConfig } from '../../configs/collapseConfig';
import containerConfig, { type ContainerConfig } from '../../configs/containerConfig';
// import dropdownConfig, { type DropdownConfig } from '../../components/UI/Dropdown/config';
// import dropdownBodyConfig, { type DropdownBodyConfig } from '../../components/UI/DropdownBody/config';
// import dropdownFooterConfig, { type DropdownFooterConfig } from '../../components/UI/DropdownFooter/config';
// import dropdownHeaderConfig, { type DropdownHeaderConfig } from '../../components/UI/DropdownHeader/config';
import formConfig, { type FormConfig } from '../../configs/formConfig';
import formGroupConfig, { type FormGroupConfig } from '../../configs/formGroup';
import footerConfig, { type FooterConfig } from '../../layouts/Footer/config';
import headerConfig, { type HeaderConfig } from '../../layouts/Header/config';
import iconConfig, { type IconConfig } from '../../configs/iconConfig';
import iconButtonConfig, { type IconButtonConfig } from '../../configs/iconButtonConfig';
import inputConfig, { type InputConfig } from '../../configs/inputConfig';
import inputAdornmentConfig, { type InputAdornmentConfig } from '../../configs/inputAdornmentConfig';
import labelConfig, { type LabelConfig } from '../../configs/labelConfig';
import linkConfig, { type LinkConfig } from '../../configs/linkConfig';
import listConfig, { type ListConfig } from '../../configs/listConfig';
import listItemConfig, { type ListItemConfig } from '../../configs/listItemConfig';
import listItemButtonConfig, { type ListItemButtonConfig } from '../../configs/listItemButtonConfig';
import mainConfig, { type MainConfig } from '../../layouts/Main/config';
import movableAvatarConfig, { type MovableAvatarConfig } from '../../../../components/MovableAvatar/config';
import navConfig, { type NavConfig } from '../../layouts/Nav/config';
import progressConfig, { type ProgressConfig } from '../../configs/progressConfig';
import sectionConfig, { type SectionConfig } from '../../layouts/Section/config';
import sidebarConfig, { type SidebarConfig } from '../../layouts/Sidebar/config';
// import textareaConfig, { type TextareaConfig } from '../../configs/Textarea';
import typographyConfig, { type TypographyConfig } from '../../configs/typographyConfig';

interface ThemeContext {
  theme: string;
  config: {
    accordion: AccordionConfig;
    accordionBody: AccordionBodyConfig;
    accordionHeader: AccordionHeaderConfig;
    alert: AlertConfig;
    avatar: AvatarConfig;
    backdrop: BackdropConfig;
    badge: BadgeConfig;
    breadcrumbs: BreadcrumbsConfig;
    button: ButtonConfig;
    card: CardConfig;
    cardBody: CardBodyConfig;
    cardFooter: CardFooterConfig;
    cardHeader: CardHeaderConfig;
    checkbox: CheckboxConfig;
    chip: ChipConfig;
    collapse: CollapseConfig;
    container: ContainerConfig;
    //    dropdown: DropdownConfig;
    // dropdownBody: DropdownBodyConfig;
    // dropdownFooter: DropdownFooterConfig;
    // dropdownHeader: DropdownHeaderConfig;
    footer: FooterConfig;
    form: FormConfig;
    formGroup: FormGroupConfig;
    header: HeaderConfig;
    icon: IconConfig;
    iconButton: IconButtonConfig;
    input: InputConfig;
    inputAdornment: InputAdornmentConfig;
    label: LabelConfig;
    link: LinkConfig;
    list: ListConfig;
    listItem: ListItemConfig;
    listItemButton: ListItemButtonConfig;
    main: MainConfig;
    movableAvatar: MovableAvatarConfig;
    nav: NavConfig;
    progress: ProgressConfig;
    section: SectionConfig;
    sidebar: SidebarConfig;
    // textarea: TextareaConfig;
    typography: TypographyConfig;
  }
  setTheme: Dispatch<SetStateAction<ThemeContext>>;
}

export const initialState: ThemeContext = {
  theme: 'default',
  config: {
    accordion: accordionConfig,
    accordionBody: accordionBodyConfig,
    accordionHeader: accordionHeaderConfig,
    alert: alertConfig,
    avatar: avatarConfig,
    backdrop: backdropConfig,
    badge: badgeConfig,
    breadcrumbs: breadcrumbsConfig,
    button: buttonConfig,
    card: cardConfig,
    cardBody: cardBodyConfig,
    cardFooter: cardFooterConfig,
    cardHeader: cardHeaderConfig,
    checkbox: checkboxConfig,
    chip: chipConfig,
    collapse: collapseConfig,
    container: containerConfig,
    // dropdown: dropdownConfig,
    // dropdownBody: dropdownBodyConfig,
    // dropdownFooter: dropdownFooterConfig,
    // dropdownHeader: dropdownHeaderConfig,
    footer: footerConfig,
    form: formConfig,
    formGroup: formGroupConfig,
    header: headerConfig,
    icon: iconConfig,
    iconButton: iconButtonConfig,
    input: inputConfig,
    inputAdornment: inputAdornmentConfig,
    label: labelConfig,
    link: linkConfig,
    list: listConfig,
    listItem: listItemConfig,
    listItemButton: listItemButtonConfig,
    main: mainConfig,
    movableAvatar: movableAvatarConfig,
    nav: navConfig,
    progress: progressConfig,
    section: sectionConfig,
    sidebar: sidebarConfig,
    // textarea: textareaConfig,
    typography: typographyConfig
  },
  setTheme: () => {}
};

const themeContext = createContext<ThemeContext>(initialState);

export default themeContext;
