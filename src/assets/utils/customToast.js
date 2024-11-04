import { Bounce, toast } from 'react-toastify';

export const customToast = (style, text, cb = null) =>
  toast[`${style}`](text, {
    position: 'bottom-center',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',

    onClose: cb,
  });
