import React from 'react';
import { Power, Sun } from 'lucide-react';

interface LightControlsProps {
  isOn: boolean;
  brightness: number;
  color: string;
  onToggle: () => void;
  onBrightnessChange: (value: number) => void;
  onColorChange: (color: string) => void;
}

export function LightControls({
  isOn,
  brightness,
  color,
  onToggle,
  onBrightnessChange,
  onColorChange
}: LightControlsProps) {
  return (
    <div className="space-y-6">
      <button
        onClick={onToggle}
        className={`w-full p-4 rounded-lg flex items-center justify-center gap-2 transition-colors ${
          isOn ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
        }`}
      >
        <Power size={24} />
        {isOn ? 'Turn Off' : 'Turn On'}
      </button>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Sun size={20} className="text-gray-600" />
          <span className="text-sm font-medium">Brightness</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={brightness}
          onChange={(e) => onBrightnessChange(Number(e.target.value))}
          className="w-full"
        />
        <span className="text-sm text-gray-600">{brightness}%</span>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Color</label>
        <input
          type="color"
          value={color}
          onChange={(e) => onColorChange(e.target.value)}
          className="w-full h-10 rounded-lg cursor-pointer"
        />
      </div>
    </div>
  );
}