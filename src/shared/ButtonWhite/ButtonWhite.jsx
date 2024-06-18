import { ButtonWhiteWrapper } from "./ButtonWhite styled";

export const ButtonWhite = ({
  buttonClassName,
  textClassName,
  type = "button",
  text = "",
  isLoading = false,
  callback = null,
  //? icon = null,
}) => {
  return (
    <ButtonWhiteWrapper
      className={buttonClassName}
      type={type}
      disabled={isLoading}
      onClick={callback}
    >
      <span className={textClassName}>
        {
          //? {icon && isLoading ? <Loader size={34} color="#000" /> : icon()}
        }
        {text}
      </span>
    </ButtonWhiteWrapper>
  );
};
