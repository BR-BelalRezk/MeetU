"use client";
import useGetCalls from "@/hooks/useGetCalls";
import { useRouter } from "next/navigation";

type Props = {
  type: "ended" | "upcoming" | "recordings";
};
export default function CallList({ type }: Props) {
  const router = useRouter();
  const { ended, upcoming, recordings, isLoading } = useGetCalls();
  const getCalls = () => {
    switch (type) {
      case "ended":
        return "ended";
      case "recordings":
        return "ended";
      default:
        break;
    }
  };
  return <div>CallList</div>;
}
