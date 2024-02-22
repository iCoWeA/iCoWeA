import React, { type FC, useState, useCallback } from 'react';

import LinkIcon from '../../components/Icons/LinkIcon';
import ListItem from '../../lib/iCoWeABaseUI/components/data-display/ListItem/ListItem';
import Overlay from '../../lib/iCoWeABaseUI/components/feedback/Overlay/Overlay';
import Card from '../../lib/iCoWeABaseUI/components/surfaces/Card/Card';
import LinkButton from '../../lib/iCoWeARouterUI/components/LinkButton/LinkButton';

export type ProjectCardProps = {
  name: string;
  url: string;
  imageURL: string;
};

const ProjectCard: FC<ProjectCardProps> = ({ name, url, imageURL }) => {
  const [open, setOpen] = useState(false);

  /* -- Set event handlers --- */
  const mouseEnterHandler = useCallback(() => setOpen(true), []);

  const mouseLeaveHandler = useCallback(() => setOpen(false), []);

  return (
    <ListItem
      align="stretch"
      className="relative w-full max-w-[25rem] h-[30rem]"
    >
      <Card
        onMouseEnter={mouseEnterHandler}
        block
        variant="solid"
        color="primary"
        border
        className="border-4 bg-cover"
        style={{ backgroundImage: `url("${imageURL}")` }}
      />
      <Overlay
        onMouseLeave={mouseLeaveHandler}
        open={open}
        className="rounded-xl"
      >
        <LinkButton
          to={url}
          size="lg"
          variant="solid"
          color="secondary"
          className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-base whitespace-pre"
          rightDecorator={<LinkIcon size="sm" />}
        >
          {`Visit ${name}`}
        </LinkButton>
      </Overlay>
    </ListItem>
  );
};

export default ProjectCard;
