interface Project {
  url: string;
  image: string;
  title: string;
  content: string;
}

interface ProjectList {
  projects: Project[];
}

export default function Projects({ projects }: ProjectList) {
  return (
    <div className='grid-auto-fit gap-4 '>
      {/* Your projects here */}

      {projects.map((project, index) => (
        <div
          key={index}
          className='text-gray-400 bg-[#060f15] rounded-2xl overflow-hidden'
        >
          <div className='aspect-[600/400] text-center rounded-lg relative'>
            <div className='absolute p-8 top-0 left-0 w-full h-full flex justify-center items-end'>
              <a
                className='text-white px-2 rounded rounded-xl text-3xl capitalize bg-[#22222290]'
                href={project.url}
              >
                {project.title}
              </a>
            </div>
            <div className='overflow-hidden'>
              <img
                className='transition-all hover:scale-[1.2]'
                src={`images/${project?.image}`}
                alt=''
              />
            </div>
          </div>
          <article className='p-4  customized-link'>
            <a href={project.url}>
              <h3 className='text-xl font-bold mb-2 capitalize'>
                {project.title}
              </h3>
            </a>

            <p
              className='text-base paragraphs-link'
              dangerouslySetInnerHTML={{ __html: project.content }}
            />
          </article>
        </div>
      ))}
    </div>
  );
}
