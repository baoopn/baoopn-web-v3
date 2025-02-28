import { createFileRoute } from '@tanstack/react-router';
import Blog from '../components/Blog';

export const Route = createFileRoute('/blog/$name/$page')({
  component: BlogComponent,
});

function BlogComponent() {
  const { name, page } = Route.useParams();

  return (
    <div className=''>
      <Blog name={name} page={parseInt(page, 10)} className="pt-18" />
    </div>
  );
}

export default BlogComponent;
