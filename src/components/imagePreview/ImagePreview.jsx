
import React from 'react';

const ImagePreview = React.forwardRef(({ settings }, ref) => {
  const filterStyle = {
    filter: `
      brightness(${settings.brightness}%)
      contrast(${settings.contrast}%)
      saturate(${settings.saturation}%)
      blur(${settings.blur}px)
      grayscale(${settings.grayscale}%)
      sepia(${settings.sepia}%)
      hue-rotate(${settings.hueRotate}deg)
    `,
    opacity: settings.opacity / 100,
    transform: `
      scaleX(${settings.flipHorizontal})
      scaleY(${settings.flipVertical})
      rotate(${settings.rotate}deg)
    `,
};
  const background = 
    {
      backgroundColor: settings.backgroundColor
};
const textStyle = {
    color: settings.textColor,
    fontSize: `${settings.fontSize}px`,
    textAlign: settings.textAlign,
    margin: '20px 0'
};

  return (
    <div className="preview-container" style={background} ref={ref}>
       {settings.titleText && (
        <h1 style={textStyle}>{settings.titleText}</h1>
      )}
      <div className="image-wrapper" style={filterStyle}>
        <img 
          src={settings.imageUrl} 
          alt="Preview" 
          className="preview-image"
        />
      </div>
    </div>
  );
});

export default ImagePreview;