import { Input } from "@/shared/Input";
import { Button } from "@/shared/Button";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { SignInFormWrapper } from "./SignInForm.styled";

interface Inputs {
  name: string;
  email: string;
  password: string;
}

export const SignInForm = () => {
  const { handleSubmit, control } = useForm<Inputs>();

  const onSignInButtonClick: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    return;
  };

  return (
    <SignInFormWrapper onSubmit={handleSubmit(onSignInButtonClick)}>
      <Controller
        control={control}
        name="email"
        rules={{
          required: "Email is required",
        }}
        render={({ field: { onChange }, fieldState: { error } }) => (
          <>
            <Input onChange={onChange} placeholder="Email" inputType="email" />
            {error && <div>{error.message}</div>}
          </>
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={{
          required: "Password is required",
        }}
        render={({ field: { onChange }, fieldState: { error } }) => (
          <>
            <Input
              onChange={onChange}
              placeholder="Password"
              inputType="password"
            />
            {error && <div>{error.message}</div>}
          </>
        )}
      />

      <Button
        type="submit"
        text="Sign In"
        btnClassName="submitButton"
        styleType="white"
      />
    </SignInFormWrapper>
  );
};
