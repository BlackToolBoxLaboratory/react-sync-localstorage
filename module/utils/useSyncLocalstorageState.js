import { useState } from 'react';

const useSyncLocalstorageState = (name) => {
  const [Jstring, updateJstring] = useState();

  const _updateJstring = (obj) => {
    const _jstring = JSON.stringify(obj);
    if (_jstring) {
      updateJstring(_jstring);
      localStorage.setItem(name, _jstring);
    } else {
      throw new Error(`[Error] expected to update with object in JOSN format at syncLocalstorage. but not JSON format`);
    }
  };

  const _parseFn = () => {
    return Jstring ? JSON.parse(Jstring) : {};
  };
  const _getFn = (key) => {
    const json = _parseFn();
    return json[key];
  };
  const _hasFn = (key) => {
    const target = _getFn(key);
    return typeof target !== 'undefined';
  };

  const _initFn = () => {
    const ls = localStorage.getItem(name);
    if (ls !== null && ls !== undefined) {
      if (JSON.parse(ls)) {
        _updateJstring(JSON.parse(ls));
      }
    } else {
      localStorage.setItem(name, JSON.stringify({}));
    }
  };
  const _setFn = (key, value) => {
    const json = _parseFn();
    json[key] = value;
    _updateJstring(json);
  };
  const _deleteFn = (key) => {
    const json = _parseFn();
    delete json[key];
    _updateJstring(json);
  };
  const _replaceFn = (obj) => {
    if (typeof obj === 'object') {
      _updateJstring(obj);
    } else {
      throw new Error(`[Error] expected to update with object in JOSN format at syncLocalstorage. but ${typeof obj}`);
    }
  };

  if (typeof Jstring === 'undefined') {
    _initFn();
  }
  return {
    parse   : _parseFn,
    replace : _replaceFn,
    
    getItem    : _getFn,
    setItem    : _setFn,
    hasItem    : _hasFn,
    deleteItem : _deleteFn,
  };
};

export default useSyncLocalstorageState;
