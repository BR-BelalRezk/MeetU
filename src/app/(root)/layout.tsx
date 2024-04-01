type Props = {
  children: Readonly<React.ReactNode>;
};
export default function RootLayout({ children }: Props) {
  return <main>{children}</main>;
}
