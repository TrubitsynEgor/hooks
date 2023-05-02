import { bindActionCreators } from '@reduxjs/toolkit'
import { useAppDispatch } from './redux'
import * as AllActions from '@/store/productsSlice/productsSlice'

export const useActions = () => {
	const dispatch = useAppDispatch()
	return bindActionCreators(AllActions, dispatch)
}