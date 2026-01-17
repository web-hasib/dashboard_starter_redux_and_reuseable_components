// src/types/userTypes/userTypes.ts

export interface UserResponseDataType {
  success: boolean;
  message: string;
  data: {
    meta: UserMeta;
    data: UserTypes[];
  };
}
export interface UserMeta {
  page: number;
  limit: number;
  total: number;
}

export interface UserTypes {
  id: string;
  name: string;
  email: string;
  phone: string | null;

  stripeAccountId: string | null;
  stripeCustomerId: string | null;

  isEmailVerified: boolean;
  password: string;

  role: "CLIENT" | "PROFESSIONAL" | "SUPER_ADMIN";
  status: string;

  profileImage: string | null;
  gender: string | null;
  dateOfBirth: string | null;

  isVerified: boolean;
  isSocial: boolean;
  socialProvider: string | null;
  socialId: string | null;

  fcmToken: string | null;

  createdAt: string;
  updatedAt: string;
}

export interface UserLocation {
  latitude: number;
  longitude: number;
  address: string;
  city: string;
  state: string;
  country: string;
}

export interface UserProfileResponse {
  success: boolean;
  message: string;
  data: UserData;
}

export interface UserData {
  location: UserLocation;
  id: string;
  name: string;
  email: string;
  phone: string;
  isEmailVerified: boolean;
  password: string;
  role: "PROFESSIONAL" | "USER" | "ADMIN" | string;
  status: "ACTIVE" | "INACTIVE" | string;
  profileImage: string;
  gender: string;
  dateOfBirth: string; // ISO date string
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}
export interface SingleUserResponseDataType {
  data: UserTypes;
}
