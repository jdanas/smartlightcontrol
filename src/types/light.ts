export interface LightState {
  isOn: boolean;
  brightness: number;
  color: string;
}

export interface LightPreference {
  name: string;
  state: LightState;
}