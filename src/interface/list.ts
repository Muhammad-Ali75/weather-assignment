export interface UniqueDateInterface {
  [key: string]: boolean;
}

export interface ListProps {
  dt_txt: string;
  main: {
    temp_max: number;
    temp_min: number;
  };
  weather: {
    main: string;
    description: string;
  }[];
}
