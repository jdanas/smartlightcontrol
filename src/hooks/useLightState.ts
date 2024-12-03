import { useState, useCallback } from 'react';
import { LightState } from '../types/light';

const DEFAULT_STATE: LightState = {
  isOn: false,
  brightness: 100,
  color: '#ffffff'
};

export function useLightState() {
  const [lightState, setLightState] = useState<LightState>(DEFAULT_STATE);

  const toggleLight = useCallback(() => {
    setLightState(prev => ({ ...prev, isOn: !prev.isOn }));
  }, []);

  const setBrightness = useCallback((brightness: number) => {
    setLightState(prev => ({ ...prev, brightness }));
  }, []);

  const setColor = useCallback((color: string) => {
    setLightState(prev => ({ ...prev, color }));
  }, []);

  return {
    lightState,
    toggleLight,
    setBrightness,
    setColor
  };
}