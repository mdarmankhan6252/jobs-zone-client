import { Link } from "react-router-dom";

const TechStack = () => {
  return (
    <div>
      <div className="border-b border-gray-200">
        <h2 className="mb-4 text-2xl font-medium text-gray-900 md:mb-5">Tech stack at Jobs Zone</h2>
        <p className="mb-8 text-gray-600 md:mb-12 md:text-lg">
          Learn about the 35 tools and technologies that Jobs Zone uses to build, market, and sell its products.
        </p>
        <section>
          <article className="mb-8 md:mb-12">
            <h3 className="mb-2 text-xl font-medium text-gray-900">Languages &amp; Frameworks</h3>
            <p className="mb-6 text-gray-600">
              These are the programming languages and software frameworks used for developing software, encompassing a variety of applications from web
              development to data analysis and machine learning.
            </p>
            <div className="grid grid-cols-2 gap-3 rounded-xl bg-gray-50 p-3 md:grid-cols-4">
              <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" href="#">
                <img alt="Node.js logo" className="h-12 w-12 flex-grow-0 rounded-md" src="https://cdn-images.himalayas.app/mac7pzhubfu0uuhylhvr8v40rjx2" />
                <p className="line-clamp-2 text-sm font-medium text-gray-900">Node.js</p>
              </Link>
              <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" href="#">
                <img
                  alt="Ruby on Rails logo"
                  className="h-12 w-12 flex-grow-0 rounded-md"
                  src="https://cdn-images.himalayas.app/x9bupce5h50hmstwrxo9muh416b9"
                />
                <p className="line-clamp-2 text-sm font-medium text-gray-900">Ruby on Rails</p>
              </Link>
              <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" href="#">
                <img alt="Next.js logo" className="h-12 w-12 flex-grow-0 rounded-md" src="https://cdn-images.himalayas.app/j4wqd3kinpn8thikun1txhw32ama" />
                <p className="line-clamp-2 text-sm font-medium text-gray-900">Next.js</p>
              </Link>
              <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" href="#">
                <img alt="Tailwind CSS logo" className="h-12 w-12 flex-grow-0 rounded-md" src="https://cdn-images.himalayas.app/5ppsgnrgrquces08d2nezal0td49" />
                <p className="line-clamp-2 text-sm font-medium text-gray-900">Tailwind CSS</p>
              </Link>
              <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" href="#">
                <img alt="JavaScript logo" className="h-12 w-12 flex-grow-0 rounded-md" src="https://cdn-images.himalayas.app/ycjxpgfg2ujd9knqdym12jtwoadv" />
                <p className="line-clamp-2 text-sm font-medium text-gray-900">JavaScript</p>
              </Link>
              <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" href="#">
                <img alt="HTML5 logo" className="h-12 w-12 flex-grow-0 rounded-md" src="https://cdn-images.himalayas.app/e4pdsmlydq5tqn6xx1jjdlagm04g" />
                <p className="line-clamp-2 text-sm font-medium text-gray-900">HTML5</p>
              </Link>
              <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" href="#">
                <img alt="CSS 3 logo" className="h-12 w-12 flex-grow-0 rounded-md" src="https://cdn-images.himalayas.app/zj0ftcxoi81ky0fprmz29peb3doj" />
                <p className="line-clamp-2 text-sm font-medium text-gray-900">CSS 3</p>
              </Link>
              <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" href="#">
                <img alt="Ruby logo" className="h-12 w-12 flex-grow-0 rounded-md" src="https://cdn-images.himalayas.app/wgfrvr3400uskreah3r3ynde7g9g" />
                <p className="line-clamp-2 text-sm font-medium text-gray-900">Ruby</p>
              </Link>
              <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" href="#">
                <img alt="TypeScript logo" className="h-12 w-12 flex-grow-0 rounded-md" src="https://cdn-images.himalayas.app/4i2t1mdxtl39bl61qiiy4dwdb6na" />
                <p className="line-clamp-2 text-sm font-medium text-gray-900">TypeScript</p>
              </Link>
              <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" href="#">
                <img
                  alt="Radix Primitives logo"
                  className="h-12 w-12 flex-grow-0 rounded-md"
                  src="https://cdn-images.himalayas.app/hcqs9gcs0b2k5cspb1twrtn6ztc3"
                />
                <p className="line-clamp-2 text-sm font-medium text-gray-900">Radix Primitives</p>
              </Link>
            </div>
          </article>
          <article className="mb-8 md:mb-12">
            <h3 className="mb-2 text-xl font-medium text-gray-900">Development</h3>
            <p className="mb-6 text-gray-600">
              This category includes essential tools used throughout the software development lifecycle, covering areas such as version control, code testing,
              and the building and deployment of code. These tools aim to enhance productivity, ensure code quality, and facilitate collaboration among team
              members.
            </p>
            <div className="grid grid-cols-2 gap-3 rounded-xl bg-gray-50 p-3 md:grid-cols-4">
              <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" to="#">
                <img alt="Fly logo" className="h-12 w-12 flex-grow-0 rounded-md" src="https://cdn-images.himalayas.app/tm4pwqvvn603tg53bu0i4nehx116" />
                <p className="line-clamp-2 text-sm font-medium text-gray-900">Fly</p>
              </Link>
            </div>
          </article>
          <article className="mb-8 md:mb-12">
            <h3 className="mb-2 text-xl font-medium text-gray-900">Libraries</h3>
            <p className="mb-6 text-gray-600">
              These are collections of pre-written code that developers can use to save time and improve code reliability. Libraries provide ready-to-use
              solutions for common programming tasks and are often specialized for specific programming languages or frameworks.
            </p>
            <div className="grid grid-cols-2 gap-3 rounded-xl bg-gray-50 p-3 md:grid-cols-4">
              <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" href="#">
                <img alt="React logo" className="h-12 w-12 flex-grow-0 rounded-md" src="https://cdn-images.himalayas.app/fswu1o4vgzzeh3sev4gsq3uapvv4" />
                <p className="line-clamp-2 text-sm font-medium text-gray-900">React</p>
              </Link>
              <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" href="#">
                <img alt="ProseMirror logo" className="h-12 w-12 flex-grow-0 rounded-md" src="https://cdn-images.himalayas.app/4ticwjqfe2687zlpr80kbtu4bfq6" />
                <p className="line-clamp-2 text-sm font-medium text-gray-900">ProseMirror</p>
              </Link>
              <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" href="#">
                <img alt="Stimulus logo" className="h-12 w-12 flex-grow-0 rounded-md" src="https://cdn-images.himalayas.app/8kzxp9hc08c9wq4ke387u6c9tej4" />
                <p className="line-clamp-2 text-sm font-medium text-gray-900">Stimulus</p>
              </Link>
            </div>
          </article>
          <article className="mb-8 md:mb-12">
            <h3 className="mb-2 text-xl font-medium text-gray-900">Application Hosting</h3>
            <p className="mb-6 text-gray-600">
              Application hosting services are platforms that provide a scalable environment for running applications, from web apps to microservices. These
              platforms handle the underlying infrastructure and often come with features like automated scaling, backup, and security, allowing developers to
              focus solely on the application itself.
            </p>
            <div className="grid grid-cols-2 gap-3 rounded-xl bg-gray-50 p-3 md:grid-cols-4">
              <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" href="#">
                <img
                  alt="Amazon Web Services (AWS) logo"
                  className="h-12 w-12 flex-grow-0 rounded-md"
                  src="https://cdn-images.himalayas.app/nb465f8n69b1ygu57ufiq7jsf9mx"
                />
                <p className="line-clamp-2 text-sm font-medium text-gray-900">Amazon Web Services (AWS)</p>
              </Link>
            </div>
          </article>
          <article className="mb-8 md:mb-12">
            <h3 className="mb-2 text-xl font-medium text-gray-900">Data Stores</h3>
            <p className="mb-6 text-gray-600">
              This category includes tools and services that store, manage, and process data, ranging from structured to unstructured data types. These can be
              databases or data warehousing tools, capable of handling large volumes of information and often featuring real-time analytics capabilities.
            </p>
            <div className="grid grid-cols-2 gap-3 rounded-xl bg-gray-50 p-3 md:grid-cols-4">
              <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" href="#">
                <img alt="Amazon S3 logo" className="h-12 w-12 flex-grow-0 rounded-md" src="https://cdn-images.himalayas.app/vnko4wip6citypoef7j2so81djzd" />
                <p className="line-clamp-2 text-sm font-medium text-gray-900">Amazon S3</p>
              </Link>
              <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" href="#">
                <img alt="PostgreSQL logo" className="h-12 w-12 flex-grow-0 rounded-md" src="https://cdn-images.himalayas.app/batmyosbgz3rfuymfvocwxelb546" />
                <p className="line-clamp-2 text-sm font-medium text-gray-900">PostgreSQL</p>
              </Link>
              <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" href="#">
                <img alt="Redis logo" className="h-12 w-12 flex-grow-0 rounded-md" src="https://cdn-images.himalayas.app/p43ndqv1ikqacaafq05ac34axesr" />
                <p className="line-clamp-2 text-sm font-medium text-gray-900">Redis</p>
              </Link>
            </div>
          </article>
          <article className="mb-8 md:mb-12">
            <h3 className="mb-2 text-xl font-medium text-gray-900">Application Utilities</h3>
            <p className="mb-6 text-gray-600">
              These tools offer a range of services that bolster the functioning and usability of an application, such as API management, data caching, and user
              authentication.
            </p>
            <div className="grid grid-cols-2 gap-3 rounded-xl bg-gray-50 p-3 md:grid-cols-4">
              <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" href="#">
                <img alt="OpenSearch logo" className="h-12 w-12 flex-grow-0 rounded-md" src="https://cdn-images.himalayas.app/5k86jki3vp9k7i9554gfxas5cgwi" />
                <p className="line-clamp-2 text-sm font-medium text-gray-900">OpenSearch</p>
              </Link>
            </div>
          </article>
          <article className="mb-8 md:mb-12">
            <h3 className="mb-2 text-xl font-medium text-gray-900">Analytics</h3>
            <p className="mb-6 text-gray-600">
              These analytics tools collect, report, and analyze data, including user engagement metrics, traffic sources, and conversion rates. They provide
              real-time insights to understand site performance, track user behavior, and enable data-driven decisions for website and app optimization.
            </p>
            <div className="grid grid-cols-2 gap-3 rounded-xl bg-gray-50 p-3 md:grid-cols-4">
              <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" href="#">
                <img
                  alt="Google Tag Manager logo"
                  className="h-12 w-12 flex-grow-0 rounded-md"
                  src="https://cdn-images.himalayas.app/4csj8t79q1d6tfv49rdcprh6qals"
                />
                <p className="line-clamp-2 text-sm font-medium text-gray-900">Google Tag Manager</p>
              </Link>
              <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" href="#">
                <img
                  alt="Google Analytics logo"
                  className="h-12 w-12 flex-grow-0 rounded-md"
                  src="https://cdn-images.himalayas.app/2jyt3hxbzqwumj4oredcryvrqllt"
                />
                <p className="line-clamp-2 text-sm font-medium text-gray-900">Google Analytics</p>
              </Link>
              <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" href="#">
                <img
                  alt="Google Search Console logo"
                  className="h-12 w-12 flex-grow-0 rounded-md"
                  src="https://cdn-images.himalayas.app/1uk7csghkfrnleyuh5l5hy2i9qul"
                />
                <p className="line-clamp-2 text-sm font-medium text-gray-900">Google Search Console</p>
              </Link>
              <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" href="#">
                <img alt="PostHog logo" className="h-12 w-12 flex-grow-0 rounded-md" src="https://cdn-images.himalayas.app/34b2spxh8a63r1mteihn9meaq0bt" />
                <p className="line-clamp-2 text-sm font-medium text-gray-900">PostHog</p>
              </Link>
            </div>
          </article>
          <article className="mb-8 md:mb-12">
            <h3 className="mb-2 text-xl font-medium text-gray-900">Assets and Media</h3>
            <p className="mb-6 text-gray-600">
              This category includes tools and platforms designed for managing and distributing digital media content, such as videos, images, and audio files.
              These solutions offer features like secure storage, easy retrieval, and optimized delivery.
            </p>
            <div className="grid grid-cols-2 gap-3 rounded-xl bg-gray-50 p-3 md:grid-cols-4">
              <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" href="#">
                <img alt="Cloudflare logo" className="h-12 w-12 flex-grow-0 rounded-md" src="https://cdn-images.himalayas.app/5umzg11xn9ul27609kh4r9k5nazs" />
                <p className="line-clamp-2 text-sm font-medium text-gray-900">Cloudflare</p>
              </Link>
              <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" href="#">
                <img alt="ImageKit logo" className="h-12 w-12 flex-grow-0 rounded-md" src="https://cdn-images.himalayas.app/3q73emodjs7e81t1d50h1ji4l9an" />
                <p className="line-clamp-2 text-sm font-medium text-gray-900">ImageKit</p>
              </Link>
            </div>
          </article>
          <article className="mb-8 md:mb-12">
            <h3 className="mb-2 text-xl font-medium text-gray-900">Design</h3>
            <p className="mb-6 text-gray-600">
              These tools assist in creating and managing the visual and multimedia aspects of a product. They cover a broad range of tasks from UI/UX design,
              prototyping, and graphics design to video editing. These platforms often include features like collaborative functionalities, versioning, and
              templates, serving both individual creators and collaborative teams.
            </p>
            <div className="grid grid-cols-2 gap-3 rounded-xl bg-gray-50 p-3 md:grid-cols-4">
              <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" href="#">
                <img alt="Google Fonts logo" className="h-12 w-12 flex-grow-0 rounded-md" src="https://cdn-images.himalayas.app/4vyaoadqp1xlj021oej0iwtxcjvn" />
                <p className="line-clamp-2 text-sm font-medium text-gray-900">Google Fonts</p>
              </Link>
              <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" href="#">
                <img alt="Figma logo" className="h-12 w-12 flex-grow-0 rounded-md" src="https://cdn-images.himalayas.app/inmd92pao50ajvvvp7gf31a81u67" />
                <p className="line-clamp-2 text-sm font-medium text-gray-900">Figma</p>
              </Link>
              <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" href="#">
                <img alt="Untitled UI logo" className="h-12 w-12 flex-grow-0 rounded-md" src="https://cdn-images.himalayas.app/otx4z1fcjfpusjcg9cecifscn0vu" />
                <p className="line-clamp-2 text-sm font-medium text-gray-900">Untitled UI</p>
              </Link>
            </div>
          </article>
          <article className="mb-8 md:mb-12">
            <h3 className="mb-2 text-xl font-medium text-gray-900">Collaboration</h3>
            <p className="mb-6 text-gray-600">
              Collaboration tools are designed to facilitate effective team communication and cooperation across various channels such as chat, video
              conferencing, and file sharing. These tools help teams coordinate tasks, communicate in real-time, and share work resources, streamlining both
              remote and in-office collaboration.
            </p>
            <div className="grid grid-cols-2 gap-3 rounded-xl bg-gray-50 p-3 md:grid-cols-4">
              <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" href="#">
                <img alt="Linear logo" className="h-12 w-12 flex-grow-0 rounded-md" src="https://cdn-images.himalayas.app/fehgabg9ak288ugogtb7rupw4d00" />
                <p className="line-clamp-2 text-sm font-medium text-gray-900">Linear</p>
              </Link>
              <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" href="#">
                <img
                  alt="Google Workspace logo"
                  className="h-12 w-12 flex-grow-0 rounded-md"
                  src="https://cdn-images.himalayas.app/3smulk2zoda7dvplg3far1aw6f56"
                />
                <p className="line-clamp-2 text-sm font-medium text-gray-900">Google Workspace</p>
              </Link>
              <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" href="#">
                <img alt="Discord logo" className="h-12 w-12 flex-grow-0 rounded-md" src="https://cdn-images.himalayas.app/xoj5jpuhe5jjl5kphj4d1od7nh8h" />
                <p className="line-clamp-2 text-sm font-medium text-gray-900">Discord</p>
              </Link>
              <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" href="#">
                <img alt="1Password logo" className="h-12 w-12 flex-grow-0 rounded-md" src="https://cdn-images.himalayas.app/sxgpa0iiiaw7gxtmfcbi24ke6q6a" />
                <p className="line-clamp-2 text-sm font-medium text-gray-900">1Password</p>
              </Link>
            </div>
          </article>
          <article className="mb-8 md:mb-12">
            <h3 className="mb-2 text-xl font-medium text-gray-900">Marketing and Sales Tools</h3>
            <p className="mb-6 text-gray-600">
              These tools offer a suite of solutions aimed at enhancing marketing and sales processes. The category includes customer relationship management
              (CRM) software for managing interactions with clients, email marketing services for targeted campaigns, SEO tools for improving online visibility,
              and other platforms geared towards lead generation, analytics, and customer engagement.
            </p>
            <div className="grid grid-cols-2 gap-3 rounded-xl bg-gray-50 p-3 md:grid-cols-4">
              <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" href="#">
                <img alt="Customer.io logo" className="h-12 w-12 flex-grow-0 rounded-md" src="https://cdn-images.himalayas.app/hdy4belubvm2efc583v2lxfzm5bp" />
                <p className="line-clamp-2 text-sm font-medium text-gray-900">Customer.io</p>
              </Link>
              <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" href="#">
                <img alt="Ghost logo" className="h-12 w-12 flex-grow-0 rounded-md" src="https://cdn-images.himalayas.app/7e1xodhigxmq39ndpwqra81uxc3b" />
                <p className="line-clamp-2 text-sm font-medium text-gray-900">Ghost</p>
              </Link>
              <Link className="flex items-center gap-x-3 rounded-lg bg-white p-2" href="#">
                <img alt="Ahrefs logo" className="h-12 w-12 flex-grow-0 rounded-md" src="https://cdn-images.himalayas.app/2mb623bvow5o8jbx0sn0tzmsja61" />
                <p className="line-clamp-2 text-sm font-medium text-gray-900">Ahrefs</p>
              </Link>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default TechStack;
