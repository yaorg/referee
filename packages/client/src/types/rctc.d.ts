declare module 'react-copy-to-clipboard' {
  export interface CopyToClipboardProps {
    text: string;
    children?: React.ReactNode;
  }
  // eslint-disable-next-line no-undef
  export class CopyToClipboard extends React.Component<CopyToClipboardProps> {}
}
