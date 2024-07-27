export function Container(props: any) {
  const { children, className } = props;
  return (
    <main
      className={`relative h-full overflow-hidden rounded-[20px] lg:px-[104px] px-[50px] ${className}`}
    >
      {children}
    </main>
  );
}
