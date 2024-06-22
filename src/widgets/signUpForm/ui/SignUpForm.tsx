import { SignUpFormWrapper } from "./SignUpForm.styled";
import { Input } from "@/shared/Input";
import { Button } from "@/shared/Button";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

interface Inputs {
  name: string;
  email: string;
  password: string;
}

export const SignUpForm = () => {
  const { handleSubmit, control } = useForm<Inputs>();

  const onSignUpButtonClick: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    return;
  };

  return (
    <SignUpFormWrapper onSubmit={handleSubmit(onSignUpButtonClick)}>
      <Controller
        control={control}
        name="name"
        rules={{
          required: "Name is required",
        }}
        render={({ field: { onChange }, fieldState: { error } }) => (
          <>
            <Input onChange={onChange} placeholder="Name" inputType="text" />
            {error && <div>{error.message}</div>}
          </>
        )}
      />

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
        text="Sign Up"
        btnClassName="submitButton"
        styleType="white"
      />
    </SignUpFormWrapper>
  );
};
