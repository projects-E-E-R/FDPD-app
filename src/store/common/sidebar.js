import create from 'zustand';

const useSidebarState = create((set) => ({
  collapsed: false,
  setCollapsed: (collapsed) => set({ collapsed })
}));

export default useSidebarState;
