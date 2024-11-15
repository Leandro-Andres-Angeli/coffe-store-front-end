export const checkEqualPassword = (e, setter) => {
  const password2 = e.target.value;
  const password = e.target
    .closest('form')
    .querySelector('[name="password"]').value;

  if (password !== password2) {
    setter((prev) => ({
      ...prev,

      password: 'passwords must be equal',
    }));
  } else {
    setter((prev) => {
      return { ...prev, password: '' };
    });
  }
};

export const checkPasswordLength = (e, setter) => {
  const { value } = e.target;
  if (value.length <= 7) {
    setter((prev) => ({
      ...prev,

      passwordLength: `${e.target.name} must be at least 8 chars long`,
    }));
  } else {
    setter((prev) => ({
      ...prev,

      passwordLength: '',
    }));
  }
};
