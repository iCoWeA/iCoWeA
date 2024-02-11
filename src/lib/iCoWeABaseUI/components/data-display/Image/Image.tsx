import React, { type ImgHTMLAttributes, forwardRef, useMemo } from 'react';

import { mergeClasses } from '../../../../iCoWeAUI/utils/utils';
import useConfig from '../../../hooks/useConfig';
import imageConfig from './imageConfig';

export type ImageDefaultProps = {
  radius?: Radiuses;
};

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & ImageDefaultProps;

const Image = forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  const { radius, defaultClassName, className, ...restProps } = useConfig(
    'image',
    imageConfig.defaultProps,
    props
  );

  /* --- Set classes --- */
  const mergedClassName = useMemo(() => {
    const styles = imageConfig.styles;

    return mergeClasses(
      styles.base,
      radius !== 'none' && styles.radiuses[radius],
      defaultClassName,
      className
    );
  }, [radius, defaultClassName, className]);

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
