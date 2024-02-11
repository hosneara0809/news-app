import Layout from '@/components/layout/Layout'
import CategoryNewsSection from './components/CategoryNewsSection'

export default function page() {
  return (
   <>
     <Layout>
      <CategoryNewsSection category="World" />
      <CategoryNewsSection category="Business" />
      <CategoryNewsSection category="Domestic" />
      <CategoryNewsSection category="top" />
      <CategoryNewsSection category="education" />
      <CategoryNewsSection category="entertainment" />
      <CategoryNewsSection category="environment" />
      <CategoryNewsSection category="food" />
      <CategoryNewsSection category="health" />
      <CategoryNewsSection category="politics" />
      <CategoryNewsSection category="science" />
      <CategoryNewsSection category="sports" />
      <CategoryNewsSection category="tourism" />
     </Layout>

   </>
  )
}
