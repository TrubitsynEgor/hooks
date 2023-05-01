import { DetailsDivProps } from '@/types';
import styles from './Header.module.scss';
import cn from 'classnames'
import { useAuth } from '@/hooks/useAuth';

interface HeaderProps extends DetailsDivProps { }

export const Header = ({ className, ...props }: HeaderProps) => {
  const { isAuth, setAuth } = useAuth()

  const login = () => {
    setAuth(true)
  }
  const logout = () => {
    setAuth(false)
  }

  return (
    <div className={cn(styles.header, className)} {...props}>
      <div className={styles.container}>
        <h1>Header</h1>
        {isAuth
          ? <button onClick={logout}>Login out</button>
          : <button onClick={login}>Login in</button>}
      </div>
    </div>
  )
};
