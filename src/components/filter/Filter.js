import React from "react";
import {connect} from 'react-redux';
import { setFilter } from "../../redux/courses/reducer";


const Filter = ({ filter, setFilter }) => {
  return (
    <label>
      Filter
      <input
        type='text'
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </label>
  );
};

const mapStateToProps = (state) => {
    return {
        filter: state.courses.filter
    }
}

const mapDispatchToProps =  {
    setFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
