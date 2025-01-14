/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   AnypointMaskedInput.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

import {html} from 'lit-element';

import {AnypointInput} from './AnypointInput.js';

export {AnypointMaskedInput};

declare class AnypointMaskedInput extends AnypointInput {
  readonly _inputType: any;
  readonly _visibilityToggleIcon: any;
  readonly _visibilityToggleTitle: any;
  readonly _visibilityToggleLabel: any;
  _suffixTemplate(): any;

  /**
   * Toggles `visible` property value.
   */
  toggleVisibility(): void;
}
