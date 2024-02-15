import React, { type FC, useState } from 'react';

import CloseIcon from '../../components/Icons/CloseIcon';
import Button from '../../lib/iCoWeABaseUI/components/inputs/Button/Button';
import Section from '../../lib/iCoWeABaseUI/components/layouts/Section/Section';
import Card from '../../lib/iCoWeABaseUI/components/surfaces/Card/Card';
import Collapse from '../../lib/iCoWeABaseUI/components/utils/Collapse/Collapse';
import AddProjectForm from './AddProjectForm';

const AddProject: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Section>
      <Card
        spacing="lg"
        align="center"
      >
        <Collapse
          open={open}
          className="w-full"
        >
          <AddProjectForm setOpen={setOpen} />
        </Collapse>
        <Button
          onClick={() => {
            setOpen((open) => !open);
          }}
          size="lg"
          color={open ? 'error' : 'primary'}
          className="transition-colors duration-500"
          leftDecorator={
            <CloseIcon className={`relative duration-500 ${open ? 'rotate-0' : 'rotate-45'}`} />
          }
        >
          {open ? 'Cancel' : 'Add project'}
        </Button>
      </Card>
    </Section>
  );
};

export default AddProject;
