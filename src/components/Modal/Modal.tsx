import { DetailsDivProps } from '@/types';
import styles from './Modal.module.scss';
import cn from 'classnames'
import { forwardRef } from 'react';

interface ModalProps extends DetailsDivProps { }

export const Modal = forwardRef<HTMLDivElement, ModalProps>(({ className, ...props }, ref) => {

  return (
    <div className={cn(styles.modal, className)} {...props}>
      <div ref={ref} className={styles.content}>
        <h1>Modal header</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos unde obcaecati magni autem, alias similique maxime sed, dolore ut facere aliquam aliquid cumque tempora, laborum error illum est adipisci labore.</p>
      </div>
    </div>
  )
});
