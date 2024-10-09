import PropTypes from 'prop-types';

const ExpandableDropdown = ({ name, expanded, onToggle }) => {
    return (
        <div>
            <button onClick={onToggle}>
            {expanded ? " V " : " > "}
            {name}
            </button>
            <div hidden={!expanded}>More information here...</div>
        </div>
    );
};

ExpandableDropdown.propTypes = {
    name: PropTypes.string.isRequired,
    expanded: PropTypes.bool,
    onToggle: PropTypes.func
}

export default ExpandableDropdown