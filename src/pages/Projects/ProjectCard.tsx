import React, { useState } from 'react';
import { type FC } from 'react';
import Card from '../../lib/iCoWeABaseUI/components/surfaces/Card/Card';
import ListItem from '../../lib/iCoWeABaseUI/components/data-display/ListItem/ListItem';
import Overlay from '../../lib/iCoWeABaseUI/components/feedback/Overlay/Overlay';
import LinkButton from '../../lib/iCoWeARouterUI/components/LinkButton/LinkButton';
import Icon from '../../lib/iCoWeABaseUI/components/data-display/Icon/Icon';

export type ProjectCardProps = {
  name: string;
  url: string;
  imageURL: string;
};

const ProjectCard: FC<ProjectCardProps> = ({ name, url, imageURL }) => {
  const [open, setOpen] = useState(false);

  return (
    <ListItem
      align="stretch"
      className="relative w-full max-w-[25rem] h-[30rem]"
    >
      <Card
        onMouseEnter={() => {
          setOpen(true);
        }}
        block
        variant="solid"
        color="primary"
        border
        className="border-4 bg-cover"
        style={{ backgroundImage: `url("${imageURL}")` }}
      />
      <Overlay
        onMouseLeave={() => {
          setOpen(false);
        }}
        open={open}
        className="rounded-xl"
      >
        <LinkButton
          to={url}
          size="lg"
          variant="solid"
          color="secondary"
          className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-base whitespace-pre"
          rightDecorator={
            <Icon size="sm">
              <svg
                focusable="false"
                viewBox="0 0 24 24"
              >
                <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"></path>
              </svg>
            </Icon>
          }
        >
          {`Visit ${name}`}
        </LinkButton>
      </Overlay>
    </ListItem>
  );
};

export default ProjectCard;
