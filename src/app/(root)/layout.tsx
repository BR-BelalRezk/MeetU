import { StreamClientProvider } from "@/providers/StreamClientProvider";

type Props = {
  children: Readonly<React.ReactNode>;
};
export default function RootLayout({ children }: Props) {
  return (
    <main>
      <StreamClientProvider>{children}</StreamClientProvider>
    </main>
  );
}
