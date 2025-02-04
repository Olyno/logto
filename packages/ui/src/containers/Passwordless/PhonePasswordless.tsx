import classNames from 'classnames';
import { useCallback, useEffect, useState, useMemo, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { getSendPasscodeApi } from '@/apis/utils';
import Button from '@/components/Button';
import { PhoneInput } from '@/components/Input';
import TermsOfUse from '@/containers/TermsOfUse';
import useApi, { ErrorHandlers } from '@/hooks/use-api';
import useForm from '@/hooks/use-form';
import { PageContext } from '@/hooks/use-page-context';
import usePhoneNumber from '@/hooks/use-phone-number';
import useTerms from '@/hooks/use-terms';
import { UserFlow, SearchParameters } from '@/types';
import { getSearchParameters } from '@/utils';

import PasswordlessConfirmModal from './PasswordlessConfirmModal';
import PasswordlessSwitch from './PasswordlessSwitch';
import * as styles from './index.module.scss';

type Props = {
  type: UserFlow;
  className?: string;
  // eslint-disable-next-line react/boolean-prop-naming
  autoFocus?: boolean;
  hasTerms?: boolean;
  hasSwitch?: boolean;
};

type FieldState = {
  phone: string;
};

const defaultState: FieldState = { phone: '' };

const PhonePasswordless = ({
  type,
  autoFocus,
  hasTerms = true,
  hasSwitch = false,
  className,
}: Props) => {
  const { setToast } = useContext(PageContext);
  const { t } = useTranslation();

  const { termsValidation } = useTerms();
  const { countryList, phoneNumber, setPhoneNumber, isValidPhoneNumber } = usePhoneNumber();
  const navigate = useNavigate();
  const { fieldValue, setFieldValue, setFieldErrors, validateForm, register } =
    useForm(defaultState);

  const [showPasswordlessConfirmModal, setShowPasswordlessConfirmModal] = useState(false);

  const errorHandlers: ErrorHandlers = useMemo(
    () => ({
      'user.phone_not_exists': (error) => {
        const socialToBind = getSearchParameters(location.search, SearchParameters.bindWithSocial);

        // Directly display the error if user is trying to bind with social
        if (socialToBind) {
          setToast(error.message);

          return;
        }

        setShowPasswordlessConfirmModal(true);
      },
      'user.phone_exists_register': () => {
        setShowPasswordlessConfirmModal(true);
      },
      'guard.invalid_input': () => {
        setFieldErrors({ phone: 'invalid_phone' });
      },
    }),
    [setFieldErrors, setToast]
  );

  const sendPasscode = getSendPasscodeApi(type, 'sms');
  const { result, run: asyncSendPasscode } = useApi(sendPasscode, errorHandlers);

  const phoneNumberValidation = useCallback(
    (phoneNumber: string) => {
      if (!isValidPhoneNumber(phoneNumber)) {
        return 'invalid_phone';
      }
    },
    [isValidPhoneNumber]
  );

  const onSubmitHandler = useCallback(
    async (event?: React.FormEvent<HTMLFormElement>) => {
      event?.preventDefault();

      if (!validateForm()) {
        return;
      }

      if (hasTerms && !(await termsValidation())) {
        return;
      }

      void asyncSendPasscode(fieldValue.phone);
    },
    [validateForm, hasTerms, termsValidation, asyncSendPasscode, fieldValue.phone]
  );

  const onModalCloseHandler = useCallback(() => {
    setShowPasswordlessConfirmModal(false);
  }, []);

  useEffect(() => {
    // Sync phoneNumber
    setFieldValue((previous) => ({
      ...previous,
      phone: `${phoneNumber.countryCallingCode}${phoneNumber.nationalNumber}`,
    }));
  }, [phoneNumber, setFieldValue]);

  useEffect(() => {
    if (result) {
      navigate(
        { pathname: `/${type}/sms/passcode-validation`, search: location.search },
        { state: { sms: fieldValue.phone } }
      );
    }
  }, [fieldValue.phone, navigate, result, type]);

  return (
    <>
      <form className={classNames(styles.form, className)} onSubmit={onSubmitHandler}>
        <div className={styles.formFields}>
          <PhoneInput
            name="phone"
            placeholder={t('input.phone_number')}
            className={styles.inputField}
            countryCallingCode={phoneNumber.countryCallingCode}
            nationalNumber={phoneNumber.nationalNumber}
            autoFocus={autoFocus}
            countryList={countryList}
            {...register('phone', phoneNumberValidation)}
            onChange={(data) => {
              setPhoneNumber((previous) => ({ ...previous, ...data }));
            }}
          />
          {hasSwitch && <PasswordlessSwitch target="email" className={styles.switch} />}
        </div>

        {hasTerms && <TermsOfUse className={styles.terms} />}

        <Button title="action.continue" onClick={async () => onSubmitHandler()} />

        <input hidden type="submit" />
      </form>
      <PasswordlessConfirmModal
        isOpen={showPasswordlessConfirmModal}
        type={type === 'sign-in' ? 'register' : 'sign-in'}
        method="sms"
        value={fieldValue.phone}
        onClose={onModalCloseHandler}
      />
    </>
  );
};

export default PhonePasswordless;
