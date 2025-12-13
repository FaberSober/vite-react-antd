import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { DynItem } from '../../dnd/types';
import { generateId } from '@/utils';

interface FaFormState {
  formItems: DynItem[];
  // 添加表单项
  addFormItem: (type: 'input' | 'row') => void;
  // 删除表单项
  removeFormItem: (id: string) => void;
  // 更新表单项
  updateFormItem: (id: string, item: Partial<DynItem>) => void;
  // 添加子项到行容器
  addChildToRow: (rowId: string, type: 'input' | 'row') => void;
  // 从行中删除子项
  removeChildFromRow: (rowId: string, childId: string) => void;
  // 重新排序表单项
  reorderFormItems: (items: DynItem[]) => void;
  // 重新排序行内的子项
  reorderRowChildren: (rowId: string, children: DynItem[]) => void;
  // 清空表单
  clearFormItems: () => void;
}

export const useFaFormStore = create<FaFormState>()(
  devtools<FaFormState>(
    (set, get) => ({
      formItems: [],

      addFormItem: (type) =>
        set((state) => ({
          formItems: [...state.formItems, { id: generateId(), type, children: [] }],
        })),

  removeFormItem: (id) =>
    set((state) => ({
      formItems: state.formItems.filter((item) => item.id !== id),
    })),

  updateFormItem: (id, updates) =>
    set((state) => ({
      formItems: state.formItems.map((item) =>
        item.id === id ? { ...item, ...updates } : item
      ),
    })),

  addChildToRow: (rowId, type) =>
    set((state) => ({
      formItems: state.formItems.map((item) =>
        item.id === rowId && item.type === 'row'
          ? {
              ...item,
              children: [
                ...(item.children || []),
                { id: generateId(), type, children: [] },
              ],
            }
          : item
      ),
    })),

  removeChildFromRow: (rowId, childId) =>
    set((state) => ({
      formItems: state.formItems.map((item) =>
        item.id === rowId && item.type === 'row'
          ? {
              ...item,
              children: (item.children || []).filter((child) => child.id !== childId),
            }
          : item
      ),
    })),

  reorderFormItems: (items) =>
    set(() => ({
      formItems: items,
    })),

  reorderRowChildren: (rowId, children) =>
    set((state) => ({
      formItems: state.formItems.map((item) =>
        item.id === rowId && item.type === 'row'
          ? { ...item, children }
          : item
      ),
    })),

  clearFormItems: () =>
    set(() => ({
      formItems: [],
    })),
    }),
    { name: 'FaFormStore' }
  )
);
