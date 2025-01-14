import emailjs from '@emailjs/browser';
import FormField from './FormField';
import { FormData, EmailSchema } from '../../../utils/types/types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMediaQuery } from '@uidotdev/usehooks';
import SuccessMessage from './SuccessMessage';
import SubmitButton from './SubmitButton';
import ErrorWarning from './ErrorWarning';

export const fieldStyles =
  'w-full px-4 py-2 bg-accents-regular box-border  text-sm text-paper-regular font-paragraph  rounded-lg  focus:outline-none placeholder-paper-dark placeholder:font-paragraph placeholder:uppercase focus:placeholder-accents-light placeholder:text-sm placeholder:tracking-wider focus:border-accents-regular focus:ring-4 focus:ring-accents-light';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
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

  return (
    <>
      {isSubmitSuccessful ? (
        <SuccessMessage />
      ) : (
        <form
          className="flex flex-col items-center lg:mx-auto gap-2 lg:w-1/2"
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

          <div className="p-0.5 w-full bg-gradient-to-t from-accents-light via-paper-regular to-paper-light rounded-lg">
            <textarea
              className={fieldStyles}
              id="message"
              placeholder="Please write your message here."
              {...register('message')}
              rows={!IsNotLargeScreen ? 14 : 5}
            />
          </div>
          {Object.keys(errors).length > 0 && (
            <div className="flex flex-col gap-1 self-end">
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
