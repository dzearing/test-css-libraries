import * as React from 'react';
import * as ReactDOM from 'react-dom';

//import { Button } from './ButtonGlamor';

import { Link } from './Link';
import { StyleRoot } from 'radium';
import { manageFocus } from './manageFocus';
import { Theme } from './Theme';
import { DetailsRow, Selection, SelectionMode } from 'office-ui-fabric-react/lib/DetailsList';
//import { Button } from 'office-ui-fabric-react/lib/Button';
import { Button } from './ButtonGlamor';

manageFocus(document.body);

let el = document.createElement('div');

document.body.appendChild(el);

let content = (
  <div>
    <Button styles={{
      base: {
        background: Theme.yellow,
        color: Theme.black,

        ':hover': {
          background: Theme.yellowLight,
          color: Theme.black
        }
      },
      toggled: {
        background: Theme.green,
        color: Theme.white,

        ':hover': {
          background: Theme.greenLight,
          color: Theme.black
        }
      }
    }}>Helo world</Button>
    { makeButtons() }
  </div>
);

// ReactDOM.render((
//   <StyleRoot>{ content }</StyleRoot>
// ), el);

ReactDOM.render(content, el);

function makeButtons() {
  let buttons = [];

  for (let i = 0; i < 1000; i++) {
    buttons.push(<Button key={i}>Hello world</Button>);
  }

  return buttons;
}

function makeRows() {
  let rows = [];
  let items = createItems(100);
  let columns = createColumns();
  let selection = new Selection(items);

  for (let i = 0; i < 1000; i++) {
    rows.push(
      <DetailsRow
        key={i}
        item={ items[i] }
        itemIndex={ i }
        columns={ columns }
        selection={ selection }
        selectionMode={ SelectionMode.multiple }
      />
    );
  }

  return rows;
}

function createItems(count: number) {
  let items = [];
  let colors = ['red', 'green', 'blue' ]

  for (let i = 0; i < count; i++) {
    items.push({
      key: 'item' + i,
      name: "Item " + i,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  return items;
}

function createColumns() {
  let columns = [{
    key: 'name',
    name: 'Name',
    fieldName: 'name',
    minWidth: 70
  },
  {
    key: 'color',
    name: 'Color',
    fieldName: 'color',
    minWidth: 70
  }];

  return columns;
}