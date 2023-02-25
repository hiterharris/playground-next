import { useRouter } from 'next/router';
import Image from 'next/image';
import { backButton } from "../assets";

const BackButton = () => {
  const router = useRouter();
  return <Image src={backButton} className="back-button button" onClick={() => router.back()} alt="back button" />;
}

export default BackButton; 