export const USERNAME_REGEX = new RegExp(`^[a-zA-Z0-9_-]{3,16}$`);
export const EMAIL_REGEX = new RegExp(`^[a-zA-Z0-9._%+-]+@gmail\\.com$`);
export const PWD_REGEX = new RegExp(`^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$`);
