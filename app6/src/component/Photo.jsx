const Photo = (props) => {
  const { title, url } = props.data;
  return (
    <div class="col-sm-3">
      <div class="card">
        <img src={url} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
        </div>
      </div>
    </div>
  );
};
export default Photo;