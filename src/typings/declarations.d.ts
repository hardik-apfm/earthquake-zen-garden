declare module '*.scss';
declare module '*.css' {
  const content: { [className: string]: string; };
  export default content;
}
declare module '*.scss' {
  const content: { [className: string]: string; };
  export default content;
}

declare module "*.png" {
  const value: any;
  export default value;
}
