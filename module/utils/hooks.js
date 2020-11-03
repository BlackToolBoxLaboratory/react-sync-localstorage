import { useContext } from 'react';

import SyncLocalstorageContext from '../components/SyncLocalstorageContext.jsx';

const useSyncLocalStorage = () => {
  return useContext(SyncLocalstorageContext);
};

export { useSyncLocalStorage };