const Page = ({params} : {params : any}) => {
  console.log(params)
  return (
    <div>{params.program}</div>
  )
}
export default Page