export const checkEmail = (e, setter) => {
  const checkValidEmail = /^[\w\-.]+@([\w-]+\.)+[\w-]{2,}$/g.test(
    e.target.value
  );
  if (!checkValidEmail) {
    setter((prev) => ({
      ...prev,
      [e.target.name]: `${e.target.name} must be a valid email`,
    }));
  } else {
    setter((prev) => ({
      ...prev,
      [e.target.name]: '',
    }));
  }
};
