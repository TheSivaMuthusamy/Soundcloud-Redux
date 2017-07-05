import React from 'react';
import { expect } from 'chai';
import jsdom from 'jsdom';

const dom = new jsdom.JSDOM('<!doctype html><html><body></body></html>');


global.document = dom.window.document;
global.window = dom.window;

Object.keys(window).forEach((key) => {
  	if (!(key in global)) {
    	global[key] = window[key];
  	}
});

global.React = React;
global.expect = expect;