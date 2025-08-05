import { redirect } from 'next/navigation';

export default function RootPage() {
  // デフォルトで英語版にリダイレクト
  redirect('/en');
}