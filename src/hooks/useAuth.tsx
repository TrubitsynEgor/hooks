import { Dispatch, FC, ReactNode, SetStateAction, createContext, useContext, useMemo, useState } from 'react'

interface IContext {
	isAuth: boolean
	setAuth: Dispatch<SetStateAction<boolean>>
}
interface AuthProviderProps {
	children: ReactNode
}

const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
	const [isAuth, setAuth] = useState(false)

	const value = useMemo(() => ({
		isAuth,
		setAuth
	}), [isAuth])

	return (
		<AuthContext.Provider value={value}>{children}</AuthContext.Provider>
	)

}

export const useAuth = () => useContext(AuthContext)