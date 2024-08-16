import { Dispatch, SetStateAction } from "react"

export interface ITabStatus {
  expected: boolean,
  ongoing: boolean,
  mine: boolean
}

export interface IDmProps {
  tabs: ITabStatus,
  setFilters?: Dispatch<SetStateAction<IFilterProps>>
  setTabs?: Dispatch<SetStateAction<{
    expected: boolean,
    ongoing: boolean,
    mine: boolean
  }>>,
  openDetail?: boolean
  filters?: IFilterProps
  setOpenModal?: Dispatch<SetStateAction<boolean>>
}

export interface IFilterProps {
  exceptDownload?: boolean
  afterToday?: boolean
  exceptChoice?: boolean
  usage?: boolean
}

export interface ILocalFilter {
  court: boolean,
  local: boolean
}