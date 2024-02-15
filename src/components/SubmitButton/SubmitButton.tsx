import React, { type FC } from 'react';

import Button, { type ButtonProps } from '../../lib/iCoWeABaseUI/components/inputs/Button/Button';

const SubmitButton: FC<ButtonProps> = (props) => {
  return (
    <Button
      block
      type="submit"
      {...props}
    />
  );
};

export default SubmitButton;
