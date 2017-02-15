import * as React from 'react';
import { css } from 'glamor';
import { Theme } from './Theme';

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  styles?: any;
};

/**
 * Glamor experiment
 */
export class Button extends React.Component<IButtonProps, any> {
  public static defaultProps = {
    styles: {
      base: {},
      toggled: {},
      icon: {},
      content: {}
    }
  };

  constructor() {
    super();

    this.state = {
      isToggled: false
    };
  }

  public render() {

    let { children, className, styles } = this.props;
    let { isToggled } = this.state;

    return (
      <button className={ 'ms-Button ' + (css(
        defaultStyles.base,
        styles.base,
        isToggled && defaultStyles.toggled,
        isToggled && styles.toggled
        ) as any) }
        onClick={() => this.setState({ isToggled: !isToggled })}
      >
        <i
          { ...css(defaultStyles.content, defaultStyles.icon) }
          className={`ms-Icon ms-Icon--Mail` }
        />
        <span { ...css(defaultStyles.content) }>{ children }</span>
        <i
          { ...css(defaultStyles.content, defaultStyles.icon) }
          className={'ms-Icon ms-Icon--ChevronDown'}
        />
        <span
          { ...css(defaultStyles.focusRect) }
          className='ms-FocusRect' />
      </button>
    );
  }
}

let defaultStyles = {
  base: {
    background: Theme.themePrimary,
    color: '#fff',
    border: 'none',
    fontFamily: Theme.baseFont.fontFamily,
    fontWeight: Theme.baseFont.fontWeight,
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
      background: Theme.themeSecondary
    }
  },

  toggled: {
    background: Theme.themeDark,

    ':hover': {
      background: Theme.themeDarker
    },

    ':hover .focusRect': {

    }
  },

  focusRect: {
      display: 'none',
      position: 'absolute',
      left: 1,
      top: 1,
      bottom: 1,
      right: 1,
      border: '1px solid',
      borderColor: Theme.white,
  },

  icon: {
    width: '16px',
  },

  content: {
    padding: '0 4px',
    verticalAlign: 'middle'
  }
};

let start = new Date().getTime();

for (let i = 0; i < 1000; i++) {
  css({
    background: 'red'
  });
}

console.log(`Time: ${ new Date().getTime() - start }ms`);

