import { Bounce, toast } from 'react-toastify';

export const customToast = (style, text) =>
  toast[`${style}`](text, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
    transition: Bounce,
  });
