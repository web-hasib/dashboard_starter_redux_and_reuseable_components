import { baseApi } from "../baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Register User
    register: builder.mutation({
      query: (newUser) => ({
        url: "/users/register",
        method: "POST",
        body: newUser,
      }),
    }),
    // verify User Email
    verifyEmail: builder.mutation({
      query: (body) => ({
        url: "/auth/email-verify",
        method: "POST",
        body,
      }),
    }),
    // Resend API On Email
    resendOtp: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/resend-otp",
        method: "POST",
        body: userInfo,
      }),
    }),
    // Login User
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        body: userInfo,
      }),
    }),

    // update User password
    changePass: builder.mutation({
  query: (userInfo) => ({
    url: "/auth/change-password",
    method: "PUT",
    body: userInfo, // already stringified in handler
    headers: {
      "Content-Type": "application/json",
    },
  }),
}),

  }),
   overrideExisting: true,
});

export const {
  useRegisterMutation,
  useVerifyEmailMutation,
  useResendOtpMutation,
  useLoginMutation,
  useChangePassMutation,
} = authApi;
