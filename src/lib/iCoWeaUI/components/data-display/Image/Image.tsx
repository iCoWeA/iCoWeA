import React, { type ImgHTMLAttributes, forwardRef } from 'react';

import useConfig from '../../../hooks/useConfig';
import { mergeClasses } from '../../../utils/utils';
import imageConfig from './imageConfig';

export type ImageDefaultProps = {
  block?: boolean;
};

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & ImageDefaultProps;

const Image = forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  const { block, defaultClassName, className, ...restProps } = useConfig(
    'image',
    imageConfig.defaultProps,
    props
  );

  /* --- Set classes --- */
  const styles = imageConfig.styles;

  const mergedClassName = mergeClasses(
    styles.base,
    !block && styles.rounded,
    defaultClassName,
    className
  );

  return (
    <img
      className={mergedClassName}
      ref={ref}
      {...restProps}
    />
  );
});

Image.displayName = 'Image';

export default Image;
