export enum AppState {
  IDLE = 'IDLE',
  OPENING = 'OPENING',
  REVEALED = 'REVEALED',
  ERROR = 'ERROR'
}

export interface FortuneResponse {
  text: string;
  luckyNumbers?: number[];
}