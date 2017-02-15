import * as React from 'react';
import * as Radium from 'radium';

export interface ILinkProps extends React.HTMLAttributes<HTMLAnchorElement> {

};

@Radium
export class Link extends React.Component<ILinkProps, {}> {
  public render() {
    return (
      <a style={[
        styles.base
      ]} { ...this.props } />
    );
  }
}

let styles = {
  base: {
    color: '#0078d7',
    fontFamily: '"Segoe UI WestEuropean","Segoe UI",-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif',
    fontSize: '14px',
    fontWeight: '400',
    "-webkit-font-smoothing": "antialiased",
    textDecoration: 'none',

    ':hover': {
      color: "#0088d7",
      textDecoration: 'underline'
    },

    ':focus': {
      outline: '1px <black></black>'
    },

    ':visited': {
      color: 'purple'
    },

    ':active': {
      transform: 'scale(.95)'
    }
  },

  icon: {
    width: '16px',
  },

  content: {
    display: 'inline-block',
    padding: '0 4px',
    verticalAlign: 'top'
  }
};
