export interface IUser {
  id: number;
  name: string;
  carModel: string;
  carMake: string;
  activated: boolean;
  created: string;
}

export interface ISearch {
  text: string;
  setText: (value: string) => void;
}
