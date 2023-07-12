enum SignupLevels {
  CreateAccount,
  EnterSMSCode,
  CreatePassword,
  EnterDetails,
}

type DWDOwnButtonProps = {
  readyToCLick: boolean;
};

type CreteateAccountInputs = {
  phoneNumber: string;
};

type SMSInputs = {
  sms: string;
};

type FormLoginInputs = {
  phoneOrUsername: string;
  password: string;
  remember: boolean;
};

type FormCreatePasswordInput = {
  password1: string;
  password2: string;
};
type FormDetailsInput = {
  name: string;
  surname: string;
  username: string;
  thirdname?: string;
  date: Date;
  gender: "Man" | "Woman";
};

export {
  SignupLevels,
  DWDOwnButtonProps,
  CreteateAccountInputs,
  FormLoginInputs,
  FormCreatePasswordInput,
  SMSInputs,
  FormDetailsInput
};
