// custom.d.ts
declare module "*.mdx" {
  import { ComponentType } from "react";
  const MDXComponent: ComponentType;
  export default MDXComponent;
}

declare module "*.png" {
  const value: string;
  export default value;
}
