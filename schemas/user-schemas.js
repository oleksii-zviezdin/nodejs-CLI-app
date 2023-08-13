import Joi from "joi";

import { emailRegexp, subscriptionList } from "../constants/user-constants.js";

export const userSingUpAndSingInSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
  password: Joi.string().min(6).required(),
  subscription: Joi.string().valid(...subscriptionList),
});

export const updateSubscriptionStatusSchema = Joi.object({
  subscription: Joi.string()
    .valid(...subscriptionList)
    .required(),
});

// export const userEmailVerifySchema = Joi.object({
//   email: Joi.string().pattern(emailRegexp).required(),
// }).messages("missing required field email");

export const userEmailVerifySchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required(),
}).messages({
  "any.required": "missing required field email",
});

export default {
  userSingUpAndSingInSchema,
  updateSubscriptionStatusSchema,
  userEmailVerifySchema,
};
