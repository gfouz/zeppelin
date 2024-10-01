export type Meta = {
  src?: string;
  alt?: string;
  title?: string;
  author?: string;
  date?: string | number;
};

export type Post = {
  meta: Meta;
  slug?: string;
};

export type PostCard = {
  post: Post;
};

export default function Card({ post }: PostCard) {
  const _date = post.meta.date !== undefined ? post.meta.date : '';
  const date = new Date(_date).toDateString();
  return (
    <section className='bg-grey-900 cursor-pointer'>
      <figure className='overflow-hidden'>
        <img
          className='max-w-[100%] h-auto'
          src={post.meta?.src}
          alt={post.meta?.alt}
        />
      </figure>
      <article className='p-2 flex flex-col items-start'>
        <h3 className='text-[18px] font-black'>{post.meta?.title}</h3>
        <p>{date}</p>
        <p>{post.meta?.author}</p>
      </article>
    </section>
  );
}
