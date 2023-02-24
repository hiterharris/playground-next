import { useRouter } from 'next/router';
import Image from 'next/image';
import { backButton } from "../assets";

export default function Page() {
  const router = useRouter();
  return <Image src={backButton} className="back-button" onClick={() => router.back()} alt="back button" />;
}