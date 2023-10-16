// import Image from 'next/image'

import Link from 'next/link';
import ProductCard from './components/ProductCard';

export default function Home() {
  return (
    <main>
      <h1>Hello Siegfred!This is NextJS 13 App!</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}