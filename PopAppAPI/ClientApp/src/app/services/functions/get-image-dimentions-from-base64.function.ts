import { ImageDimensions } from '../../models/document/image-dimentions';

export function getImageDimensionsFromBase64(base64: string): Promise<ImageDimensions> {
  return new Promise((resolved) => {
    const image = new Image();
    image.onload = () => resolved({ width: image.width, height: image.height });
    image.src = base64;
  });
}
