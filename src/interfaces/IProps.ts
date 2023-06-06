export default interface IProps {
  history: { push: Function },
  match?: { params: { id: number | string } } | any,
}