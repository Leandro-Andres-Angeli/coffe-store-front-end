const validateFileFormatImage = (format) => {
  return ['jpg', 'jpeg', 'png', 'webp'].includes(format);
};
export default validateFileFormatImage;
