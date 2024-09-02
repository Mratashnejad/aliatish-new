import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

// Can be imported from a shared config
const locales = ['en', 'ir', 'hy'];

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) {
    return{
      redirect:{
        destination:'/404',
        permanent: false,

      }
    }
  }
 
  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});
