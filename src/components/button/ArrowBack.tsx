import Image from "next/image";
import { Text } from "@/components";
import { useRouter } from "next/router";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function ArrowBack() {
  const router = useRouter();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div
      className="mt-[111px] flex flex-row items-center justify-start gap-x-1"
      onClick={() => router.back()}
      data-aos="fade-right"
    >
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="var(--color-text)"
        xmlns="http://www.w3.org/2000/svg"
        className="h-fit max-h-[15px] w-fit max-w-[15px]"
      >
        <path d="M44.7117 84.6328C43.4615 85.8826 41.7661 86.5847 39.9984 86.5847C38.2306 86.5847 36.5352 85.8826 35.285 84.6328L5.28504 54.6328C4.03523 53.3826 3.33313 51.6872 3.33313 49.9195C3.33313 48.1517 4.03523 46.4563 5.28504 45.2061L35.285 15.2061C36.5424 13.9918 38.2264 13.3198 39.9744 13.335C41.7224 13.3502 43.3944 14.0513 44.6305 15.2874C45.8666 16.5234 46.5677 18.1955 46.5829 19.9435C46.5981 21.6915 45.9261 23.3755 44.7117 24.6328L26.665 43.2528L89.9984 43.2528C91.7665 43.2528 93.4622 43.9552 94.7124 45.2054C95.9627 46.4557 96.665 48.1514 96.665 49.9195C96.665 51.6876 95.9627 53.3833 94.7124 54.6335C93.4622 55.8838 91.7665 56.5861 89.9984 56.5861L26.665 56.5861L44.7117 75.2061C45.9615 76.4563 46.6636 78.1517 46.6636 79.9195C46.6636 81.6872 45.9615 83.3826 44.7117 84.6328Z" />
      </svg>
      <Text
        size="xs"
        className="underline-animation font-jakarta duration-300 hover:cursor-pointer hover:font-bold"
      >
        Kembali
      </Text>
    </div>
  );
}
