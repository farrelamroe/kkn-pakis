export function H1(props: any) {
  const { className, children } = props;
  return (
    <p
      className={`text-[60px] leading-[72px] lg:text-[64px] lg:leading-[76.8px] ${className}`}
    >
      {children}
    </p>
  );
}

export default H1;
