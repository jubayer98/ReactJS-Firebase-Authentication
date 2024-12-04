import PropTypes from 'prop-types';

const Videos = ({ video }) => {
    const { youtube_video_link, title } = video
    return (
        <div className="card card-compact w-full shadow-xl">
      <figure>
        <iframe
          width="100%"
          height="315"
          src={youtube_video_link}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
      </figure>
    </div>
    );
};

Videos.propTypes = {
  video: PropTypes.shape({
      youtube_video_link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
  }).isRequired
};

export default Videos;