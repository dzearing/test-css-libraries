import * as React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  styles?: any;
};

/**
 * Aphrodite experiment
 * Good things:
 *
 * Styles definable in javascript, intellisense
 * Hover and focus work
 *
 * Bad:
 * Dynamic adjustments to styles would create class permutations, basically
 * it's not inline... bad for theming challenges
 *
 * Styles injected async
 */
export class Button extends React.Component<IButtonProps, any> {

  constructor() {
    super();

    this.state = {
      isToggled: false
    };
  }

  public render() {
    let { children, className, style, styles = {} } = this.props;
    let { isToggled } = this.state;

    return (
      <button className={'ms-Focusable ' + css(
        defaultStyles.base,
        styles.base,
        isToggled && styles.toggled
      ) + ' ' + className }
        onClick={() => this.setState({ isToggled: !isToggled })}
      >
        <i className={'ms-Icon ms-Icon--Mail ' + css(styles.content, styles.icon) } />
        <span className={css(styles.content)}>{children}</span>
        <i className={'ms-Icon ms-Icon--ChevronDown ' + css(styles.content, styles.icon)} />
        <span className={ 'ms-FocusRect ' + css(styles.focusRect) } />
      </button>
    );
  }
}

let Theme = {
  themePrimary: '#0078d7',
  baseFont: {
    fontFamily: '"Segoe UI WestEuropean","Segoe UI",-apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",sans-serif',
    fontStyle: 'normal',
    fontWeight: '600'
  }
}

let rawStyles = {
  base: {
    background: Theme.themePrimary,
    color: '#fff',
    border: 'none',
    fontFamily: Theme.baseFont,
    fontSize: '14px',
    height: '32px',
    lineHeight: "32px",
    margin: 0,
    minWidth: '80px',
    outline: 'none',
    padding: '0 16px',
    position: 'relative',
    "-webkit-font-smoothing": "antialiased",

    ':hover': {
      background: '#005a9e'
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

let time = new Date().getTime();


let defaultStyles;

for (let i = 0; i < 1000; i++) {
  let foo = { ...rawStyles };

  defaultStyles = StyleSheet.create(foo);
}

console.log(`duration: ${ new Date().getTime() - time }ms`);
