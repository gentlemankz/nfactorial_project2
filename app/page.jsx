import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsList from "@/components/NewsList";
import SecondHeader from "@/components/SecondHeader";
export default function HomePage() {
  return (
    <div className="container">
      <main>
        <Header />
        <SecondHeader />
        <NewsList />
      </main>
      <footer>
      <Footer />
      </footer>
    </div>
  );
}
