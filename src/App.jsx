import {Outlet} from "react-router-dom";
import {Header} from "./components/Header";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {YoutubeApiProvider} from "./context/YoutubeApiContext";

const queryClient = new QueryClient();

function App() {
    return (
        <div className='max-w-screen-lg mx-auto'>
            <Header/>
            <YoutubeApiProvider>
                <QueryClientProvider client={queryClient}>
                    <Outlet/>
                </QueryClientProvider>
            </YoutubeApiProvider>

        </div>
    );
}

export default App;
