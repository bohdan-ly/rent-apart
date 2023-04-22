export const USERNAME_REGEX = new RegExp(`^[a-zA-Z0-9_-]{3,16}$`);
export const EMAIL_REGEX = new RegExp(`^[a-zA-Z0-9._%+-]+@gmail\\.com$`);
export const PWD_REGEX = new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$`);
