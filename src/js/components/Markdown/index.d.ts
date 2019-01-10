import * as React from "react";

export interface MarkdownProps {
  components?: { [key: string]: HTMLElement };
}

declare const Markdown: React.ComponentClass<MarkdownProps & JSX.IntrinsicElements['div']>;

export { Markdown };
