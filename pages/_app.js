import '../styles/globals.css';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import DataProvider from '@/context/dataContext';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      desiredChainId={ChainId.Mumbai}
      clientId={process.env.THIRDWEB_CLIENT_ID}
    >
      <DataProvider>
        <Component {...pageProps} />
      </DataProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
