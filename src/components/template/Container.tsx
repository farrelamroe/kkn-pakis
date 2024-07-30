export function Container(props: any) {
  const { children, className } = props;
  return (
    <main
      className={`relative h-full overflow-hidden rounded-[20px] px-[50px] lg:px-[104px] ${className}`}
    >
      {children}
    </main>
  );
}
