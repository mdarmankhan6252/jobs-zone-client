import nethermide from "../../assets/images/nethermide.png";

const RemoteCopaniesCard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
        <div>
          <div className="flex justify-between p-5">
            <img src={nethermide} alt="" />
            <button className="btn">42 jobs</button>
          </div>
          <h2>Nethermide</h2>
          <div className="flex justify-between">
            <div>Benifits</div>
            <div>Teck stack</div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            molestiae, dolores sint, cupiditate, iure hic reprehenderit
            doloribus incidunt consequatur accusamus excepturi necessitatibus!
            Ea assumenda, pariatur saepe minus nobis distinctio officia?
          </p>
          <div>
            <button className="btn"># Blackchain</button>
            <button className="btn"># Ethereum</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoteCopaniesCard;
