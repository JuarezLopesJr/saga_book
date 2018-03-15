import _forEach from 'lodash/forEach';

export default function(errors) {
  const result = {};
  _forEach(errors, (val, key) => {
    result[key] = val.message;
  });
  return result;
}
