import React from 'react';

import SyncLocalstorageContext from './SyncLocalstorageContext.jsx';
import useSyncLocalstorageState from '../utils/useSyncLocalstorageState';

const SyncLocalStorageProvider = (prop) => {
  const { name = 'btblab-sync-localstorage', children } = prop;
  const syncLocalStorage = useSyncLocalstorageState(name);

  return <SyncLocalstorageContext.Provider value={{ ...syncLocalStorage }}>{children}</SyncLocalstorageContext.Provider>;
};

export default SyncLocalStorageProvider;
