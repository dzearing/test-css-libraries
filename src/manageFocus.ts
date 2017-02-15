const TAB_KEY = 9;

let _isFocusVisible = false;

export function manageFocus(el: HTMLElement) {
  el = el || document.body;

  el.classList.add('ms-Fabric');

  el.addEventListener('mousedown', () => {
    _setFocusVisibility(el, false);
  }, true);

  el.addEventListener('keydown', (ev) => {
    if (ev.which === TAB_KEY) {
      _setFocusVisibility(el, true);
    }
  });
}


function _setFocusVisibility(el: HTMLElement, isVisible: boolean) {
  if (_isFocusVisible !== isVisible) {
    _isFocusVisible = isVisible;

    if (isVisible) {
      el.classList.add('is-focusVisible');
    } else {
      el.classList.remove('is-focusVisible');
    }
  }
}