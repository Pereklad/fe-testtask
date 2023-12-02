export const normalizePhoneNumber = (phoneNumber) => {
  const digits = phoneNumber.replace(/\D/g, '');

  if (digits.length < 10) {
    return phoneNumber;
  }

  const code = digits.slice(0, -10);
  const restNumber = digits.slice(-10);

  const formattedNumber = `+${code} (${restNumber.slice(0, 3)}) ${restNumber.slice(
    3,
    6
  )} ${restNumber.slice(6, 8)} ${restNumber.slice(8)}`;

  return formattedNumber;
};
