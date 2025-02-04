import { useEffect, useState } from 'react';
import ReactModal from 'react-modal';

import * as styles from './index.module.scss';

type Props = {
  message: string;
  duration?: number;
  callback?: () => void;
};

const Toast = ({ message, duration = 3000, callback }: Props) => {
  const [text, setText] = useState('');

  useEffect(() => {
    if (!message) {
      return;
    }

    setText(message);

    const timer = setTimeout(() => {
      callback?.();
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [callback, duration, message, text]);

  return (
    <ReactModal
      role="toast"
      isOpen={Boolean(message)}
      overlayClassName={styles.toastContainer}
      className={styles.toast}
      closeTimeoutMS={300}
    >
      {text}
    </ReactModal>
  );
};

export default Toast;
