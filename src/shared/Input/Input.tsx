import { FC } from "react";
import { InputWrapper } from "./Input.styled";

// interface Props {
//   labelClassName?: string;
//   spanClassName?: string;
//   inputClassName?: string;
//   labelText?: string;
//   inputName: string;
//   inputType: "text" | "number" | "email" | "password";
//   placeholder?: string;
// }

interface Props {
  labelClassName?: string;
  spanClassName?: string;
  inputClassName?: string;
  labelText?: string;
  inputType: "text" | "number" | "email" | "password";
  placeholder?: string;
  onChange: () => void;
}

export const Input: FC<Props> = ({
  labelClassName,
  spanClassName,
  inputClassName,
  labelText,
  inputType,
  placeholder,
  onChange,
}) => {
  return (
    <InputWrapper className={`${labelClassName} label`}>
      {labelText && (
        <span className={`${spanClassName} span`}>{labelText}</span>
      )}
      <input
        onChange={onChange}
        className={`${inputClassName} input`}
        type={inputType}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
};
