import { QueryClient, QueryClientProvider } from "react-query";
import Header from "../Header";
import Home from "../Home";
import dayjs from "dayjs";

function App() {
  const queryClient = new QueryClient();
  dayjs.locale("fr");
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Home />
    </QueryClientProvider>
  );
}

export default App;
