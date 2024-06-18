import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';


function collections() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <p>{t(general.commingsoon)}</p>
    </div>
  );
}
export default function WrappedApp() {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  )
}