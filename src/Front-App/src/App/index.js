import { QueryClient, QueryClientProvider } from "react-query";
import Header from "../Header";
import Home from "../Home";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Home />
    </QueryClientProvider>
  );
}

export default App;
