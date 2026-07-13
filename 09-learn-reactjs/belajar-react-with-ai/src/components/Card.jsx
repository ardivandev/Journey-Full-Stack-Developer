function CardInformation(props) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '10px 0',
        gap: '15px',
      }}
    >
      <div>
        <img src="https://placehold.co/80" alt="" />
      </div>
      <div>
        <p>
          <b>Data Information</b>
        </p>
        <ul>
          <li>{props.nama}</li>
          <li>{props.umur} tahun</li>
        </ul>
      </div>
    </div>
  );
}

export default CardInformation;
