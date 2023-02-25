import BackButton from "@/components/BackButton";
import { useRouter } from 'next/router';

const Layout = ({ children }) => {
  const router = useRouter();
    const currentPath = router.pathname;
    return (
      <>
        {currentPath !== '/' && <BackButton />}
        <main>{children}</main>
      </>
    )
  }

  export default Layout;