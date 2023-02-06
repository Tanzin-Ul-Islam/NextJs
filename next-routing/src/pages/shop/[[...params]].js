import {useRouter} from 'next/router'

export default function Shop() {
  let params = useRouter().query.params;
  console.log(params);
  if (params.length == 2) {
    return (<div>Shop page feature {params[0]} and example {params[1]} </div>)
  }
  else if (params.length == 1) {
    return (<div>Shop page feature {params[0]} </div>)
  }
  else {
    return (<div>Shop page</div>)
  }
}
