
import { useState, useEffect,useRef } from 'react';
import './App.css';
import ImagePreview from './components/imagePreview/ImagePreview';
import EditorControls from './components/editorController/EditorController';
import html2canvas from 'html2canvas'

function App() {
  const [settings, setSettings] = useState({
    backgroundColor: '#ffffff',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg',
    brightness: 100,
    contrast: 100,
    saturation: 100,
    blur: 0,
    grayscale: 0,
    sepia: 0,
    hueRotate: 0,
    opacity: 100,
    rotate: 0,
    flipHorizontal: 1,
    flipVertical: 1,
    titleText: 'Hi I am Annosha Aslam, My hobby is computer programming',
    textColor: '#000000',
    fontSize: 22,
    textAlign: 'center',
  });
  const previewRef = useRef(null);


  useEffect(() => {
    const fetchGitHubAvatar = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/Annosha`);
        const data = await response.json();
        setSettings(prev => ({ ...prev, imageUrl: data.avatar_url }));
      } catch (error) {
        console.error('Error fetching GitHub avatar:', error);
      }
    };
    fetchGitHubAvatar();
  }, []);

  const handleChange = (name, value) => {
    setSettings(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSettings(prev => ({ ...prev, imageUrl: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };
  const handleDownload = async () => {
    if (!previewRef.current) return;

    try {
      const canvas = await html2canvas(previewRef.current, {
        useCORS: true,
        scale: 2,
        logging: true,
        backgroundColor: null 
      });

      const link = document.createElement('a');
      link.download = `image-${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Error capturing image:', error);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Image Editor</h1>
      <div className="editor-wrapper">
        <ImagePreview ref={previewRef} settings={settings} />
        <EditorControls 
          settings={settings}
          onChange={handleChange}
          onImageUpload={handleImageUpload}
          onDownload={handleDownload}
        />
      </div>
    </div>
  );
}

export default App;