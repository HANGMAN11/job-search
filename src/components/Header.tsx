"use client";
import Link from "next/link";
import { useProfile } from "@/hooks/useProfile";

export type UserProfile = {
  name: string
  desiredJobTitle: string
  about: string
}

export default function Header() {
  const { profile, isLoading } = useProfile();

  if (isLoading) return null;

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-end">
      {profile?.name && (
        <Link href="/profile" className="hover:underline">
          <p>Welcome, {profile.name}</p>
        </Link>
      )}
    </header>
  );
}
