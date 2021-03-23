import React from "react";
import {connect} from 'react-redux';
import { setFilterActionCreator } from "../../redux/courses/actions";

const Filter = ({ filter, setFilterActionCreator }) => {
  return (
    <label>
      Filter
      <input
        type='text'
        value={filter}
        onChange={(e) => setFilterActionCreator(e.target.value)}
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
    setFilterActionCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
