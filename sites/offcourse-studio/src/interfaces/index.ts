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

type Size = "SMALL" | "NORMAL" | "LARGE";
export interface IStylable {
  className?: string;
  size: Size;
  backdropPath?: string;
  foreground?: string;
  background?: string;
}
