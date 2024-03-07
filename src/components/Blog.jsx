import { blogs } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import GradientLight from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import me1 from "../assets/blog/me1.png";

const Blog = () => {
  return (
    <Section id="blogs" crosses>
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Blog Repository"
          text="Dive into a treasure trove of knowledge and expertise. Explore my collection of insightful articles covering a wide range of topics, designed to inform, inspire, and empower."
        />
        <div className="flex flex-wrap gap-10 mb-10 ">
          {blogs.map((blog) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${blog.backgroundUrl})`,
              }}
              key={blog.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem]  ">
                <h5 className="h5 mb-5 ">{blog.title}</h5>
                <p className="body-2 mb-6 text-n-3">{blog.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={blog.iconUrl}
                    width={48}
                    height={40}
                    alt={blog.title}
                  />
                  <div className="ml-auto font-grotesk text-xl font-bold text-n-1 uppercase tracking-widest cursor-pointer">
                    <a
                      href={blog?.blogUrl}
                      className="underline cursor-pointer" target="_blank"
                    >
                      Read
                    </a>
                  </div>
                  <Arrow />
                </div>
              </div>
              {blog.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8 "
                style={{ clipPath: "url(#benefits" }}
              >
                  <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  <img
                      src={me1}
                      width={380}
                      height={362}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
              
              
                  {/* {blog.imageUrl && (
                    <img
                      src={me1}
                      width={380}
                      height={362}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                  )} */}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Blog;
