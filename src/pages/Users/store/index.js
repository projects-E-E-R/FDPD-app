import { usersStoreConfig } from 'store/common/users';
import create from 'zustand';

const useUsersStore = create(usersStoreConfig);

export default useUsersStore;
