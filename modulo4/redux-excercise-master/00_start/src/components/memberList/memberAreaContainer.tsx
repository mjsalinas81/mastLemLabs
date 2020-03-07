import { connect } from 'react-redux';
import { memberRequest,updateOrganizationFilter } from '../../actions/memberRequest';
import { MemberAreaComponent } from './memberArea';
import { State } from '../../reducers';

const mapStateToProps = (state  :State) => {
  return{
      members: state.memberReducer,
      filters:state.filtersReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadMembers: (organizationName: string) => {return dispatch(memberRequest(organizationName));},
    updateOrganizationFilter: (organizationName: string) => {return dispatch(updateOrganizationFilter(organizationName));}
  };
};

export const MembersAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberAreaComponent);
