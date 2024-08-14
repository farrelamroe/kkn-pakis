import { useRouter } from "next/router";

export function Button(props: any) {
  const router = useRouter();
  const { href, text, size, color, className, buttonCount, back } = props;
  let buttonSize, buttonColor;
  if (size === "xs") {
    buttonSize =
      "px-[16px] py-[7px] outline-2 -outline-offset-1 leading-[10px]";
  } else if (size === "sm") {
    buttonSize =
      "px-[20px] py-[7px] outline-2 -outline-offset-1 leading-[12px]";
  } else if (size === "md") {
    buttonSize =
      "px-[24px] py-[10px] outline-2 -outline-offset-1 leading-[14px]";
  } else if (size === "lg") {
    buttonSize =
      "px-[28px] py-[10px] outline-3 -outline-offset-2 leading-[16px]";
  }

  if (color === "primary") {
    buttonColor = "outline-primary hover:outline-primary  hover:text-primary";
  } else if (color === "secondary") {
    buttonColor = "outline-secondary hover:outline-secondary  hover:";
  }

  const buttons = [];
  for (let i = 0; i < buttonCount; i++) {
    buttons.push(
      <button
        key={i}
        className={`relative h-fit w-fit rounded-[10px] font-jakarta outline duration-300 hover:bg-white ${buttonSize} ${buttonColor} ${className}`}
        onClick={
          back == false ? () => router.push(href[i]) : () => router.back()
        }
      >
        {text[i]}
      </button>,
    );
  }
  return <>{buttons}</>;
}
