import { useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import DashboardTitle from "./DashboardTitle";

const AddBlog = () => {
  const { user } = useAuth();
  const [tags, setTags] = useState([]);

  const handleStoreTags = (e) => {
    const tag = e.target.value.split(",");
    setTags(tag);
  };

  const blogCategories = [
    "Interview Tips",
    "Resume Tips",
    "Career Advice",
    "Job Search Tips",
    "Freelancing Tips",
    "Remote Work Tips",
    "Productivity Tips",
    "Interview Questions",
    "Resume Examples",
    "Cover Letter Tips",
    "Networking Tips",
    "Personal Branding",
    "Salary Negotiation",
    "Job Offer Tips",
    "Career Growth",
    "Interviewing",
    "Job Search",
  ];

  const handleAddCraftItem = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const category = e.target.category.value;
    const summery = e.target.summery.value;
    const description = e.target.description.value;

    const blog = {
      title,
      summery,
      description,
      category,
      tags: tags.map((tag) => tag.trim()),
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      author: {
        photo: user?.photoURL,
        name: user?.displayName,
        email: user?.email,
      },
    };

    console.log(blog);
    console.log(tags.length);
    toast.success("Blog added successfully");
  };
  return (
    <div>
      <DashboardTitle title="Add Blogs" />

      <form onSubmit={handleAddCraftItem} className="border border-gray-200 p-8 rounded-xl max-w-3xl mx-auto mb-8">
        <h3 className="font-medium text-xl mb-4">Blog information</h3>

        {/* title */}
        <div>
          <label htmlFor="title" className="block mb-2 text-sm">
            Title
          </label>
          <input id="title" type="text" className="w-full p-2 border border-gray-200 rounded" placeholder="Blog title" required />
        </div>

        {/* category */}
        <div className="mt-4">
          <label htmlFor="category" className="block mb-2 text-sm">
            Category
          </label>
          <select id="category" className="w-full p-2 border border-gray-200 rounded" required>
            <option value="" selected>
              Select
            </option>
            {blogCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* blog summery */}
        <div className="mt-4">
          <label htmlFor="summery" className="block mb-2 text-sm">
            Summery
          </label>
          <textarea id="summery" className="w-full p-2 border border-gray-200 rounded" rows={4} placeholder="Blog summery" required></textarea>
        </div>

        {/* blog description */}
        <div className="mt-4">
          <label htmlFor="description" className="block mb-2 text-sm">
            Description
          </label>
          <textarea id="description" className="w-full p-2 border border-gray-200 rounded" rows={4} placeholder="Blog description" required></textarea>
        </div>

        {/* tags */}
        <div className="mt-4">
          <label htmlFor="tags" className="block mb-2 text-sm">
            Tags (separate by comma)
          </label>

          {/* show tags in a box */}
          <div className={`flex flex-wrap gap-4 ${tags[0] === "" || tags[0] === " " ? "mb-0" : "mb-4"} ${tags.length === 0 ? "hidden" : ""}`}>
            {tags.map((tag, index) => (
              <span key={index} className={`text-primary-700 bg-primary-100 p-2 rounded ${tag === "" || tag === " " ? "hidden" : ""}`}>
                {tag}
              </span>
            ))}
          </div>

          <input
            id="tags"
            type="text"
            className="w-full p-2 border border-gray-200 rounded"
            placeholder="tag1, tag2, tag3"
            value={tags}
            onChange={(e) => handleStoreTags(e)}
          />
        </div>

        {/* author information */}
        <h3 className="font-medium text-xl my-4">Author information</h3>

        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <div className="md:w-1/2">
            <label htmlFor="author" className="block mb-2 text-sm">
              Author
            </label>
            <input
              id="author"
              type="text"
              value={user?.displayName}
              className="w-full p-2 border border-gray-200 rounded cursor-not-allowed"
              placeholder="Author"
              disabled
            />
          </div>
          <div className="md:w-1/2">
            <label htmlFor="authorEmail" className="block mb-2 text-sm">
              Author Email
            </label>
            <input
              id="authorEmail"
              type="email"
              value={user?.email}
              className="w-full p-2 border border-gray-200 rounded cursor-not-allowed"
              placeholder="Author Email"
              disabled
            />
          </div>
        </div>

        <button className="w-full py-2 bg-[#6b46c1] transition-all hover:bg-[#553c9a] text-white rounded mt-4">Add blog</button>
      </form>
    </div>
  );
};

export default AddBlog;
