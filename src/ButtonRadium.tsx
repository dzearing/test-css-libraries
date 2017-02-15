import * as React from 'react';
import * as Radium from 'radium';

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {

};

/**
 * Radium button experiment.
 *
 * GOOD:
 * inline. will work awesome for themeing
 * no more css selectors, period.
 *
 * BAD:
 * focus styling seems impossible, Radium.getState doesn't seem to report focus state.
 * no
 */
@Radium
export class Button extends React.Component<IButtonProps, any> {

  constructor() {
    super();

    this.state = {
      isToggled: false
    };
  }

  public render() {
    let { children } = this.props;
    let { isToggled } = this.state;

    return (
      <button style={[
        styles.base,
        isToggled && styles.toggled,
        this.props.style
      ]}
        className='ms-Focusable'
        key='root'
        onClick={ () => this.setState({ isToggled: !isToggled })}
      >
        <i style={[ styles.content, styles.icon ]} className='ms-Icon ms-Icon--Mail' />
        <span style={[ styles.content ]} className=''>{ children }</span>
        <i style={[ styles.content ]} className='ms-Icon ms-Icon--ChevronDown' />
        <span style={[ styles.focusRect ]} className='ms-FocusRect' />
      </button>
    );
  }
}

let Theme = {
  themePrimary: '#0078d7',
  fontFamily: '"Segoe UI WestEuropean","Segoe UI",-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif',
}

let styles = {
  base: {
    background: Theme.themePrimary,
    border: 'none',
    color: '#fff',
    fontFamily: Theme.fontFamily,
    fontSize: '14px',
    fontWeight: '600',
    height: '32px',
    lineHeight: "32px",
    margin: '0',
    minWidth: '80px',
    outline: 'none',
    padding: '0 16px',
    position: 'relative',
    "-webkit-font-smoothing": "antialiased",

    ':hover': {
      background: '#005a9e'
    },

    ':active': {
      transform: 'scale(.95)'
    }
  },

  toggled: {
    background: 'purple',

    ':hover': {
      background: 'purple'
    }
  },

  focusRect: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    border: '1px solid black'
  },

  icon: {
    width: '16px',
  },

  content: {
    padding: '0 4px',
    verticalAlign: 'middle'
  }
};
