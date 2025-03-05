import { useState, useEffect } from "react";
import Button from "./Button";
import { Reveal } from "../utils/Reveal";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";
import axios, { HttpStatusCode } from "axios";
import { API_URL, CONTACT_FORM_ENDPOINT } from "../../utils/constants";

interface MessageRequest {
  name: string;
  contact: string;
  subject?: string;
  message: string;
}

interface ErrorMessages {
  name: string;
  contact: string;
  message: string;
}

interface Alert {
  message: string;
  type: "success" | "error" | "";
}

const InitialMessageRequest: MessageRequest = {
  name: "",
  contact: "",
  subject: "",
  message: "",
};

const InitialErrorMessages: ErrorMessages = {
  name: "",
  contact: "",
  message: "",
};

const InitialAlert: Alert = {
  message: "",
  type: "",
};

interface ContactFormProps {
	className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
	className = "",
}) => {
  const [messageRequest, setMessageRequest] = useState<MessageRequest>(
    InitialMessageRequest
  );
  const [errorMessages, setErrorMessages] =
    useState<ErrorMessages>(InitialErrorMessages);
  const [touchedFields, setTouchedFields] = useState<Record<string, boolean>>(
    {}
  );
  const [alert, setAlert] = useState<Alert>(InitialAlert);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  // Check form validity whenever relevant state changes
  useEffect(() => {
    const hasName = messageRequest.name.trim().length >= 2;
    const hasValidEmail = validateEmail(messageRequest.contact);
    const hasMessage = messageRequest.message.trim().length >= 10;

		setIsFormValid(hasName && hasValidEmail && hasMessage);
		setAlert(InitialAlert);
  }, [messageRequest.name, messageRequest.contact, messageRequest.message]);

  // Validate email with regex
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle field validation on blur
  const handleBlur = (field: keyof MessageRequest) => {
    // Mark field as touched
    setTouchedFields({
      ...touchedFields,
      [field]: true,
    });

    let error = "";

    switch (field) {
      case "name":
        if (!messageRequest.name.trim()) {
          error = "Name is required";
        } else if (messageRequest.name.trim().length < 2) {
          error = "Name must be at least 2 characters";
        }
        break;

      case "contact":
        if (!messageRequest.contact.trim()) {
          error = "Email is required";
        } else if (!validateEmail(messageRequest.contact)) {
          error = "Please enter a valid email address";
        }
        break;

      case "message":
        if (!messageRequest.message.trim()) {
          error = "Message is required";
        } else if (messageRequest.message.trim().length < 10) {
          error = "Message must be at least 10 characters";
        }
        break;

      default:
        break;
    }

    setErrorMessages({
      ...errorMessages,
      [field]: error,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const nameError = !messageRequest.name.trim()
      ? "Name is required"
      : messageRequest.name.trim().length < 2
        ? "Name must be at least 2 characters"
        : "";

    const emailError = !messageRequest.contact.trim()
      ? "Email is required"
      : !validateEmail(messageRequest.contact)
        ? "Please enter a valid email address"
        : "";

    const messageError = !messageRequest.message.trim()
      ? "Message is required"
      : messageRequest.message.trim().length < 10
        ? "Message must be at least 10 characters"
        : "";

    setErrorMessages({
      name: nameError,
      contact: emailError,
      message: messageError,
    });

    // Mark all fields as touched on submission
    setTouchedFields({
      name: true,
      email: true,
      message: true,
    });

    // If no errors, submit the form
    if (!nameError && !emailError && !messageError) {
      setIsSubmitting(true);
      try {
        const response = await axios.post(
          `${API_URL}${CONTACT_FORM_ENDPOINT}`,
          messageRequest
        );
        if (response.status === HttpStatusCode.Ok) {
          setAlert({
            message: "Message sent successfully!",
            type: "success",
          });
        }
      } catch (error) {
        setAlert({
          message: "An error occurred. Please try again later.",
          type: "error",
        });
      } finally {
        setIsSubmitting(false);
      }

      // Reset form
      setMessageRequest(InitialMessageRequest);
      setErrorMessages(InitialErrorMessages);
      setTouchedFields({});
    }
  };

  return (
    <Reveal width="100%" className={`w-full ${className}`}>
      <form
        className="grid grid-cols-1 space-y-4 min-w-[260px]"
        onSubmit={handleSubmit}
      >
        <FormInput
          label="Name"
          id="name"
          name="name"
          type="text"
          placeholder="John Doe"
          value={messageRequest.name}
          error={errorMessages.name}
          touched={touchedFields.name}
          onChange={(e) => {
            setMessageRequest({ ...messageRequest, name: e.target.value });
            setErrorMessages({ ...errorMessages, name: "" });
          }}
          onInputBlur={() => handleBlur("name")}
        />

        <FormInput
          label="Email"
          id="email"
          name="email"
          type="email"
          placeholder="johndoe@example.com"
          value={messageRequest.contact}
          error={errorMessages.contact}
          touched={touchedFields.contact}
          onChange={(e) => {
            setMessageRequest({ ...messageRequest, contact: e.target.value });
            setErrorMessages({ ...errorMessages, contact: "" });
          }}
          onInputBlur={() => handleBlur("contact")}
        />

        <FormInput
          label="Subject"
          id="subject"
          name="subject"
          type="text"
          placeholder="(Optional) Inquiry about..."
          value={messageRequest.subject || ""}
          onChange={(e) => {
            setMessageRequest({ ...messageRequest, subject: e.target.value });
          }}
        />

        <FormTextarea
          label="Message"
          id="message"
          name="message"
          rows={4}
          placeholder="How can I help you?"
          value={messageRequest.message}
          error={errorMessages.message}
          touched={touchedFields.message}
          onChange={(e) => {
            setMessageRequest({ ...messageRequest, message: e.target.value });
            setErrorMessages({ ...errorMessages, message: "" });
          }}
          onTextareaBlur={() => handleBlur("message")}
        />

        {alert.message && (
          <div
            className={`text-${alert.type === "error" ? "red" : alert.type === "success" ? "green" : "gray"}-500 text-center py-2`}
          >
            {alert.message}
          </div>
        )}

        <Button
          primary
          type="submit"
          className="w-full"
          disabled={isSubmitting || !isFormValid}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Reveal>
  );
};

export default ContactForm;
