import * as React from 'react';
import {MemberTableComponent} from './components/memberTable';
import {MemberEntity} from '../../model/member';
import {FiltersEntity} from '../../model/filters';

interface Props {
  members: Array<MemberEntity>;
  filters: FiltersEntity;
  loadMembers: (organizationName: string) => any;
  updateOrganizationFilter: (organizationName: string) => any;
}

export class MemberAreaComponent extends React.Component<Props> {
  onChange = event => {
    this.props.updateOrganizationFilter(event.target.value);
  };

  render() {
    return (
      <div>
        
        <input
          type="text"
          value={this.props.filters.organizationName}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="load"
          className="btn btn-default"
          onClick={() =>
            this.props.loadMembers(
              this.props.filters.organizationName
            )
          }
        />
        <br />
        <MemberTableComponent members={this.props.members} />
      </div>
    );
  }
}
