// Create Account types
export type CreateNewAccountTypes = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

// Login Types
export type LogInUserTypes = {
  email: string;
  password: string;
};
