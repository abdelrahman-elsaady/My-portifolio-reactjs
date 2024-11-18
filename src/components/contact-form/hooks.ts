import { useFormState, useFormStatus } from "react-dom";
import { sendEmail } from "./actions";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const useContactForm = () => {
  const [result, handleSend] = useFormState(sendEmail, undefined);

  useEffect(() => {
    if (result) {
      if (result.isServerError) {
        toast.error(result.errors?.serverError || "faild to send email");
      }
    }
  }, [result]);

  return {
    result,
    handleSend,
  };
};
