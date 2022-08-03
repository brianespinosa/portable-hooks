import dynamic from 'next/dynamic';

export interface DisableSSRProps {
  children: React.ReactNode;
}

export function DisableSSR({ children }) {
  return <>{children}</>;
}

export default dynamic(() => Promise.resolve(DisableSSR), {
  ssr: false,
});
