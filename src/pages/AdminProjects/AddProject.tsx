import React, { type FC, useState } from 'react';

import Icon from '../../lib/iCoWeABaseUI/components/data-display/Icon/Icon';
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
          leftDecorator={
            <Icon className={`relative duration-500 ${open ? 'rotate-45' : 'rotate-0'}`}>
              <svg
                focusable="false"
                viewBox="0 0 24 24"
              >
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"></path>
              </svg>
            </Icon>
          }
          onClick={() => {
            setOpen((open) => !open);
          }}
          size="lg"
          color={open ? 'error' : 'primary'}
          className="transition-colors duration-500"
        >
          {open ? 'Cancel' : 'Add project'}
        </Button>
      </Card>
    </Section>
  );
};

export default AddProject;
