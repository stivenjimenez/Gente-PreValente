const ItemModal = (props) => {
  const { title } = props;
  return (
    <div className="flex items-center">
      <h2 className="text-2xl w-45">{title}</h2>
      <div className="ml-12">
        <img src="https://i.imgur.com/kmd4RkQ.png" />
        <small>RUT Pre...</small>
      </div>
    </div>
  );
};

export default ItemModal;
