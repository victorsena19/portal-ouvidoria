declare module '*.scss' {
    const content: {[className: string]: string};
    export = content;
}

declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const content: string;
    export default content;
  }

declare module '*.png';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.jpg';
  