// src/app/page.tsx

import Link from 'next/link';

const Home = () => {
  const blogs = [
    { title: 'Revo', slug: 'revo', excerpt: 'Revo is a high-performance pickup truck with advanced features.' },
    { title: 'Corolla', slug: 'corolla', excerpt: 'Corolla is a popular sedan known for its reliability and comfort.' },
    { title: 'Sonata', slug: 'sonata', excerpt: 'Sonata is a luxury sedan with cutting-edge technology.' },
    { title: 'Cultus', slug: 'cultus', excerpt: 'Cultus is a compact car that is fuel-efficient and affordable.' },
    { title: 'Prado', slug: 'prado', excerpt: 'Prado is a robust SUV designed for off-road adventures.' },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Car Blog</h1>
      <p className="text-lg mb-10">Explore the latest articles about various car models.</p>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.slug}
            className="p-6 bg-white rounded-lg shadow-md border border-gray-300 w-80 text-center"
          >
            <h2 className="text-2xl font-semibold mb-4">{blog.title}</h2>
            <p className="text-gray-600 mb-6">{blog.excerpt}</p>
            <Link href={`/posts/${blog.slug}`} className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all">
  Read More
</Link>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
