import { create } from 'zustand'

type ErrorStore = {
  isFilterError: boolean
  setIsFilterError: (error: boolean) => void
}

type AreaStore = {
  areaArray: string[]
  addArea: (area: string) => void
  removeArea: (area: string) => void
  resetArea: () => void
}

export const useErrorStore = create<ErrorStore>((set) => ({
  isFilterError: false,
  setIsFilterError: (error: boolean) => set(() => ({ isFilterError: error })),
}))

export const useAreaStore = create<AreaStore>((set) => ({
  areaArray: [],

  // 지역 추가
  addArea: (area: string) =>
    set((state) => ({
      areaArray: [...state.areaArray, area],
    })),

  // 지역 삭제
  removeArea: (area: string) =>
    set((state) => ({
      areaArray: state.areaArray.filter((item) => item !== area),
    })),

  // 지역 초기화
  resetArea: () =>
    set(() => ({
      areaArray: [],
    })),
}))

type UseStore = {
  useArray: string[]
  addUse: (use: string) => void
  removeUse: (use: string) => void
  resetUseArray: () => void
}

export const useUseStore = create<UseStore>((set) => ({
  useArray: [],

  // 용도 추가
  addUse: (use: string) =>
    set((state) => ({
      useArray: [...state.useArray, use],
    })),

  // 용도 삭제 (필요 시 추가)
  removeUse: (use: string) =>
    set((state) => ({
      useArray: state.useArray.filter((item) => item !== use),
    })),

  // 용도 배열 초기화
  resetUseArray: () =>
    set(() => ({
      useArray: [],
    })),
}))
