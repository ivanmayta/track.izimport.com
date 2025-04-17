import {
    useSelector,
    useDispatch,
    type TypedUseSelectorHook,
} from "react-redux"
import { RootApp, AppDispatch } from "../store"

export const useAppSelector: TypedUseSelectorHook<RootApp> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
