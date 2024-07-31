export function Home_Title(props: any) {
    const { className, children } = props;
    return (
      <p
        className={`text-[30px] leading-[72px] lg:text-[30px] lg:leading-[76.8px] tracking-[-1%] ${className}`}
      >
        {children}
      </p>
    );
  }