import React, { type FC } from 'react';

import Input, { type InputProps } from '../../lib/iCoWeABaseUI/components/inputs/Input/Input';

const Textfield: FC<InputProps> = (props) => (
  <Input
    block
    {...props}
  />
);

export default Textfield;
