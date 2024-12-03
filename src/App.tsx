import React from 'react';
import { LightBulb } from './components/LightBulb';
import { LightControls } from './components/LightControls';
import { useLightState } from './hooks/useLightState';

function App() {
  const { lightState, toggleLight, setBrightness, setColor } = useLightState();

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-md mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Smart Light Control</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-6 space-y-8">
          <LightBulb
            isOn={lightState.isOn}
            brightness={lightState.brightness}
            color={lightState.color}
          />
          
          <LightControls
            isOn={lightState.isOn}
            brightness={lightState.brightness}
            color={lightState.color}
            onToggle={toggleLight}
            onBrightnessChange={setBrightness}
            onColorChange={setColor}
          />
        </div>
      </div>
    </div>
  );
}

export default App;