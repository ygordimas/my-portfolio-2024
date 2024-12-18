import React from 'react';
import emailjs from '@emailjs/browser';
import FormField from './FormField';
import { FormData, EmailSchema } from '../../../utils/types/types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MailOutSolid, EmojiPuzzled, WarningTriangle } from 'iconoir-react';
import { useMediaQuery } from '@uidotdev/usehooks';

export const fieldStyles =
  'px-4 py-2 border border-accents-light text-sm text-type-regular font-clashdisplay bg-paper-light rounded shadow shadow-accents-dark focus:outline-none placeholder-type-light placeholder:font-neutralface focus:placeholder-accents-light placeholder:text-xs placeholder:tracking-wider focus:border-accents-regular focus:ring-4 focus:ring-accents-light';

const ErrorWarning = ({ message }) => {
  return (
    <div className="flex gap-1 text-xs items-center">
      <span className="bg-paper-light rounded-full p-1">
        <WarningTriangle className="text-red-600" />
      </span>
      <p className="text-red-600">{message}</p>
    </div>
  );
};

const SubmitButton = ({ isValid }) => {
  const invalidStyles =
    'cursor-not-allowed bg-paper-regular border-paper-dark hover:border-paper-dark pointer-events-none';
  const validStyles = 'cursor-pointer bg-accents-regular text-paper-light';

  return (
    <button
      className={`flex gap-2 items-center justify-center self-end tracking-wider ${isValid ? validStyles : invalidStyles}`}
      type="submit"
    >
      Submit
      <MailOutSolid />
    </button>
  );
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    formState: { isValid, isSubmitSuccessful },
  } = useForm<FormData>({
    resolver: zodResolver(EmailSchema),
  });

  const IsNotLargeScreen = useMediaQuery(
    'only screen and (max-width : 1024px)'
  );

  const SERVICE_ID = 'service_wn1rdxh';
  const TEMPLATE_ID = 'template_j2bq7ta';
  const PUBLIC_KEY = 'buIry_SVGWHrESl0L';

  const onSubmit = async (data: FormData) => {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((response) => {})
      .catch((error) => {});
  };

  console.log(errors);

  return (
    <>
      {isSubmitSuccessful ? (
        <div>E-mail sent! Will get back to you as soon as possible.</div>
      ) : (
        <form
          className="flex flex-col w-[92%] max-w-[500px] shadow-md shadow-accents-light border-paper-dark rounded bg-paper-regular border-2 p-4 gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormField
            type="text"
            placeholder="Name"
            name="name"
            register={register}
            error={errors.name}
          />

          <FormField
            type="text"
            placeholder="E-Mail"
            name="email"
            register={register}
            error={errors.email}
          />

          <textarea
            className={fieldStyles}
            id="message"
            placeholder="Please write your message here."
            {...register('message')}
            rows={!IsNotLargeScreen ? 14 : 5}
          />
          {Object.keys(errors).length > 0 && (
            <div className="flex flex-col gap-1">
              {errors.hasOwnProperty('name') && (
                <ErrorWarning message="Please insert a valid name." />
              )}
              {errors.hasOwnProperty('email') && (
                <ErrorWarning message="Please insert a valid e-mail." />
              )}
              {errors.hasOwnProperty('message') && (
                <ErrorWarning message="Message is too short." />
              )}
            </div>
          )}

          <SubmitButton isValid={isValid} />
        </form>
      )}
    </>
  );
};

export default ContactForm;
