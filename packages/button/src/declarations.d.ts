declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}
declare module '*.css?inline' {
  const content: { [className: string]: string };
  export default content;
} 