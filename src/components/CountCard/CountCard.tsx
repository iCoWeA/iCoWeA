import React, { type FC, useState, useEffect } from 'react';

import Title from '../../lib/iCoWeABaseUI/components/data-display/Title/Title';
import Card, { type CardProps } from '../../lib/iCoWeABaseUI/components/surfaces/Card/Card';

export type CountCardProps = CardProps & {
  count: number;
};

const MessagesCard: FC<CountCardProps> = ({ count, children, ...restProps }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => setCounter(0), [count]);

  /* --- Set event handlers --- */
  useEffect(() => {
    if (counter === count) {
      return;
    }

    const id = window.setTimeout(() => setCounter((counter) => counter + 1), 500 / count);

    return () => clearTimeout(id);
  }, [count, counter]);

  return (
    <Card {...restProps}>
      <Title
        size="2"
        color="inherit"
      >
        {counter}
      </Title>
      <Title
        size="5"
        color="inherit"
      >
        {children}
      </Title>
    </Card>
  );
};

export default MessagesCard;
