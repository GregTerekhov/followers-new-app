export const dropdownStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    width: 112,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 14,
    borderRadius: 10,
    backgroundColor: 'var(--following-btn-color-inactive)',
    borderColor: state.isFocused
      ? 'var(--following-btn-color-active)'
      : 'var(--following-btn-color-inactive)',
  }),
  '@media (min-width: 768px)': {
    control: baseStyles => ({
      ...baseStyles,
      width: 220,
    }),
  },
  container: baseStyles => ({
    ...baseStyles,
    color: 'var(--primary-color)',
    borderRadius: 10,
    boxShadow: '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);',
  }),
  placeholder: baseStyles => ({
    ...baseStyles,
    color: 'rgba(55, 55, 55, 0.3)',
    fontSize: 14,
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    color: 'var(--primary-color)',
    textTransform: 'uppercase',
    fontSize: 14,
    backgroundColor: state.isSelected
      ? 'var(--following-btn-color-active)'
      : '',
  }),
};
