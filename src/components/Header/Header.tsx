import { DetailsDivProps } from '@/types';
import styles from './Header.module.scss';
import cn from 'classnames'
import { useAuth } from '@/hooks/useAuth';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { useState } from 'react';
import { addProduct, removeProduct } from '@/store/productsSlice/productsSlice';
import { useActions } from '@/hooks/useActions';

interface HeaderProps extends DetailsDivProps { }

export const Header = ({ className, ...props }: HeaderProps) => {
  const [value, setValue] = useState('')

  // Context
  const { isAuth, setAuth } = useAuth()

  //Redux
  const { products } = useAppSelector(state => state.products)
  const dispatch = useAppDispatch()
  const { removeProduct } = useActions()

  // Context logic
  const login = () => {
    setAuth(true)
  }
  const logout = () => {
    setAuth(false)
  }

  // Redux logic
  const addProductByInput = () => {
    dispatch(addProduct(value))
    setValue('')
  }
  const removeProductOnClick = (el: string) => {
    removeProduct(el)
  }

  return (
    <div className={cn(styles.header, className, {
      [styles.dark]: isAuth
    })} {...props}>
      <div className={styles.container}>
        <h1>Header</h1>
        {products.map(el => <li onClick={() => removeProductOnClick(el)} key={el}>{el}</li>)}
        <div>
          <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder='add product' />
          <button onClick={addProductByInput}>Submit</button>
        </div>
        {isAuth
          ? <button onClick={logout}>Login out</button>
          : <button onClick={login}>Login in</button>}
      </div>
    </div>
  )
};
