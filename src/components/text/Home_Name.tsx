export function Home_Name(props: any) {
    const { className, children } = props;
    return (
      <p
        className={`text-[52px] leading-[72px] lg:text-[52px] lg:leading-[57.3px] tracking-[-1%] ${className}`}
      >
        {children}
      </p>
    );
  }