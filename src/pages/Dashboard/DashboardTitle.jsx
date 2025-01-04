const DashboardTitle = ({title, desc}) => {
   return (
      <div className="text-center space-y-5 py-12">

         <h2 className="text-3xl font-semibold font-serif sm:text-4xl">{title}</h2>
         <p className="text-sm font-light text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, minima!</p>
         
      </div>
   );
};

export default DashboardTitle;