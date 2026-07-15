import './CardName.css';

const data = {
  nama: 'Ardivan',
  title: 'Front-End Developer',
  socialMedia: {
    facebook: 'https://www.facebook.com/profile.php?id=61591474657295',
    instagram: 'https://www.instagram.com/ardivandev/',
    linkedin: 'https://www.linkedin.com/in/ardivannrr',
    github: 'https://github.com/ardivandev',
  },
  badges: ['⚛️ React JS', '🎨 CSS', '🚀 HTML'],
};

function SocialButton({ media, link }) {
  return (
    <button type="button">
      <a href={link} target="_blank">
        <i className={`fa-brands fa-${media}`}></i>
      </a>
    </button>
  );
}

function Badge({ text }) {
  return (
    <button type="button">
      <div className="height">{text}</div>
    </button>
  );
}

function Header() {
  return (
    <>
      <div className="social-buttons">
        <SocialButton media="facebook" link={data.socialMedia.facebook} />
        <SocialButton media="instagram" link={data.socialMedia.instagram} />
        <SocialButton media="twitter" />
      </div>
      <div className="social-buttons right">
        <SocialButton media="linkedin" link={data.socialMedia.linkedin} />
        <SocialButton media="github" link={data.socialMedia.github} />
      </div>
    </>
  );
}

function Identity() {
  return (
    <div className="text">
      <div className="name-wrapper">
        <div className="name">{data.nama}</div>
      </div>
      <div className="title">{data.title}</div>
    </div>
  );
}

function Description() {
  return (
    <div className="desc">
      <p>
        My name is <b>{data.nama}</b> and i'm a developer
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum dolor dicta perferendis
        ducimus totam nihil sed animi voluptates, eos quasi?
      </p>
    </div>
  );
}

function TopCard() {
  return (
    <div className="top">
      <Header />
      <Identity />
    </div>
  );
}

function BottomCard() {
  return (
    <div className="bottom">
      <Description />
      <div className="buttons">
        {data.badges.map((badge) => (
          <Badge text={badge} />
        ))}
      </div>
    </div>
  );
}

function CardName() {
  return (
    <div className="card">
      <TopCard />
      <BottomCard />
    </div>
  );
}

export default CardName;
