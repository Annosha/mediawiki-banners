import React from 'react';

const EditorControls = ({ settings, onChange, onImageUpload, onDownload  }) => {
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    onChange(name, type === 'checkbox' ? checked : value);
  };

  return (
    <div className="controls-container">
       <div className="controls-group">
        <label htmlFor="downloadBtn">DownLoad Image</label>
        <button 
          className="download-btn"
          onClick={onDownload}
          id='downloadBtn'
        >
          Download Image
        </button>
      </div>
      
      <div className="controls-group">
        <h3>Title Settings</h3>
        <label>
            Title Text:
            <input
            type="text"
            name="titleText"
            value={settings.titleText}
            onChange={handleInputChange}
            />
        </label>
        
        <label>
            Text Color:
            <input
            type="color"
            name="textColor"
            value={settings.textColor}
            onChange={handleInputChange}
            />
        </label>

        <label>
            Font Size ({settings.fontSize}px):
            <input
            type="range"
            name="fontSize"
            min="10"
            max="100"
            value={settings.fontSize}
            onChange={handleInputChange}
            />
        </label>

        <label>
            Text Alignment:
            <select
            name="textAlign"
            value={settings.textAlign}
            onChange={handleInputChange}
            >
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
            </select>
        </label>
     </div>

      <div className="controls-group">
        <h3>Image Source</h3>
        <label>
          Image URL:
          <input
            type="url"
            name="imageUrl"
            value={settings.imageUrl}
            onChange={handleInputChange}
          />
        </label>
        
        <label>
          Upload Image:
          <input
            type="file"
            accept="image/*"
            onChange={onImageUpload}
          />
        </label>
      </div>

      <div className="controls-group">
        <h3>Adjustments</h3>
        {['brightness', 'contrast', 'saturation', 'opacity'].map((name) => (
          <label key={name}>
            {name.charAt(0).toUpperCase() + name.slice(1)} ({settings[name]}%)
            <input
              type="range"
              name={name}
              min="0"
              max="200"
              value={settings[name]}
              onChange={handleInputChange}
            />
          </label>
        ))}

        <label>
          Blur ({settings.blur}px)
          <input
            type="range"
            name="blur"
            min="0"
            max="20"
            value={settings.blur}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <div className="controls-group">
        <h3>Filters</h3>
        {['grayscale', 'sepia'].map((name) => (
          <label key={name}>
            {name.charAt(0).toUpperCase() + name.slice(1)} ({settings[name]}%)
            <input
              type="range"
              name={name}
              min="0"
              max="100"
              value={settings[name]}
              onChange={handleInputChange}
            />
          </label>
        ))}

        <label>
          Hue Rotate ({settings.hueRotate}deg)
          <input
            type="range"
            name="hueRotate"
            min="0"
            max="360"
            value={settings.hueRotate}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <div className="controls-group">
        <h3>Transform</h3>
        <label>
          Rotation ({settings.rotate}deg)
          <input
            type="range"
            name="rotate"
            min="-180"
            max="180"
            value={settings.rotate}
            onChange={handleInputChange}
          />
        </label>

        <label>
          <input
            type="checkbox"
            name="flipHorizontal"
            checked={settings.flipHorizontal === -1}
            onChange={(e) => onChange('flipHorizontal', e.target.checked ? -1 : 1)}
          />
          Flip Horizontal
        </label>

        <label>
          <input
            type="checkbox"
            name="flipVertical"
            checked={settings.flipVertical === -1}
            onChange={(e) => onChange('flipVertical', e.target.checked ? -1 : 1)}
          />
          Flip Vertical
        </label>
      </div>

      <div className="controls-group">
        <h3>Background</h3>
        <label>
          Background Color:
          <input
            type="color"
            name="backgroundColor"
            value={settings.backgroundColor}
            onChange={handleInputChange}
          />
        </label>
      </div>
    </div>
  );
};

export default EditorControls;