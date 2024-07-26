export function ContainerArticle(props: any) {
  const { children, className } = props;
  return (
    <main
      className={`relative overflow-hidden rounded-[20px] px-[200px] pt-[139px] ${className}`}
    >
      {children}
    </main>
  );
}
