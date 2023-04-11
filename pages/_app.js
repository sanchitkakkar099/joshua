// import '../styles/global.css'
import 'bootstrap/dist/css/bootstrap.css'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
// import 'antd/dist/reset.css';


const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {
  return (<>
    <QueryClientProvider client={queryClient} >
      <Component {...pageProps} />
    </QueryClientProvider>
  </>)
}
