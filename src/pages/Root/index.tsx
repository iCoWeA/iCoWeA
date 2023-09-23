import React, { useEffect, type FC, useContext, useState } from 'react';
import themeContext from '../../lib/simpleComponents/contexts/theme';
import { ScrollRestoration, Outlet } from 'react-router-dom';
import Accordion from '../../lib/simpleComponents/components/UI/Accordion';
import AccordionHeader from '../../lib/simpleComponents/components/UI/AccordionHeader';
import AccordionBody from '../../lib/simpleComponents/components/UI/AccordionPanel';
import AccordionIcon from '../../lib/simpleComponents/components/UI/AccordionIcon';
import Button from '../../lib/simpleComponents/components/UI/Button';
import Icon from '../../lib/simpleComponents/components/UI/Icon';
import Badge from '../../lib/simpleComponents/components/UI/Badge';
import Avatar from '../../lib/simpleComponents/components/UI/Avatar';
import Alert from '../../lib/simpleComponents/components/UI/Alert';
import ButtonGroup from '../../lib/simpleComponents/components/UI/ButtonGroup';
import Breadcrumbs from '../../lib/simpleComponents/components/UI/Breadcrumbs';
import CardHeader from '../../lib/simpleComponents/components/UI/CardHeader';
import CardBody from '../../lib/simpleComponents/components/UI/CardBody';
import CardFooter from '../../lib/simpleComponents/components/UI/CardFooter';
import Card from '../../lib/simpleComponents/components/UI/Card';
import Checkbox from '../../lib/simpleComponents/components/UI/Checkbox';
import Chip from '../../lib/simpleComponents/components/UI/Chip';
import AlertButton from '../../lib/simpleComponents/components/UI/AlertButton';
import ChipButton from '../../lib/simpleComponents/components/UI/ChipButton';
import Form from '../../lib/simpleComponents/components/UI/Form';
import Label from '../../lib/simpleComponents/components/UI/Label';
import List from '../../lib/simpleComponents/components/UI/List';
import Divider from '../../lib/simpleComponents/components/UI/Divider';
import FormControl from '../../lib/simpleComponents/components/UI/FormControl';
import IconButton from '../../lib/simpleComponents/components/UI/IconButton';
import Link from '../../lib/simpleComponents/components/UI/Link';
import LinearProgress from '../../lib/simpleComponents/components/UI/LinearProgress';
import ListItem from '../../lib/simpleComponents/components/UI/ListItem';
import ListItemButton from '../../lib/simpleComponents/components/UI/ListItemButton';
import Typography from '../../lib/simpleComponents/components/UI/Typography';
import ListSeparator from '../../lib/simpleComponents/components/UI/ListSeparator';

const Component: FC = () => {
  /* --- Set context props --- */
  const theme = useContext(themeContext).theme;

  /* --- Set background --- */
  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('bg-default-background-');
    }
  }, []);

  const [checkbox, setCheckbox] = useState(false);

  return (
    <>
    <div className='flex flex-col gap-2 p-4'>
      <Accordion>
        <AccordionHeader>H</AccordionHeader>
        <AccordionBody>B</AccordionBody>
      </Accordion>
      <Accordion>
        <AccordionHeader startDecorator={<AccordionIcon start><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></AccordionIcon>}>H</AccordionHeader>
        <AccordionBody>B</AccordionBody>
      </Accordion>
      <Accordion>
        <AccordionHeader endDecorator={<AccordionIcon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></AccordionIcon>}>H</AccordionHeader>
        <AccordionBody>B</AccordionBody>
      </Accordion>
      <Accordion>
        <AccordionHeader startDecorator={<AccordionIcon start><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></AccordionIcon>} endDecorator={<AccordionIcon/>}>H</AccordionHeader>
        <AccordionBody>B</AccordionBody>
      </Accordion>
      <Accordion>
        <AccordionHeader disabled startDecorator={<AccordionIcon start><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></AccordionIcon>} endDecorator={<AccordionIcon/>}>H</AccordionHeader>
        <AccordionBody>B</AccordionBody>
      </Accordion>
      </div>
      <div className='flex flex-col gap-2 p-4'>
      <Accordion>
      <AccordionHeader startDecorator={<AccordionIcon start><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></AccordionIcon>} endDecorator={<AccordionIcon/>}>H</AccordionHeader>
        <Divider/>
        <AccordionBody>B</AccordionBody>
      </Accordion>
      <Accordion color='default'>
      <AccordionHeader startDecorator={<AccordionIcon start><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></AccordionIcon>} endDecorator={<AccordionIcon/>}>H</AccordionHeader>
      <Divider/>
        <AccordionBody>B</AccordionBody>
      </Accordion>
      <Accordion color='primary'>
      <AccordionHeader startDecorator={<AccordionIcon start><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></AccordionIcon>} endDecorator={<AccordionIcon/>}>H</AccordionHeader>
      <Divider/>
        <AccordionBody>B</AccordionBody>
      </Accordion>
      <Accordion color='secondary'>
        <AccordionHeader startDecorator={<AccordionIcon start><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></AccordionIcon>} endDecorator={<AccordionIcon/>}>H</AccordionHeader>
        <Divider/>
        <AccordionBody>B</AccordionBody>
      </Accordion>
      <Accordion color='success'>
        <AccordionHeader startDecorator={<AccordionIcon start><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></AccordionIcon>} endDecorator={<AccordionIcon/>}>H</AccordionHeader>
        <Divider/>
        <AccordionBody>B</AccordionBody>
      </Accordion>
      <Accordion color='warning'>
        <AccordionHeader startDecorator={<AccordionIcon start><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></AccordionIcon>} endDecorator={<AccordionIcon/>}>H</AccordionHeader>
        <Divider/>
        <AccordionBody>B</AccordionBody>
      </Accordion>
      <Accordion color='error'>
        <AccordionHeader startDecorator={<AccordionIcon start><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></AccordionIcon>} endDecorator={<AccordionIcon/>}>H</AccordionHeader>
        <Divider/>
        <AccordionBody>B</AccordionBody>
      </Accordion>
      </div>
      <div className='flex flex-col gap-2 p-4'>
      <Accordion variant="plain">
      <AccordionHeader startDecorator={<AccordionIcon start><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></AccordionIcon>} endDecorator={<AccordionIcon/>}>H</AccordionHeader>
        <AccordionBody>B</AccordionBody>
      </Accordion>
      <Accordion color='default' variant="plain">
      <AccordionHeader startDecorator={<AccordionIcon start><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></AccordionIcon>} endDecorator={<AccordionIcon/>}>H</AccordionHeader>
        <AccordionBody>B</AccordionBody>
      </Accordion>
      <Accordion color='primary' variant="plain">
      <AccordionHeader startDecorator={<AccordionIcon start><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></AccordionIcon>} endDecorator={<AccordionIcon/>}>H</AccordionHeader>
        <AccordionBody>B</AccordionBody>
      </Accordion>
      <Accordion color='secondary' variant="plain">
        <AccordionHeader startDecorator={<AccordionIcon start><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></AccordionIcon>} endDecorator={<AccordionIcon/>}>H</AccordionHeader>
        <AccordionBody>B</AccordionBody>
      </Accordion>
      <Accordion color='success' variant="plain">
        <AccordionHeader startDecorator={<AccordionIcon start><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></AccordionIcon>} endDecorator={<AccordionIcon/>}>H</AccordionHeader>
        <AccordionBody>B</AccordionBody>
      </Accordion>
      <Accordion color='warning' variant="plain">
        <AccordionHeader startDecorator={<AccordionIcon start><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></AccordionIcon>} endDecorator={<AccordionIcon/>}>H</AccordionHeader>
        <AccordionBody>B</AccordionBody>
      </Accordion>
      <Accordion color='error' variant="plain">
        <AccordionHeader startDecorator={<AccordionIcon start><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></AccordionIcon>} endDecorator={<AccordionIcon/>}>H</AccordionHeader>
        <AccordionBody>B</AccordionBody>
      </Accordion>
      </div>
      <div className='flex flex-col gap-2 p-4'>
      <Accordion variant='filled'>
        <AccordionHeader startDecorator={<AccordionIcon start><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></AccordionIcon>} endDecorator={<AccordionIcon/>}>H</AccordionHeader>
        <AccordionBody>B</AccordionBody>
      </Accordion>
      <Accordion color='default' variant='filled'>
      <AccordionHeader startDecorator={<AccordionIcon start><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></AccordionIcon>} endDecorator={<AccordionIcon/>}>H</AccordionHeader>
        <AccordionBody>B</AccordionBody>
      </Accordion>
      <Accordion color='primary' variant='filled'>
      <AccordionHeader startDecorator={<AccordionIcon start><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></AccordionIcon>} endDecorator={<AccordionIcon/>}>H</AccordionHeader>
        <AccordionBody>B</AccordionBody>
      </Accordion>
      <Accordion color='secondary' variant='filled'>
        <AccordionHeader startDecorator={<AccordionIcon start><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></AccordionIcon>} endDecorator={<AccordionIcon/>}>H</AccordionHeader>
        <AccordionBody>B</AccordionBody>
      </Accordion>
      <Accordion color='success' variant='filled'>
        <AccordionHeader startDecorator={<AccordionIcon start><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></AccordionIcon>} endDecorator={<AccordionIcon/>}>H</AccordionHeader>
        <AccordionBody>B</AccordionBody>
      </Accordion>
      <Accordion color='warning' variant='filled'>
        <AccordionHeader startDecorator={<AccordionIcon start><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></AccordionIcon>} endDecorator={<AccordionIcon/>}>H</AccordionHeader>
        <AccordionBody>B</AccordionBody>
      </Accordion>
      <Accordion color='error' variant='filled'>
        <AccordionHeader startDecorator={<AccordionIcon start><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></AccordionIcon>} endDecorator={<AccordionIcon/>}>H</AccordionHeader>
        <AccordionBody>B</AccordionBody>
      </Accordion>
     </div>
      <div className='flex flex-col gap-2 p-4'>
        <Alert>Alert</Alert>
        <Alert startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>}>Alert</Alert>
        <Alert>Alert<Button>B</Button></Alert>
        <Alert startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>}>Alert<Button>B</Button></Alert>
        <Alert startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<Button variant='plain' color='error'>Button</Button>}>Alert<Button>B</Button></Alert>
        <Alert startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<AlertButton/>} closeButton>Alert<Button>B</Button></Alert>
      </div>
      <div className='flex flex-col gap-2 p-4'>
        <Alert variant="plain" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<AlertButton alertVariant='plain'/>} closeButton>Alert</Alert>
        <Alert variant="plain" color="default" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<AlertButton color="default" alertVariant='plain'/>} closeButton>Alert</Alert>
        <Alert variant="plain" color="primary" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<AlertButton color="primary" alertVariant='plain'/>} closeButton>Alert</Alert>
        <Alert variant="plain" color="secondary" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<AlertButton color="secondary" alertVariant='plain'/>} closeButton>Alert</Alert>
        <Alert variant="plain" color="success" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<AlertButton color="success" alertVariant='plain'/>} closeButton>Alert</Alert>
        <Alert variant="plain" color="warning" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<AlertButton color="warning" alertVariant='plain'/>} closeButton>Alert</Alert>
        <Alert variant="plain" color="error" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<AlertButton color="error" alertVariant='plain'/>} closeButton>Alert</Alert>
      </div>
      <div className='flex flex-col gap-2 p-4'>
        <Alert variant="filled" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<AlertButton alertVariant='filled'/>} closeButton>Alert</Alert>
        <Alert variant="filled" color="default" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<AlertButton color="default" alertVariant='filled'/>} closeButton>Alert</Alert>
        <Alert variant="filled" color="primary" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<AlertButton color="primary" alertVariant='filled'/>} closeButton>Alert</Alert>
        <Alert variant="filled" color="secondary" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<AlertButton color="secondary" alertVariant='filled'/>} closeButton>Alert</Alert>
        <Alert variant="filled" color="success" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<AlertButton color="success" alertVariant='filled'/>} closeButton>Alert</Alert>
        <Alert variant="filled" color="warning" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<AlertButton color="warning" alertVariant='filled'/>} closeButton>Alert</Alert>
        <Alert variant="filled" color="error" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<AlertButton color="error" alertVariant='filled'/>} closeButton>Alert</Alert>
      </div>
      <div className='flex flex-col gap-2 p-4'>
        <Alert variant="ghost" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<AlertButton alertVariant='ghost'/>} closeButton>Alert</Alert>
        <Alert variant="ghost" color="default" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<AlertButton color="default" alertVariant='ghost'/>} closeButton>Alert</Alert>
        <Alert variant="ghost" color="primary" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<AlertButton color="primary" alertVariant='ghost'/>} closeButton>Alert</Alert>
        <Alert variant="ghost" color="secondary" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<AlertButton color="secondary" alertVariant='ghost'/>} closeButton>Alert</Alert>
        <Alert variant="ghost" color="success" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<AlertButton color="success" alertVariant='ghost'/>} closeButton>Alert</Alert>
        <Alert variant="ghost" color="warning" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<AlertButton color="warning" alertVariant='ghost'/>} closeButton>Alert</Alert>
        <Alert variant="ghost" color="error" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<AlertButton color="error" alertVariant='ghost'/>} closeButton>Alert</Alert>
      </div>
      <div className='flex flex-col gap-2 p-4'>
        <Alert variant="outlined" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<AlertButton alertVariant='outlined'/>} closeButton>Alert</Alert>
        <Alert variant="outlined" color="default" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<AlertButton color='default' alertVariant='outlined'/>} closeButton>Alert</Alert>
        <Alert variant="outlined" color="primary" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<AlertButton color='primary' alertVariant='outlined'/>} closeButton>Alert</Alert>
        <Alert variant="outlined" color="secondary" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<AlertButton color='seconday' alertVariant='outlined'/>} closeButton>Alert</Alert>
        <Alert variant="outlined" color="success" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<AlertButton color='success' alertVariant='outlined'/>} closeButton>Alert</Alert>
        <Alert variant="outlined" color="warning" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<AlertButton color='warning' alertVariant='outlined'/>} closeButton>Alert</Alert>
        <Alert variant="outlined" color="error" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<AlertButton color='error' alertVariant='outlined'/>} closeButton>Alert</Alert>
      </div>
      <div className='flex gap-2 p-4'>
      <Avatar withBorder containerProps={{ className: 'outline-black' }}>A</Avatar>
      <Avatar>A</Avatar>
      <Avatar>AV</Avatar>
      <Avatar>AVA TAR</Avatar>
      <Avatar>AV AT AR</Avatar>
      <Avatar src={require('../../assets/images/photo.png')}/>
      </div>
      <div className='flex gap-2 p-4'>
      <Avatar>AV</Avatar>
      <Avatar size='xs'>AV</Avatar>
      <Avatar size='sm'>AV</Avatar>
      <Avatar size='md'>AV</Avatar>
      <Avatar size='lg'>AV</Avatar>
      </div>
      <div className='flex gap-2 p-4'>
      <Avatar>AV</Avatar>
      <Avatar color="default">AV</Avatar>
      <Avatar color="primary">AV</Avatar>
      <Avatar color="secondary">AV</Avatar>
      <Avatar color="success">AV</Avatar>
      <Avatar color="warning">AV</Avatar>
      <Avatar color="error">AV</Avatar>
      </div>
      <div className='flex gap-2 p-4'>
      <Badge invisible><Button>B</Button></Badge>
      <Badge withBorder className='outline-black'><Button>B</Button></Badge>
      <Badge><Button>B</Button></Badge>
      <Badge badgeContent="9"><Button>B</Button></Badge>
      <Badge badgeContent="999"><Button>B</Button></Badge>
      </div>
      <div className='flex gap-2 p-4'>
      <Badge><Button>B</Button></Badge>
      <Badge position="bottom-left"><Button>B</Button></Badge>
      <Badge position="top-right"><Button>B</Button></Badge>
      <Badge position="bottom-right"><Button>B</Button></Badge>
      <Badge position="top-left"><Button>B</Button></Badge>
      </div>
      <div className='flex gap-2 p-4'>
      <Badge badgeContent="999"><Button>B</Button></Badge>
      <Badge position="bottom-left" badgeContent="999"><Button>B</Button></Badge>
      <Badge position="top-right" badgeContent="999"><Button>B</Button></Badge>
      <Badge position="bottom-right" badgeContent="999"><Button>B</Button></Badge>
      <Badge position="top-left" badgeContent="999"><Button>B</Button></Badge>
      </div>
      <div className='flex gap-2 p-4'>
      <Badge><Button>B</Button></Badge>
      <Badge color="default"><Button>B</Button></Badge>
      <Badge color="primary"><Button>B</Button></Badge>
      <Badge color="secondary"><Button>B</Button></Badge>
      <Badge color="success"><Button>B</Button></Badge>
      <Badge color="warning"><Button>B</Button></Badge>
      <Badge color="error"><Button>B</Button></Badge>
      </div>
      <div className='flex gap-2 flex-col p-4'>
      <Breadcrumbs separator='+'><span>1</span><span>2</span><span>3</span></Breadcrumbs>
        <Breadcrumbs><span>1</span><span>2</span><span>3</span></Breadcrumbs>
        <Breadcrumbs color="default"><span>1</span><span>2</span><span>3</span></Breadcrumbs>
        <Breadcrumbs color="primary"><span>1</span><span>2</span><span>3</span></Breadcrumbs>
        <Breadcrumbs color="secondary"><span>1</span><span>2</span><span>3</span></Breadcrumbs>
        <Breadcrumbs color="success"><span>1</span><span>2</span><span>3</span></Breadcrumbs>
        <Breadcrumbs color="warning"><span>1</span><span>2</span><span>3</span></Breadcrumbs>
        <Breadcrumbs color="error"><span>1</span><span>2</span><span>3</span></Breadcrumbs>
      </div>
      <div className='flex gap-2 p-4'>
      <Button fullwidth startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      </div>
      <div className='flex gap-2 p-4'>
      <Button elevated variant="plain" startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button elevated variant="text" startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button elevated variant="outlined" startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button elevated variant="filled" startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      </div>
      <div className='flex gap-2 p-4'>
      <Button elevated disabled variant="plain" startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button elevated disabled variant="text" startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button elevated disabled variant="outlined" startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button elevated disabled variant="filled" startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      </div>
      <div className='flex gap-2 p-4'>
      <Button variant="outlined" startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button variant="outlined" size='xs' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button variant="outlined" size='sm' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button variant="outlined" size='md' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button variant="outlined" size='lg' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      </div>
      <div className='flex gap-2 p-4'>
      <Button startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button size='xs' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button size='sm' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button size='md' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button size='lg' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      </div>
      <div className='flex gap-2 p-4 bg-light-surface-dark'>
      <Button variant='plain' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button variant='plain' color='default' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button variant='plain' color='primary' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button variant='plain' color='secondary' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button variant='plain' color='success' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button variant='plain' color='warning' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button variant='plain' color='error' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      </div>
      <div className='flex gap-2 p-4 bg-light-surface-dark'>
      <Button disabled variant='plain' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button disabled variant='plain' color='default' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button disabled variant='plain' color='primary' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button disabled variant='plain' color='secondary' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button disabled variant='plain' color='success' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button disabled variant='plain' color='warning' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button disabled variant='plain' color='error' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      </div>
      <div className='flex gap-2 p-4'>
      <Button variant='text' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button variant='text' color='default' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button variant='text' color='primary' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button variant='text' color='secondary' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button variant='text' color='success' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button variant='text' color='warning' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button variant='text' color='error' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      </div>
      <div className='flex gap-2 p-4'>
      <Button disabled variant='text' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button disabled variant='text' color='default' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button disabled variant='text' color='primary' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button disabled variant='text' color='secondary' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button disabled variant='text' color='success' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button disabled variant='text' color='warning' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button disabled variant='text' color='error' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      </div>
      <div className='flex gap-2 p-4'>
      <Button variant='outlined' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button variant='outlined' color='default' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button variant='outlined' color='primary' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button variant='outlined' color='secondary' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button variant='outlined' color='success' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button variant='outlined' color='warning' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button variant='outlined' color='error' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      </div>
      <div className='flex gap-2 p-4'>
      <Button disabled variant='outlined' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button disabled variant='outlined' color='default' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button disabled variant='outlined' color='primary' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button disabled variant='outlined' color='secondary' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button disabled variant='outlined' color='success' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button disabled variant='outlined' color='warning' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button disabled variant='outlined' color='error' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      </div>
      <div className='flex gap-2 p-4'>
      <Button variant='filled' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button variant='filled' color='default' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button variant='filled' color='primary' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button variant='filled' color='secondary' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button variant='filled' color='success' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button variant='filled' color='warning' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button variant='filled' color='error' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      </div>
      <div className='flex gap-2 p-4'>
      <Button disabled variant='filled' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button disabled variant='filled' color='default' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button disabled variant='filled' color='primary' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button disabled variant='filled' color='secondary' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button disabled variant='filled' color='success' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button disabled variant='filled' color='warning' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      <Button disabled variant='filled' color='error' startDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>} endDecoration={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon>}>B</Button>
      </div>
      <div className='flex gap-2 p-4'>
      <ButtonGroup fullwidth>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ButtonGroup>
      <ButtonGroup elevated>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ButtonGroup>
      </div>
      <div className='flex gap-2 p-4'>
      <ButtonGroup variant="outlined">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ButtonGroup>
      <ButtonGroup size='xs' variant="outlined">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ButtonGroup>
      <ButtonGroup size='sm' variant="outlined">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ButtonGroup>
      <ButtonGroup size='md' variant="outlined">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ButtonGroup>
      <ButtonGroup size='lg' variant="outlined">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ButtonGroup>
      </div>
      <div className='flex gap-2 p-4'>
      <ButtonGroup>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ButtonGroup>
      <ButtonGroup size='xs'>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ButtonGroup>
      <ButtonGroup size='sm'>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ButtonGroup>
      <ButtonGroup size='md'>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ButtonGroup>
      <ButtonGroup size='lg'>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ButtonGroup>
      </div>
      <div className='flex gap-2 p-4 bg-light-surface-dark'>
      <ButtonGroup variant="plain">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ButtonGroup>
      <ButtonGroup variant="plain" color="default">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ButtonGroup>
      <ButtonGroup variant="plain" color="primary">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ButtonGroup>
      <ButtonGroup variant="plain" color="secondary">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ButtonGroup>
      <ButtonGroup variant="plain" color="success">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ButtonGroup>
      <ButtonGroup variant="plain" color="warning">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ButtonGroup>
      <ButtonGroup variant="plain" color="error">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ButtonGroup>
      </div>
      <div className='flex gap-2 p-4 bg-light-surface-dark'>
      <ButtonGroup variant="plain">
        <button disabled>1</button>
        <button>2</button>
        <button disabled>3</button>
        <button disabled>4</button>
      </ButtonGroup>
      <ButtonGroup variant="plain" color="default">
      <button disabled>1</button>
        <button>2</button>
        <button disabled>3</button>
        <button disabled>4</button>
      </ButtonGroup>
      <ButtonGroup variant="plain" color="primary">
      <button disabled>1</button>
        <button>2</button>
        <button disabled>3</button>
        <button disabled>4</button>
      </ButtonGroup>
      <ButtonGroup variant="plain" color="secondary">
      <button disabled>1</button>
        <button>2</button>
        <button disabled>3</button>
        <button disabled>4</button>
      </ButtonGroup>
      <ButtonGroup variant="plain" color="success">
      <button disabled>1</button>
        <button>2</button>
        <button disabled>3</button>
        <button disabled>4</button>
      </ButtonGroup>
      <ButtonGroup variant="plain" color="warning">
      <button disabled>1</button>
        <button>2</button>
        <button disabled>3</button>
        <button disabled>4</button>
      </ButtonGroup>
      <ButtonGroup variant="plain" color="error">
      <button disabled>1</button>
        <button>2</button>
        <button disabled>3</button>
        <button disabled>4</button>
      </ButtonGroup>
      </div>
      <div className='flex gap-2 p-4'>
      <ButtonGroup variant="text">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ButtonGroup>
      <ButtonGroup variant="text" color="default">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ButtonGroup>
      <ButtonGroup variant="text" color="primary">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ButtonGroup>
      <ButtonGroup variant="text" color="secondary">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ButtonGroup>
      <ButtonGroup variant="text" color="success">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ButtonGroup>
      <ButtonGroup variant="text" color="warning">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ButtonGroup>
      <ButtonGroup variant="text" color="error">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ButtonGroup>
      </div>
      <div className='flex gap-2 p-4'>
      <ButtonGroup variant="text">
        <button disabled>1</button>
        <button>2</button>
        <button disabled>3</button>
        <button disabled>4</button>
      </ButtonGroup>
      <ButtonGroup variant="text" color="default">
      <button disabled>1</button>
        <button>2</button>
        <button disabled>3</button>
        <button disabled>4</button>
      </ButtonGroup>
      <ButtonGroup variant="text" color="primary">
      <button disabled>1</button>
        <button>2</button>
        <button disabled>3</button>
        <button disabled>4</button>
      </ButtonGroup>
      <ButtonGroup variant="text" color="secondary">
      <button disabled>1</button>
        <button>2</button>
        <button disabled>3</button>
        <button disabled>4</button>
      </ButtonGroup>
      <ButtonGroup variant="text" color="success">
      <button disabled>1</button>
        <button>2</button>
        <button disabled>3</button>
        <button disabled>4</button>
      </ButtonGroup>
      <ButtonGroup variant="text" color="warning">
      <button disabled>1</button>
        <button>2</button>
        <button disabled>3</button>
        <button disabled>4</button>
      </ButtonGroup>
      <ButtonGroup variant="text" color="error">
      <button disabled>1</button>
        <button>2</button>
        <button disabled>3</button>
        <button disabled>4</button>
      </ButtonGroup>
      </div>
      <div className='flex gap-2 p-4'>
      <ButtonGroup variant="outlined">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ButtonGroup>
      <ButtonGroup variant="outlined" color="default">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ButtonGroup>
      <ButtonGroup variant="outlined" color="primary">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ButtonGroup>
      <ButtonGroup variant="outlined" color="secondary">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ButtonGroup>
      <ButtonGroup variant="outlined" color="success">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ButtonGroup>
      <ButtonGroup variant="outlined" color="warning">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ButtonGroup>
      <ButtonGroup variant="outlined" color="error">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ButtonGroup>
      </div>
      <div className='flex gap-2 p-4'>
      <ButtonGroup variant="outlined">
        <button disabled>1</button>
        <button>2</button>
        <button disabled>3</button>
        <button disabled>4</button>
      </ButtonGroup>
      <ButtonGroup variant="outlined" color="default">
      <button disabled>1</button>
        <button>2</button>
        <button disabled>3</button>
        <button disabled>4</button>
      </ButtonGroup>
      <ButtonGroup variant="outlined" color="primary">
      <button disabled>1</button>
        <button>2</button>
        <button disabled>3</button>
        <button disabled>4</button>
      </ButtonGroup>
      <ButtonGroup variant="outlined" color="secondary">
      <button disabled>1</button>
        <button>2</button>
        <button disabled>3</button>
        <button disabled>4</button>
      </ButtonGroup>
      <ButtonGroup variant="outlined" color="success">
      <button disabled>1</button>
        <button>2</button>
        <button disabled>3</button>
        <button disabled>4</button>
      </ButtonGroup>
      <ButtonGroup variant="outlined" color="warning">
      <button disabled>1</button>
        <button>2</button>
        <button disabled>3</button>
        <button disabled>4</button>
      </ButtonGroup>
      <ButtonGroup variant="outlined" color="error">
      <button disabled>1</button>
        <button>2</button>
        <button disabled>3</button>
        <button disabled>4</button>
      </ButtonGroup>
      </div>
      <div className='flex gap-2 p-4'>
      <ButtonGroup variant="filled">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ButtonGroup>
      <ButtonGroup variant="filled" color="default">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ButtonGroup>
      <ButtonGroup variant="filled" color="primary">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ButtonGroup>
      <ButtonGroup variant="filled" color="secondary">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ButtonGroup>
      <ButtonGroup variant="filled" color="success">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ButtonGroup>
      <ButtonGroup variant="filled" color="warning">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ButtonGroup>
      <ButtonGroup variant="filled" color="error">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </ButtonGroup>
      </div>
      <div className='flex gap-2 p-4'>
      <ButtonGroup variant="filled">
        <button disabled>1</button>
        <button>2</button>
        <button disabled>3</button>
        <button disabled>4</button>
      </ButtonGroup>
      <ButtonGroup variant="filled" color="default">
      <button disabled>1</button>
        <button>2</button>
        <button disabled>3</button>
        <button disabled>4</button>
      </ButtonGroup>
      <ButtonGroup variant="filled" color="primary">
      <button disabled>1</button>
        <button>2</button>
        <button disabled>3</button>
        <button disabled>4</button>
      </ButtonGroup>
      <ButtonGroup variant="filled" color="secondary">
      <button disabled>1</button>
        <button>2</button>
        <button disabled>3</button>
        <button disabled>4</button>
      </ButtonGroup>
      <ButtonGroup variant="filled" color="success">
      <button disabled>1</button>
        <button>2</button>
        <button disabled>3</button>
        <button disabled>4</button>
      </ButtonGroup>
      <ButtonGroup variant="filled" color="warning">
      <button disabled>1</button>
        <button>2</button>
        <button disabled>3</button>
        <button disabled>4</button>
      </ButtonGroup>
      <ButtonGroup variant="filled" color="error">
      <button disabled>1</button>
        <button>2</button>
        <button disabled>3</button>
        <button disabled>4</button>
      </ButtonGroup>
      </div>
      <div className='flex flex-col gap-2 p-4'>
        <Card>
          <CardHeader><span>1</span><span>2</span></CardHeader>
          <CardBody><span>1</span><span>2</span></CardBody>
          <CardFooter><span>1</span><span>2</span></CardFooter>
        </Card>
        <Card variant='plain'>
          <CardHeader><span>1</span><span>2</span></CardHeader>
          <CardBody><span>1</span><span>2</span></CardBody>
          <CardFooter><span>1</span><span>2</span></CardFooter>
        </Card>
        <Card variant='filled'>
          <CardHeader><span>1</span><span>2</span></CardHeader>
          <CardBody><span>1</span><span>2</span></CardBody>
          <CardFooter><span>1</span><span>2</span></CardFooter>
        </Card>
        <Card variant='outlined'>
          <CardHeader><span>1</span><span>2</span></CardHeader>
          <CardBody><span>1</span><span>2</span></CardBody>
          <CardFooter><span>1</span><span>2</span></CardFooter>
        </Card>
        <Card elevated>
          <CardHeader><span>1</span><span>2</span></CardHeader>
          <CardBody><span>1</span><span>2</span></CardBody>
          <CardFooter><span>1</span><span>2</span></CardFooter>
        </Card>
        <Card grabed>
          <CardHeader><span>1</span><span>2</span></CardHeader>
          <CardBody><span>1</span><span>2</span></CardBody>
          <CardFooter><span>1</span><span>2</span></CardFooter>
        </Card>
      </div>
      <div className='flex flex-col gap-2 p-4'>
      <Card clickable>
          <CardHeader><span>1</span><span>2</span></CardHeader>
          <CardBody><span>1</span><span>2</span></CardBody>
          <CardFooter><span>1</span><span>2</span></CardFooter>
        </Card>
        <Card clickable variant='plain'>
          <CardHeader><span>1</span><span>2</span></CardHeader>
          <CardBody><span>1</span><span>2</span></CardBody>
          <CardFooter><span>1</span><span>2</span></CardFooter>
        </Card>
        <Card clickable variant='filled'>
          <CardHeader><span>1</span><span>2</span></CardHeader>
          <CardBody><span>1</span><span>2</span></CardBody>
          <CardFooter><span>1</span><span>2</span></CardFooter>
        </Card>
        <Card clickable variant='outlined'>
          <CardHeader><span>1</span><span>2</span></CardHeader>
          <CardBody><span>1</span><span>2</span></CardBody>
          <CardFooter><span>1</span><span>2</span></CardFooter>
        </Card>
      </div>
      <div className='flex flex-col gap-2 p-4'>
      <Card clickable disabled>
          <CardHeader><span>1</span><span>2</span></CardHeader>
          <CardBody><span>1</span><span>2</span></CardBody>
          <CardFooter><span>1</span><span>2</span></CardFooter>
        </Card>
        <Card clickable disabled variant='plain'>
          <CardHeader><span>1</span><span>2</span></CardHeader>
          <CardBody><span>1</span><span>2</span></CardBody>
          <CardFooter><span>1</span><span>2</span></CardFooter>
        </Card>
        <Card clickable disabled variant='filled'>
          <CardHeader><span>1</span><span>2</span></CardHeader>
          <CardBody><span>1</span><span>2</span></CardBody>
          <CardFooter><span>1</span><span>2</span></CardFooter>
        </Card>
        <Card clickable disabled variant='outlined'>
          <CardHeader><span>1</span><span>2</span></CardHeader>
          <CardBody><span>1</span><span>2</span></CardBody>
          <CardFooter><span>1</span><span>2</span></CardFooter>
        </Card>
      </div>
      <div className='flex gap-2 p-4'>
        <Checkbox checked={checkbox} onChange={() => { setCheckbox((isOpen) => !isOpen); } }/>
        <Checkbox valid checked={checkbox} onChange={() => { setCheckbox((isOpen) => !isOpen); } }/>
        <Checkbox invalid checked={checkbox} onChange={() => { setCheckbox((isOpen) => !isOpen); } }/>
        <Checkbox valid disabled checked={checkbox} onChange={() => { setCheckbox((isOpen) => !isOpen); } }/>
        <Checkbox invalid disabled checked={checkbox} onChange={() => { setCheckbox((isOpen) => !isOpen); } }/>
      </div>
      <div className='flex gap-2 p-4'>
        <Checkbox checked={checkbox} onChange={() => { setCheckbox((isOpen) => !isOpen); } }/>
        <Checkbox color="default" checked={checkbox} onChange={() => { setCheckbox((isOpen) => !isOpen); } }/>
        <Checkbox color="primary" checked={checkbox} onChange={() => { setCheckbox((isOpen) => !isOpen); } }/>
        <Checkbox color="secondary" checked={checkbox} onChange={() => { setCheckbox((isOpen) => !isOpen); } }/>
        <Checkbox color="success" checked={checkbox} onChange={() => { setCheckbox((isOpen) => !isOpen); } }/>
        <Checkbox color="warning" checked={checkbox} onChange={() => { setCheckbox((isOpen) => !isOpen); } }/>
        <Checkbox color="error" checked={checkbox} onChange={() => { setCheckbox((isOpen) => !isOpen); } }/>
      </div>
      <div className='flex gap-2 p-4'>
        <Checkbox disabled checked={checkbox} onChange={() => { setCheckbox((isOpen) => !isOpen); } }/>
        <Checkbox disabled color="default" checked={checkbox} onChange={() => { setCheckbox((isOpen) => !isOpen); } }/>
        <Checkbox disabled color="primary" checked={checkbox} onChange={() => { setCheckbox((isOpen) => !isOpen); } }/>
        <Checkbox disabled color="secondary" checked={checkbox} onChange={() => { setCheckbox((isOpen) => !isOpen); } }/>
        <Checkbox disabled color="success" checked={checkbox} onChange={() => { setCheckbox((isOpen) => !isOpen); } }/>
        <Checkbox disabled color="warning" checked={checkbox} onChange={() => { setCheckbox((isOpen) => !isOpen); } }/>
        <Checkbox disabled color="error" checked={checkbox} onChange={() => { setCheckbox((isOpen) => !isOpen); } }/>
      </div>
      <div className='flex flex-col gap-2 p-4'>
        <Chip>Alert</Chip>
        <Chip startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>}>Alert</Chip>
        <Chip>Alert<Button>B</Button></Chip>
        <Chip startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>}>Alert<Button>B</Button></Chip>
        <Chip startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<Button size="xs" variant='plain'>Button</Button>}>Alert<Button>B</Button></Chip>
        <Chip startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<ChipButton/>} closeButton>Alert<Button>B</Button></Chip>
      </div>
      <div className='flex gap-2 p-4'>
      <Chip borderShape="rounded" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>}>Alert</Chip>
        <Chip borderShape="circular" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>}>Alert</Chip>
        <Chip borderShape="square" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>}>Alert</Chip>
      </div>
      <div className='flex flex-col gap-2 p-4'>
        <Chip variant="filled" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<ChipButton chipVariant="filled"/>} closeButton>Alert</Chip>
        <Chip variant="filled" color="default" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<ChipButton color="default" chipVariant="filled"/>} closeButton>Alert</Chip>
        <Chip variant="filled" color="primary" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<ChipButton color="primary" chipVariant="filled"/>} closeButton>Alert</Chip>
        <Chip variant="filled" color="secondary" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<ChipButton color="secondary" chipVariant="filled"/>} closeButton>Alert</Chip>
        <Chip variant="filled" color="success" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<ChipButton color="success" chipVariant="filled"/>} closeButton>Alert</Chip>
        <Chip variant="filled" color="warning" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<ChipButton color="warning" chipVariant="filled"/>} closeButton>Alert</Chip>
        <Chip variant="filled" color="error" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<ChipButton color="error" chipVariant="filled"/>} closeButton>Alert</Chip>
      </div>
      <div className='flex flex-col gap-2 p-4'>
        <Chip variant="ghost" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<ChipButton chipVariant="ghost"/>} closeButton>Alert</Chip>
        <Chip variant="ghost" color="default" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<ChipButton color="default" chipVariant="ghost"/>} closeButton>Alert</Chip>
        <Chip variant="ghost" color="primary" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<ChipButton color="primary" chipVariant="ghost"/>} closeButton>Alert</Chip>
        <Chip variant="ghost" color="secondary" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<ChipButton color="secondary" chipVariant="ghost"/>} closeButton>Alert</Chip>
        <Chip variant="ghost" color="success" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<ChipButton color="success" chipVariant="ghost"/>} closeButton>Alert</Chip>
        <Chip variant="ghost" color="warning" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<ChipButton color="warning" chipVariant="ghost"/>} closeButton>Alert</Chip>
        <Chip variant="ghost" color="error" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<ChipButton color="error" chipVariant="ghost"/>} closeButton>Alert</Chip>
      </div>
      <div className='flex flex-col gap-2 p-4'>
        <Chip variant="outlined" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<ChipButton chipVariant="outlined"/>} closeButton>Alert</Chip>
        <Chip variant="outlined" color="default" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<ChipButton color="default" chipVariant="outlined"/>} closeButton>Alert</Chip>
        <Chip variant="outlined" color="primary" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<ChipButton color="primary" chipVariant="outlined"/>} closeButton>Alert</Chip>
        <Chip variant="outlined" color="secondary" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<ChipButton color="secondary" chipVariant="outlined"/>} closeButton>Alert</Chip>
        <Chip variant="outlined" color="success" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<ChipButton color="success" chipVariant="outlined"/>} closeButton>Alert</Chip>
        <Chip variant="outlined" color="warning" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<ChipButton color="warning" chipVariant="outlined"/>} closeButton>Alert</Chip>
        <Chip variant="outlined" color="error" startDecorator={<Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>} endDecorator={<ChipButton color="error" chipVariant="outlined"/>} closeButton>Alert</Chip>
      </div>
      <div className='flex gap-2 p-4 h-40'>
      <Divider />
        <Divider orientation='vertical'/>
      </div>
      <div className='flex gap-2 p-4'>
      <Form>
        <Button>Button Form</Button>
        <Button>Button Form</Button>
      </Form>
      </div>
      <div className='flex gap-2 p-4'>
      <FormControl>
          <Button>Button</Button>
        </FormControl>
        <FormControl helperText='text'>
          <Button>Button</Button>
        </FormControl>
      </div>
      <div className='flex gap-2 p-4'>
        <Icon size='xs'><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>
        <Icon size='sm'><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>
        <Icon size='md'><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>
        <Icon size='lg'><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>
      </div>
      <div className='flex gap-2 p-4'>
      <Icon size='xs' color="default"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>
      <Icon size='xs' color="primary"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>
      <Icon size='xs' color="secondary"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>
      <Icon size='xs' color="success"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>
      <Icon size='xs' color="warning"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>
      <Icon size='xs' color="error"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></Icon>
      </div>
      <div className='flex gap-2 p-4'>
      <IconButton elevated variant="plain"><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton elevated variant="text"><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton elevated variant="outlined"><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton elevated variant="filled"><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      </div>
      <div className='flex gap-2 p-4'>
      <IconButton elevated disabled variant="plain"><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton elevated disabled variant="text"><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton elevated disabled variant="outlined"><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton elevated disabled variant="filled"><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      </div>
      <div className='flex gap-2 p-4'>
      <IconButton variant="outlined" ><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton variant="outlined" size='xs'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton variant="outlined" size='sm'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton variant="outlined" size='md'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton variant="outlined" size='lg'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      </div>
      <div className='flex gap-2 p-4'>
      <IconButton ><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton size='xs'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton size='sm'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton size='md'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton size='lg'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      </div>
      <div className='flex gap-2 p-4 bg-light-surface-dark'>
      <IconButton variant='plain'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton variant='plain' color='default'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton variant='plain' color='primary'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton variant='plain' color='secondary'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton variant='plain' color='success'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton variant='plain' color='warning'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton variant='plain' color='error'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      </div>
      <div className='flex gap-2 p-4 bg-light-surface-dark'>
      <IconButton disabled variant='plain'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton disabled variant='plain' color='default'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton disabled variant='plain' color='primary'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton disabled variant='plain' color='secondary'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton disabled variant='plain' color='success'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton disabled variant='plain' color='warning'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton disabled variant='plain' color='error'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      </div>
      <div className='flex gap-2 p-4'>
      <IconButton variant='text'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton variant='text' color='default'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton variant='text' color='primary'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton variant='text' color='secondary'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton variant='text' color='success'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton variant='text' color='warning'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton variant='text' color='error'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      </div>
      <div className='flex gap-2 p-4'>
      <IconButton disabled variant='text'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton disabled variant='text' color='default'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton disabled variant='text' color='primary'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton disabled variant='text' color='secondary'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton disabled variant='text' color='success'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton disabled variant='text' color='warning'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton disabled variant='text' color='error'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      </div>
      <div className='flex gap-2 p-4'>
      <IconButton variant='outlined'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton variant='outlined' color='default'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton variant='outlined' color='primary'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton variant='outlined' color='secondary'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton variant='outlined' color='success'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton variant='outlined' color='warning'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton variant='outlined' color='error'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      </div>
      <div className='flex gap-2 p-4'>
      <IconButton disabled variant='outlined'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton disabled variant='outlined' color='default'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton disabled variant='outlined' color='primary'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton disabled variant='outlined' color='secondary'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton disabled variant='outlined' color='success'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton disabled variant='outlined' color='warning'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton disabled variant='outlined' color='error'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      </div>
      <div className='flex gap-2 p-4'>
      <IconButton variant='filled'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton variant='filled' color='default'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton variant='filled' color='primary'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton variant='filled' color='secondary'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton variant='filled' color='success'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton variant='filled' color='warning'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton variant='filled' color='error'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      </div>
      <div className='flex gap-2 p-4'>
      <IconButton disabled variant='filled'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton disabled variant='filled' color='default'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton disabled variant='filled' color='primary'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton disabled variant='filled' color='secondary'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton disabled variant='filled' color='success'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton disabled variant='filled' color='warning'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      <IconButton disabled variant='filled' color='error'><Icon><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></Icon></IconButton>
      </div>
      <div className='flex gap-2 p-4'>
        <Label>Label</Label>
        <Label color="default">Label</Label>
        <Label color="primary">Label</Label>
        <Label color="secondary">Label</Label>
        <Label color="success">Label</Label>
        <Label color="warning">Label</Label>
        <Label color="error">Label</Label>
      </div>
      <div className='flex gap-2 p-4'>
        <Link to="">Link</Link>
        <Link disabled to="">Link</Link>
      </div>
      <div className='flex gap-2 p-4'>
      <Link to="">Link</Link>
      <Link underline="none" to="">Link</Link>
      <Link underline="hover" to="">Link</Link>
      <Link underline="always" to="">Link</Link>
      </div>
      <div className='flex gap-2 p-4'>
      <Link to="">Link</Link>
      <Link color="default" to="">Link</Link>
      <Link color="primary" to="">Link</Link>
      <Link color="secondary" to="">Link</Link>
      <Link color="success" to="">Link</Link>
      <Link color="warning" to="">Link</Link>
      <Link color="error" to="">Link</Link>
      </div>
      <div className='flex flex-col gap-2 p-4'>
        <LinearProgress value={50}/>
        <LinearProgress bufferValue={75} value={50}/>
        <LinearProgress value={50}>50%</LinearProgress>
      </div>
      <div className='flex flex-col gap-2 p-4'>
      <LinearProgress bufferValue={75} value={50}>50%</LinearProgress>
        <LinearProgress color="default" bufferValue={75} value={50}>50%</LinearProgress>
        <LinearProgress color="primary" bufferValue={75} value={50}>50%</LinearProgress>
        <LinearProgress color="secondary" bufferValue={75} value={50}>50%</LinearProgress>
        <LinearProgress color="success" bufferValue={75} value={50}>50%</LinearProgress>
        <LinearProgress color="warning" bufferValue={75} value={50}>50%</LinearProgress>
        <LinearProgress color="error" bufferValue={75} value={50}>50%</LinearProgress>
      </div>
      <div className='flex gap-2 p-4'>
        <List className='bg-light-primary'>
          <ListItem><Avatar>AV</Avatar>ListItem<Checkbox /></ListItem>
          <ListSeparator/>
          <ListItem color="default"><Avatar>AV</Avatar>ListItem<Checkbox /></ListItem>
          <ListSeparator disabled/>
          <ListItem color="primary"><Avatar>AV</Avatar>ListItem<Checkbox /></ListItem>
          <ListSeparator fullwidth/>
          <ListItem color="secondary"><Avatar>AV</Avatar>ListItem<Checkbox /></ListItem>
          <ListSeparator fullwidth disabled/>
          <ListItem color="success"><Avatar>AV</Avatar>ListItem<Checkbox /></ListItem>
          <ListSeparator/>
          <ListItem color="warning"><Avatar>AV</Avatar>ListItem<Checkbox /></ListItem>
          <ListSeparator/>
          <ListItem color="error"><Avatar>AV</Avatar>ListItem<Checkbox /></ListItem>
        </List>
      </div>
      <div className='flex gap-2 p-4'>
        <List>
          <ListItemButton><Avatar>AV</Avatar>ListItem<Checkbox /></ListItemButton>
          <ListSeparator/>
          <ListItemButton fullwidth><Avatar>AV</Avatar>ListItem<Checkbox /></ListItemButton>
          <ListSeparator/>
          <ListItemButton selected><Avatar>AV</Avatar>ListItem<Checkbox /></ListItemButton>
        </List>
      </div>
      <div className='flex gap-2 p-4'>
        <List>
          <ListItemButton><Avatar>AV</Avatar>ListItem<Checkbox /></ListItemButton>
          <ListSeparator variant='plain' color='default'/>
          <ListItemButton color="default"><Avatar>AV</Avatar>ListItem<Checkbox /></ListItemButton>
          <ListSeparator variant='plain' color='primary'/>
          <ListItemButton color="primary"><Avatar>AV</Avatar>ListItem<Checkbox /></ListItemButton>
          <ListSeparator variant='plain' color='secondary'/>
          <ListItemButton color="secondary"><Avatar>AV</Avatar>ListItem<Checkbox /></ListItemButton>
          <ListSeparator variant='plain' color='success'/>
          <ListItemButton color="success"><Avatar>AV</Avatar>ListItem<Checkbox /></ListItemButton>
          <ListSeparator variant='plain' color='warning'/>
          <ListItemButton color="warning"><Avatar>AV</Avatar>ListItem<Checkbox /></ListItemButton>
          <ListSeparator variant='plain' color='error'/>
          <ListItemButton color="error"><Avatar>AV</Avatar>ListItem<Checkbox /></ListItemButton>
        </List>
      </div>
      <div className='flex gap-2 p-4'>
        <List>
          <ListItemButton selected><Avatar>AV</Avatar>ListItem<Checkbox /></ListItemButton>
          <ListSeparator variant='text' color='default'/>
          <ListItemButton color="default" selected><Avatar>AV</Avatar>ListItem<Checkbox /></ListItemButton>
          <ListSeparator variant='text' color='primary'/>
          <ListItemButton color="primary" selected><Avatar>AV</Avatar>ListItem<Checkbox /></ListItemButton>
          <ListSeparator variant='text' color='secondary'/>
          <ListItemButton color="secondary" selected><Avatar>AV</Avatar>ListItem<Checkbox /></ListItemButton>
          <ListSeparator variant='text' color='success'/>
          <ListItemButton color="success" selected><Avatar>AV</Avatar>ListItem<Checkbox /></ListItemButton>
          <ListSeparator variant='text' color='warning'/>
          <ListItemButton color="warning" selected><Avatar>AV</Avatar>ListItem<Checkbox /></ListItemButton>
          <ListSeparator variant='text' color='error'/>
          <ListItemButton color="error" selected><Avatar>AV</Avatar>ListItem<Checkbox /></ListItemButton>
        </List>
      </div>
      <div className='flex gap-2 p-4'>
        <List>
          <ListItemButton variant="text"><Avatar>AV</Avatar>ListItem<Checkbox /></ListItemButton>
          <ListSeparator variant='outlined' color='default'/>
          <ListItemButton color="default" variant="text"><Avatar>AV</Avatar>ListItem<Checkbox /></ListItemButton>
          <ListSeparator variant='outlined' color='primary'/>
          <ListItemButton color="primary" variant="text"><Avatar>AV</Avatar>ListItem<Checkbox /></ListItemButton>
          <ListSeparator variant='outlined' color='secondary'/>
          <ListItemButton color="secondary" variant="text"><Avatar>AV</Avatar>ListItem<Checkbox /></ListItemButton>
          <ListSeparator variant='outlined' color='success'/>
          <ListItemButton color="success" variant="text"><Avatar>AV</Avatar>ListItem<Checkbox /></ListItemButton>
          <ListSeparator variant='outlined' color='warning'/>
          <ListItemButton color="warning" variant="text"><Avatar>AV</Avatar>ListItem<Checkbox /></ListItemButton>
          <ListSeparator variant='outlined' color='error'/>
          <ListItemButton color="error" variant="text"><Avatar>AV</Avatar>ListItem<Checkbox /></ListItemButton>
        </List>
      </div>
      <div className='flex gap-2 p-4'>
        <List>
          <ListItemButton variant="text" selected><Avatar>AV</Avatar>ListItem<Checkbox /></ListItemButton>
          <ListSeparator variant='filled' color='default'/>
          <ListItemButton color="default" variant="text" selected><Avatar>AV</Avatar>ListItem<Checkbox /></ListItemButton>
          <ListSeparator variant='filled' color='primary'/>
          <ListItemButton color="primary" variant="text" selected><Avatar>AV</Avatar>ListItem<Checkbox /></ListItemButton>
          <ListSeparator variant='filled' color='secondary'/>
          <ListItemButton color="secondary" variant="text" selected><Avatar>AV</Avatar>ListItem<Checkbox /></ListItemButton>
          <ListSeparator variant='filled' color='success'/>
          <ListItem fullwidth>
            <List group>
            <ListItemButton color="success" variant="text" selected><Avatar>AV</Avatar>ListItem<Checkbox /></ListItemButton>
            <ListSeparator variant='filled' color='warning'/>
          <ListItemButton color="warning" variant="text" selected><Avatar>AV</Avatar>ListItem<Checkbox /></ListItemButton>
          <ListSeparator variant='filled' color='error'/>
          <ListItemButton color="error" variant="text" selected><Avatar>AV</Avatar>ListItem<Checkbox /></ListItemButton>
            </List>
          </ListItem>
        </List>
      </div>
      <div className='flex gap-2 p-4'>
        <List row>
        <ListItem><Avatar>AV</Avatar>ListItem<Checkbox /></ListItem>
          <ListSeparator vertical/>
          <ListItem color="default"><Avatar>AV</Avatar>ListItem<Checkbox /></ListItem>
          <ListSeparator vertical disabled/>
          <ListItem color="primary"><Avatar>AV</Avatar>ListItem<Checkbox /></ListItem>
          <ListSeparator vertical fullwidth/>
          <ListItem color="secondary"><Avatar>AV</Avatar>ListItem<Checkbox /></ListItem>
          <ListSeparator vertical fullwidth disabled/>
          <ListItem color="success"><Avatar>AV</Avatar>ListItem<Checkbox /></ListItem>
        </List>
      </div>
      <div className='flex flex-col gap-2 p-4'>
        <Typography>Text</Typography>
        <Typography variant="display-large">Text</Typography>
        <Typography variant="display-medium">Text</Typography>
        <Typography variant="display-small">Text</Typography>
        <Typography variant="headline-large">Text</Typography>
        <Typography variant="headline-medium">Text</Typography>
        <Typography variant="headline-small">Text</Typography>
        <Typography variant="title-large">Text</Typography>
        <Typography variant="title-medium">Text</Typography>
        <Typography variant="title-small">Text</Typography>
        <Typography variant="body-large">Text</Typography>
        <Typography variant="body-medium">Text</Typography>
        <Typography variant="body-small">Text</Typography>
      </div>
      <div className='flex gap-2 p-4'>
        <Typography>TEXT</Typography>
        <Typography color="default">TEXT</Typography>
        <Typography color="primary">TEXT</Typography>
        <Typography color="secondary">TEXT</Typography>
        <Typography color="success">TEXT</Typography>
        <Typography color="warning">TEXT</Typography>
        <Typography color="error">TEXT</Typography>
      </div>
      <ScrollRestoration />
      <Outlet />
    </>
  );
};

export default Component;

Component.displayName = 'RootRoute';
