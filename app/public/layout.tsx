import { Footer, Navbar } from '../shared';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}
