import { createFileRoute } from '@tanstack/react-router';
import Blog from '../components/Blog';
import { useEffect } from 'react';

export const Route = createFileRoute('/blog/$name/$page')({
  component: BlogComponent,
});

function BlogComponent() {
  const { name, page } = Route.useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [name, page]);

  return (
    <div className=''>
      <Blog name={name} page={parseInt(page, 10)} className="pt-18" />
    </div>
  );
}

export default BlogComponent;
