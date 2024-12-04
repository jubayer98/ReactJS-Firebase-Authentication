import PropTypes from 'prop-types';


const Languages = ({ language, onStartLearning }) => {
    const { language_name, tagline, image } = language

    return (
        <div className="card card-compact w-full shadow-xl">
            <figure>
                <img
                    src={image}
                    alt={language_name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{language_name}</h2>
                <p>{tagline}</p>
                <div className="card-actions">
                    <button
                        onClick={() => onStartLearning(language_name)}
                        className="btn bg-black hover:bg-black hover:text-white text-yellow-400">Start Learning
                    </button>
                </div>
            </div>
        </div>
    );
};

Languages.propTypes = {
    language: PropTypes.shape({
        language_name: PropTypes.string.isRequired,
        tagline: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    }).isRequired,
    onStartLearning: PropTypes.func.isRequired
};

export default Languages;