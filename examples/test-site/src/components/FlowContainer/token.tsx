import {
  addClasses,
  withDesign,
} from '@bodiless/fclasses';

const asFlowContainerWithMargins = withDesign({
  Wrapper: addClasses('-m-5 py-5'),
  ComponentWrapper: addClasses('p-5'),
});

/* eslint-disable import/prefer-default-export */
export {
  asFlowContainerWithMargins,
};
