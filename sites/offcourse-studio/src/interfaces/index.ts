export interface IPublishable {
  publishable: boolean;
}

export interface IMeasurable {
  width?: number;
  left?: number;
  top?: number;
  height?: number;
}

export interface IPageSection {
  title: string;
  backdropPath?: string;
  role: string;
  publishable: boolean;
  sectionIndex: number;
}

export interface IStylable {
  className?: string;
  backdropPath?: string;
  foreground?: string;
  background?: string;
}
