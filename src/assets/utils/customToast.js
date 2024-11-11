import { toast } from 'react-toastify';

export const customToast = (style, text, cb = null, timer = 3000) =>
  toast[`${style}`](text, {
    position: 'bottom-center',
    autoClose: timer,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',

    onClose: cb,
  });
