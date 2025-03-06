function PageUnderConstruction() {
  return (
    <div className="page-under-construction">
      <h1>Currently this is page is being under construction</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi
        labore, blanditiis laborum nesciunt culpa quos eveniet inventore minima,
        alias cupiditate, a nobis cum optio possimus quis quibusdam aut magnam
        ut.
      </p>
      <button onClick={() => history.back()}>Go Back</button>
    </div>
  );
}

export default PageUnderConstruction;
