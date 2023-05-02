import { DetailsDivProps } from '@/types';
import styles from './Sidebar.module.scss';
import cn from 'classnames'
import { useOutside } from '@/hooks/useOutside';
import { useControlInput } from '@/hooks/useControlInput';

interface SidebarProps extends DetailsDivProps { }

export const Sidebar = ({ className, ...props }: SidebarProps) => {

  const { isVisible, ref, setVisible } = useOutside(false)
  const { bind, reset, value } = useControlInput('')


  return (
    <div className={cn(styles.sidebar, className)} {...props}>
      <div className={styles.container}>
        <button onClick={() => setVisible(true)}>open menu</button>
        {isVisible &&
          <ul ref={ref}>
            <li>link one</li>
            <li>link two</li>
            <li>link three</li>
            <li>link four</li>
          </ul>
        }

        <div>
          <input {...bind} type="text" name="name" id="name" placeholder='Enter your name...' />
          <p><strong>Value our input:</strong></p>
          <p>{value}</p>
        </div>
      </div>
    </div>
  )
};
