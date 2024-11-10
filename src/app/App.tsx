import React, { Suspense } from "react";
import { AppRouter } from "./providers/router";
import { Header } from "widgets/Header";
import { Footer } from "widgets/footer";
import ScrollToTop from "shared/lib/hooks/useScroll";
function App() {
  ScrollToTop();
  return (
    <div className="app">
      <Header />
      <Suspense fallback="">
        <div className="content-page">
          <AppRouter />
        </div>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
