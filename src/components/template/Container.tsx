export function Container(props: any) {
  const { children, className } = props;
  return (
    <main
      className={`relative h-full overflow-hidden px-[50px] lg:px-[104px] ${className}`}
    >
      {children}
    </main>
  );
}
