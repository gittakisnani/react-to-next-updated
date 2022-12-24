import { useRouter } from 'next/router'
import HeadMeta from '../../components/HeadMeta'
import PracticeSinglePage from '../../containers/Pages/PracticeSinglePage'
const PracticeSingle = () => {
  const router = useRouter()
  return (
    <>
      <HeadMeta />
      <PracticeSinglePage params={router.query} />
    </>
  )
}

export default PracticeSingle