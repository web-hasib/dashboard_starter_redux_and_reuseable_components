export const booksPath = () => "/books";
export const booksIdPath = (id: string) => `/books/${id}`;
export const savedBooksPath = () => "/saved-books";
export const savedBooksIdPath = (id: string) => `/saved-books/${id}`;
export const personalizeBookPath = (id: string) => `/personalize-book/${id}`;
export const cartPath = () => "/cart";

export const signinPath = () => "/login";
export const signupPath = () => "/signup";
export const verifyOtpPath = () => "/verify-otp";
export const verifyForgotPasswordOtpPath = () => "/verify-forgot-password-otp";
export const forgotPasswordPath = () => "/forgot-password";
export const resetPasswordPath = (token: string) =>
  "/reset-password?token=" + token;
export const resetSuccessPath = () => "/reset-success";
