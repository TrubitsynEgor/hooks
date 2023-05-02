import { DetailsDivProps } from '@/types';
import styles from './Sidebar.module.scss';
import cn from 'classnames'
import { useOutside } from '@/hooks/useOutside';

interface SidebarProps extends DetailsDivProps { }

export const Sidebar = ({ className, ...props }: SidebarProps) => {

  const { isVisible, ref, setVisible } = useOutside(false)

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
      </div>
    </div>
  )
};
