import { useMutation, useQueryClient } from "@tanstack/react-query";
import { 
  postNewsletterSubscribe, 
  InputType as NewsletterInput, 
  OutputType as NewsletterOutput 
} from "../endpoints/newsletter/subscribe_POST.schema";
import { 
  postContactSubmit, 
  InputType as ContactInput, 
  OutputType as ContactOutput 
} from "../endpoints/contact/submit_POST.schema";
import { 
  postPartnershipInquire, 
  InputType as PartnershipInput, 
  OutputType as PartnershipOutput 
} from "../endpoints/partnership/inquire_POST.schema";
import {
  postDriverRegister,
  InputType as DriverRegisterInput,
  OutputType as DriverRegisterOutput
} from "../endpoints/driver/register_POST.schema";

/**
 * A React Query mutation hook for subscribing to the newsletter.
 * Handles the API call and provides mutation state (e.g., isPending, isError).
 */
export const useSubscribeToNewsletter = () => {
  return useMutation<NewsletterOutput, Error, NewsletterInput>({
    mutationFn: (variables) => postNewsletterSubscribe(variables),
  });
};

/**
 * A React Query mutation hook for submitting the contact form.
 * Handles the API call and provides mutation state.
 */
export const useSubmitContact = () => {
  return useMutation<ContactOutput, Error, ContactInput>({
    mutationFn: (variables) => postContactSubmit(variables),
  });
};

/**
 * A React Query mutation hook for submitting a partnership inquiry.
 * Handles the API call and provides mutation state.
 */
export const useSubmitPartnershipInquiry = () => {
  return useMutation<PartnershipOutput, Error, PartnershipInput>({
    mutationFn: (variables) => postPartnershipInquire(variables),
  });
};

/**
 * A React Query mutation hook for submitting a driver registration.
 * Handles the API call and provides mutation state.
 */
export const useDriverRegister = () => {
  return useMutation<DriverRegisterOutput, Error, DriverRegisterInput>({
    mutationFn: (variables) => postDriverRegister(variables),
  });
};