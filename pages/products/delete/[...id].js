import { useState, useEffect } from 'react'
import Layout from '@/components/Layout'
import { useRouter } from 'next/router'
import axios from 'axios'

export default function DeleteProductPage() {
  const router = useRouter()
  const [productInfo, setProduuctInfo] = useState()
  const { id } = router.query
  const goBack = () => router.push('/products')
  const deleteProduct = async () => {
    await axios.delete('/api/products/?id=' + id)
    goBack()
  }

  useEffect(() => {
    if (!id) return

    axios.get('/api/products?id=' + id).then((res) => {
      setProduuctInfo(res.data)
    })
  }, [id])

  return (
    <Layout>
      <h1 className="text-center mb-4">
        Do you really want to delete&nbsp;{productInfo?.title}?
      </h1>
      <div className="flex gap-4 justify-center">
        <button className="btn-red" onClick={deleteProduct}>
          Yes
        </button>
        <button className="btn-default" onClick={goBack}>
          No
        </button>
      </div>
    </Layout>
  )
}
