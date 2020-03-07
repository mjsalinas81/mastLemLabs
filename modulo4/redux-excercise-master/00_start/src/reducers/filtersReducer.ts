import { actionsEnums } from "../common/actionsEnums";
import { FiltersEntity } from "../model/filters";

export type filtersState = FiltersEntity;

export const filtersReducer = (
    state: filtersState = { organizationName: "lemoncode" },
    action
  ) => {
    switch (action.type) {
      case actionsEnums.ORGANIZATION_FILTER_UPDATED:
        return handleUpdateOrganizationCompleteAction(state, action.payload);
    }
  
    return state;
  };

  const handleUpdateOrganizationCompleteAction = (state: filtersState,organizationName: string) => ({
    ...state,
    organizationName: organizationName
  });