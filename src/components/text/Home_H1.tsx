export function Home_H1(props: any) {
    const { className, children } = props;
    return (
      <p
        className={`text-[48px] leading-[72px] lg:text-[48px] lg:leading-[76.8px] ${className}`}
      >
        {children}
      </p>
    );
  }