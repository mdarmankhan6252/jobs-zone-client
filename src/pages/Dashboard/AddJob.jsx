import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import DashboardTitle from "./DashboardTitle";

const AddJob = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const jobCategories = [
    "Web Development",
    "App Development",
    "Software Engineering",
    "Product Management",
    "Design",
    "Marketing",
    "Data Science",
    "Customer Support",
    "Sales",
    "Human Resources",
    "Finance",
    "Operations",
    "Business Development",
    "Content Writing",
    "Quality Assurance",
    "IT & Networking",
  ];

  const jobTypes = ["Full-time", "Part-time", "Contract", "Internship", "Temporary"];
  const experienceLevels = ["Entry Level", "Mid Level", "Senior Level"];
  const locations = ["Remote", "On-site", "Hybrid"];

  const handleAddJob = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const category = e.target.category.value;
    const jobType = e.target.jobType.value;
    const experienceLevel = e.target.experienceLevel.value;
    const location = e.target.location.value;
    const salary = e.target.salary.value;
    const companyName = e.target.companyName.value;
    const deadline = e.target.deadline.value;
    const description = e.target.description.value;

    const job = {
      title,
      description,
      category,
      jobType,
      location,
      salary,
      companyName,
      deadline,
      experienceLevel,
      author: {
        photo: user?.photoURL,
        name: user?.displayName,
        email: user?.email,
      },
    };

    axiosPublic.post("/job", job).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        toast.success("Job added successfully");
        e.target.reset();
        e.target.value = "";
        e.target.value = "";
        e.target.value = "";
        e.target.value = "";
      } else {
        toast.error("Failed to add job, please try again");
      }
    });
  };
  return (
    <div>
      <DashboardTitle title="Add Jobs" />

      <form onSubmit={handleAddJob} className="border border-gray-200 p-8 rounded-xl max-w-3xl mx-auto mb-8">
        <h3 className="font-medium text-xl mb-4">Job information</h3>

        {/* title and category */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-1/2">
            <label htmlFor="title" className="block mb-2 text-sm">
              Title
            </label>
            <input id="title" type="text" className="w-full p-2 border border-gray-200 rounded" placeholder="Job title" required />
          </div>
          <div className="md:w-1/2">
            <label htmlFor="category" className="block mb-2 text-sm">
              Category
            </label>
            <select id="category" className="w-full p-2 border border-gray-200 rounded" required>
              <option value="" selected>
                Select
              </option>
              {jobCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* job type and experience level */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <div className="md:w-1/2">
            <label htmlFor="jobType" className="block mb-2 text-sm">
              Job Type
            </label>
            <select id="jobType" className="w-full p-2 border border-gray-200 rounded" required>
              <option value="" selected>
                Select
              </option>
              {jobTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="md:w-1/2">
            <label htmlFor="experienceLevel" className="block mb-2 text-sm">
              Experience Level
            </label>
            <select id="experienceLevel" className="w-full p-2 border border-gray-200 rounded" required>
              <option value="" selected>
                Select
              </option>
              {experienceLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* location and salary */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <div className="md:w-1/2">
            <label htmlFor="location" className="block mb-2 text-sm">
              Location
            </label>
            <select id="location" className="w-full p-2 border border-gray-200 rounded" required>
              <option value="" selected>
                Select
              </option>
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
          <div className="md:w-1/2">
            <label htmlFor="salary" className="block mb-2 text-sm">
              Salary
            </label>
            <input id="salary" type="number" className="w-full p-2 border border-gray-200 rounded" placeholder="Salary" required />
          </div>
        </div>

        {/* company name and deadline */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <div className="md:w-1/2">
            <label htmlFor="companyName" className="block mb-2 text-sm">
              Company Name
            </label>
            <input id="companyName" type="text" className="w-full p-2 border border-gray-200 rounded" placeholder="Company Name" required />
          </div>
          <div className="md:w-1/2">
            <label htmlFor="deadline" className="block mb-2 text-sm">
              Deadline
            </label>
            <input id="deadline" type="date" className="w-full p-2 border border-gray-200 rounded" required />
          </div>
        </div>

        {/* job description */}
        <div className="mt-4">
          <label htmlFor="description" className="block mb-2 text-sm">
            Description
          </label>
          <textarea id="description" className="w-full p-2 border border-gray-200 rounded" rows={4} placeholder="Job description" required></textarea>
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

        <button className="w-full py-2 bg-[#6b46c1] transition-all hover:bg-[#553c9a] text-white rounded mt-4">Add job</button>
      </form>
    </div>
  );
};

export default AddJob;
