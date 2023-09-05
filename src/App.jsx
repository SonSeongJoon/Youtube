import {Outlet} from "react-router-dom";
import {Header} from "./components/Header";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
    return (
        <div className='max-w-screen-lg mx-auto'>
            <Header/>
            <QueryClientProvider client={queryClient}>
                <Outlet/>
            </QueryClientProvider>
        </div>
    );
}

export default App;
